---
slug: onnx-on-web
title: Onnx web runtime 구축하기 with Vite
authors: mooyeon
tags: [web, onnx, vit]
date: 2025-07-28T20:25
---


# Onnx web runtime 구축하기 with Vite

## 소개

Vission AI를 사용자 로컬 환경에서 실행하기 위해 WebGPU, WebGL, WASM을 통해 Web환경에서 AI Model을 실행한 방법들과 Model을 캐싱하며 버전관리를 하는 방법에 대해 작성하였다.

<aside class="callout info">

<strong>목차</strong>


1. [배경](#배경)
2. [Get Started](#get-started)
3. [모델 로드 및 추론 실행](#모델-로드-및-추론-실행)
4. [백엔드 선택 가이드](#백엔드-선택-가이드)
5. [모델 캐싱 및 버전 관리](#모델-캐싱-및-버전-관리)
6. [실제 Vision AI 모델 적용 예제](#실제-vision-ai-모델-적용-예제)
7. [성능 최적화 및 메모리 관리](#성능-최적화-및-메모리-관리)
8. [에러 처리 및 디버깅](#에러-처리-및-디버깅)
9. [마무리](#마무리)


</aside>


<!--truncate-->

## 배경

의료용 AI 모바일 애플리케이션으로 X-ray, C-arm 등의 이미지를 스마트폰으로 촬영해서 이미지를 원상태로 펼쳐주고 각각의 뼈 각도를 측정할 수 있는 OnDevice AI 서비스를 개발하여 테스트 중이다. 하지만 현업 의사분들이 사용 시 노트북에 있는 이미지 파일을 바로 확인하여 다음날 봐야할 환자들의 정보를 미리 확인할 수 있도록 하는 기능이 필요하였고, 이를 위해 Web runtime onnx를 사용하여 Web browser에 AI Model을 캐싱하고 사용자의 로컬환경에서 실행할 수 있도록 적용하여야했다.

아래 내용은 Web runtime onnx를 실행하기 위해 찾아본 정보들을 정리한 내용이다.

## Get Started

ONNX Runtime Web을 적용하는 방법으로 [공식사이트](https://onnxruntime.ai/)에서는 아래의 방법들을 소개한다.

### JavaScript import statement

#### Install

<div class="code-tabs">

<section class="code-panel" aria-label="npm">

```bash
# install latest release version
npm install onnxruntime-web

# install nightly build dev version
npm install onnxruntime-web@dev
```

</section>
<section class="code-panel" aria-label="yarn">

```bash
# install latest release version
yarn add onnxruntime-web

# install nightly build dev version
yarn add onnxruntime-web@dev
```

</section>

</div>

#### Import

```js
import * as ort from "onnxruntime-web";
```

하지만 위 방법대로만 적용한다면

```bash
no available backend found. ERR: [webgpu] RuntimeError: Aborted(both async and sync fetching of the wasm failed). Build with -sASSERTIONS for more info., [webgl] backend not found., [wasm] Error: previous call to 'initWasm()' failed.
```

와 같이 `no available backend found` 에러가 발생한다. 현재 프로젝트 환경은 `React Router V7 + Vite` 이므로 이에 추가적인 설정이 필요하다

```ts
...
export default defineConfig({
  ...
  ...
  assetsInclude: ["**/*.onnx"],
  optimizeDeps: {
    exclude: ["onnxruntime-web"],
  },
});
```

- `assetsInclude: ["**/*.onnx"]`

  - `.onnx` 파일을 정적 자산(asset)으로 처리
  - 해당 파일들은 빌드 시 `dist/` 폴더로 복사되고 URL을 통해 접근 가능
  - 모델 파일을 `import` 하거나 `public` 폴더에서 `fetch` 할 수 있도록 해줌

- `optimizeDeps: exclude: ["onnxruntime-web"]`
  - `onnxruntime-web` 패키지를 Vite 사전 번들링(pre-bundling)에서 제외
  - 이 패키지는 WASM 파일과 복잡한 로딩 로직을 포함하므로 런타임에 동적으로 로드되어야 함
  - Vite가 이 패키지를 ESM으로 변환하려다 실패하는 것을 방지

간단한 프로젝트라면 CDN 에서 script 를 받아와 `js`로 실행해주는 것도 가능하다.

### HTML script tag

#### Import

```html
<script src="https://example.com/path/ort.webgpu.min.js"></script>
```

#### 사용법

이 경우 `window.`의 `ort`를 가져와서 사용하여야 한다.

##### 예시

```ts
const session = await window.ort.InferenceSession.create(modelSource as any, {
  executionProviders: ["webgpu", "webgl", "wasm"],
});
```

하지만 타입 안전성, 번들 최적화, 오프라인 지원, 의존성 관리, 보안 등의 문제로 이번 프로젝트에서는 `Package import` 방식을 적용하도록 한다.

## 모델 로드 및 추론 실행

### 기본 사용법

ONNX Runtime Web을 사용하여 모델을 로드하고 추론을 실행하는 기본적인 방법은 다음과 같다:

```ts
import * as ort from "onnxruntime-web";

// 모델 로드
async function loadModel(modelUrl: string) {
  try {
    const session = await ort.InferenceSession.create(modelUrl, {
      executionProviders: ["webgpu", "webgl", "wasm"],
    });
    return session;
  } catch (error) {
    console.error("모델 로드 실패:", error);
    throw error;
  }
}

// 추론 실행
async function runInference(
  session: ort.InferenceSession,
  inputData: Float32Array,
  inputShape: number[]
) {
  try {
    // 입력 텐서 생성
    const inputTensor = new ort.Tensor("float32", inputData, inputShape);

    // 추론 실행
    const feeds = { input: inputTensor }; // 모델의 입력 이름에 맞게 수정 필요
    const results = await session.run(feeds);

    return results;
  } catch (error) {
    console.error("추론 실행 실패:", error);
    throw error;
  }
}
```

### 이미지 전처리 예제

Vision AI 모델의 경우 이미지 전처리가 필요하다:

```ts
// 이미지를 모델 입력 형식으로 전처리
function preprocessImage(
  imageElement: HTMLImageElement,
  targetSize: [number, number] = [224, 224]
): Float32Array {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d")!;

  canvas.width = targetSize[0];
  canvas.height = targetSize[1];

  // 이미지를 캔버스에 그리기 (리사이즈)
  ctx.drawImage(imageElement, 0, 0, targetSize[0], targetSize[1]);

  // 픽셀 데이터 추출
  const imageData = ctx.getImageData(0, 0, targetSize[0], targetSize[1]);
  const pixels = imageData.data;

  // RGB 정규화 및 채널 분리 (CHW 형식)
  const float32Data = new Float32Array(3 * targetSize[0] * targetSize[1]);

  for (let i = 0; i < pixels.length; i += 4) {
    const pixelIndex = i / 4;
    const r = pixels[i] / 255.0;
    const g = pixels[i + 1] / 255.0;
    const b = pixels[i + 2] / 255.0;

    // CHW 형식으로 데이터 배치
    float32Data[pixelIndex] = r; // R 채널
    float32Data[pixelIndex + targetSize[0] * targetSize[1]] = g; // G 채널
    float32Data[pixelIndex + 2 * targetSize[0] * targetSize[1]] = b; // B 채널
  }

  return float32Data;
}
```

### 완전한 사용 예제

```ts
async function classifyImage(imageElement: HTMLImageElement) {
  try {
    // 1. 모델 로드
    const session = await loadModel("/models/resnet50.onnx");

    // 2. 이미지 전처리
    const inputData = preprocessImage(imageElement);
    const inputShape = [1, 3, 224, 224]; // [batch, channels, height, width]

    // 3. 추론 실행
    const results = await runInference(session, inputData, inputShape);

    // 4. 결과 처리
    const outputTensor = results[Object.keys(results)[0]]; // 첫 번째 출력
    const predictions = outputTensor.data as Float32Array;

    // 최대값의 인덱스 찾기 (가장 높은 확률의 클래스)
    const maxIndex = predictions.indexOf(Math.max(...predictions));

    return {
      classIndex: maxIndex,
      confidence: predictions[maxIndex],
      allPredictions: predictions,
    };
  } catch (error) {
    console.error("이미지 분류 실패:", error);
    throw error;
  }
}
```

## 백엔드 선택 가이드

ONNX Runtime Web은 3가지 백엔드를 지원하며, 각각의 특성과 성능이 다르다:

### WebGPU 백엔드

**장점:**

- 최고 성능 (GPU 가속)
- 병렬 처리에 최적화
- 대용량 모델에 적합

**단점:**

- 브라우저 지원 제한적 (Chrome 113+, Edge 113+)
- 개발 단계의 기술

**사용 권장 시나리오:**

- 최신 브라우저 환경
- 복잡한 모델 또는 대용량 데이터 처리
- 실시간 처리가 중요한 경우

```ts
const session = await ort.InferenceSession.create(modelUrl, {
  executionProviders: ["webgpu"],
});
```

### WebGL 백엔드

**장점:**

- 좋은 브라우저 호환성
- GPU 가속 지원
- WebGPU보다 안정적

**단점:**

- WebGPU 대비 성능 제한
- 일부 연산자 지원 제한

**사용 권장 시나리오:**

- 광범위한 브라우저 호환성이 필요한 경우
- 중간 규모의 모델
- 안정성이 중요한 프로덕션 환경

```ts
const session = await ort.InferenceSession.create(modelUrl, {
  executionProviders: ["webgl"],
});
```

### WASM 백엔드

**장점:**

- 모든 브라우저 지원
- 가장 안정적
- CPU 기반으로 예측 가능한 성능

**단점:**

- 가장 느린 성능
- GPU 가속 없음

**사용 권장 시나리오:**

- 최대 호환성이 필요한 경우
- 간단한 모델
- 백업 옵션으로 사용

```ts
const session = await ort.InferenceSession.create(modelUrl, {
  executionProviders: ["wasm"],
});
```

### 성능 비교

| 백엔드 | 브라우저 지원          | 성능       | 안정성     | 권장 용도         |
| ------ | ---------------------- | ---------- | ---------- | ----------------- |
| WebGPU | Chrome 113+, Edge 113+ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐     | 최신 환경, 고성능 |
| WebGL  | 대부분의 모던 브라우저 | ⭐⭐⭐⭐   | ⭐⭐⭐⭐   | 균형 잡힌 선택    |
| WASM   | 모든 브라우저          | ⭐⭐       | ⭐⭐⭐⭐⭐ | 호환성 우선       |

### 적응형 백엔드 선택

실제 환경에서는 브라우저 지원 여부에 따라 백엔드를 자동으로 선택하는 것이 좋다:

```ts
async function createSessionWithFallback(modelUrl: string) {
  const providers = ["webgpu", "webgl", "wasm"];

  for (const provider of providers) {
    try {
      console.log(`${provider} 백엔드로 시도 중...`);
      const session = await ort.InferenceSession.create(modelUrl, {
        executionProviders: [provider],
      });
      console.log(`${provider} 백엔드로 성공적으로 로드됨`);
      return { session, provider };
    } catch (error) {
      console.warn(`${provider} 백엔드 실패:`, error);
      continue;
    }
  }

  throw new Error("모든 백엔드에서 모델 로드 실패");
}
```

## 모델 캐싱 및 버전 관리

웹 환경에서 ONNX 모델을 효율적으로 관리하기 위해서는 캐싱과 버전 관리가 중요하다.

### IndexedDB를 이용한 모델 캐싱

```ts
interface ModelCache {
  url: string;
  version: string;
  data: ArrayBuffer;
  timestamp: number;
}

class ONNXModelManager {
  private dbName = "onnx-models";
  private storeName = "models";
  private db: IDBDatabase | null = null;

  async initDB(): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, 1);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        this.db = request.result;
        resolve();
      };

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        if (!db.objectStoreNames.contains(this.storeName)) {
          const store = db.createObjectStore(this.storeName, {
            keyPath: "url",
          });
          store.createIndex("version", "version", { unique: false });
          store.createIndex("timestamp", "timestamp", { unique: false });
        }
      };
    });
  }

  async getCachedModel(
    url: string,
    expectedVersion?: string
  ): Promise<ArrayBuffer | null> {
    if (!this.db) await this.initDB();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([this.storeName], "readonly");
      const store = transaction.objectStore(this.storeName);
      const request = store.get(url);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        const result = request.result as ModelCache;

        if (!result) {
          resolve(null);
          return;
        }

        // 버전 확인
        if (expectedVersion && result.version !== expectedVersion) {
          console.log(
            `모델 버전 불일치: 캐시(${result.version}) vs 요청(${expectedVersion})`
          );
          resolve(null);
          return;
        }

        // 캐시 만료 확인 (예: 24시간)
        const cacheExpiry = 24 * 60 * 60 * 1000; // 24시간
        if (Date.now() - result.timestamp > cacheExpiry) {
          console.log("캐시 만료됨");
          resolve(null);
          return;
        }

        resolve(result.data);
      };
    });
  }

  async cacheModel(
    url: string,
    data: ArrayBuffer,
    version: string
  ): Promise<void> {
    if (!this.db) await this.initDB();

    const modelCache: ModelCache = {
      url,
      version,
      data,
      timestamp: Date.now(),
    };

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([this.storeName], "readwrite");
      const store = transaction.objectStore(this.storeName);
      const request = store.put(modelCache);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve();
    });
  }

  async loadModelWithCache(
    url: string,
    version?: string
  ): Promise<ArrayBuffer> {
    // 1. 캐시에서 먼저 확인
    const cachedData = await this.getCachedModel(url, version);
    if (cachedData) {
      console.log("캐시된 모델 사용:", url);
      return cachedData;
    }

    // 2. 네트워크에서 다운로드
    console.log("네트워크에서 모델 다운로드:", url);
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`모델 다운로드 실패: ${response.status}`);
    }

    const data = await response.arrayBuffer();

    // 3. 캐시에 저장
    if (version) {
      await this.cacheModel(url, data, version);
    }

    return data;
  }

  async clearCache(): Promise<void> {
    if (!this.db) await this.initDB();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([this.storeName], "readwrite");
      const store = transaction.objectStore(this.storeName);
      const request = store.clear();

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve();
    });
  }
}
```

### 모델 버전 관리

```ts
interface ModelConfig {
  name: string;
  version: string;
  url: string;
  checksum?: string;
  size?: number;
}

class ModelVersionManager {
  private configUrl: string;
  private modelManager: ONNXModelManager;

  constructor(configUrl: string) {
    this.configUrl = configUrl;
    this.modelManager = new ONNXModelManager();
  }

  async getLatestModelConfig(modelName: string): Promise<ModelConfig> {
    const response = await fetch(this.configUrl);
    const configs: ModelConfig[] = await response.json();

    const modelConfig = configs.find((config) => config.name === modelName);
    if (!modelConfig) {
      throw new Error(`모델을 찾을 수 없습니다: ${modelName}`);
    }

    return modelConfig;
  }

  async loadModel(modelName: string): Promise<ort.InferenceSession> {
    // 1. 최신 모델 정보 가져오기
    const config = await this.getLatestModelConfig(modelName);

    // 2. 캐시된 모델 또는 새로 다운로드
    const modelData = await this.modelManager.loadModelWithCache(
      config.url,
      config.version
    );

    // 3. 체크섬 검증 (선택사항)
    if (config.checksum) {
      const calculatedChecksum = await this.calculateChecksum(modelData);
      if (calculatedChecksum !== config.checksum) {
        throw new Error("모델 체크섬 불일치");
      }
    }

    // 4. ONNX 세션 생성
    const session = await ort.InferenceSession.create(modelData, {
      executionProviders: ["webgpu", "webgl", "wasm"],
    });

    return session;
  }

  private async calculateChecksum(data: ArrayBuffer): Promise<string> {
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  }
}
```

### 사용 예제

```ts
// 모델 매니저 초기화
const modelManager = new ModelVersionManager("/api/models/config.json");

// 모델 로드 (캐싱 및 버전 관리 자동 처리)
const session = await modelManager.loadModel("resnet50");

// 추론 실행
const results = await runInference(session, inputData, inputShape);
```

### 캐시 관리 전략

```ts
// 캐시 크기 제한
class CacheManager extends ONNXModelManager {
  private maxCacheSize = 100 * 1024 * 1024; // 100MB

  async cleanupOldModels(): Promise<void> {
    if (!this.db) await this.initDB();

    const transaction = this.db!.transaction([this.storeName], "readwrite");
    const store = transaction.objectStore(this.storeName);
    const index = store.index("timestamp");

    let totalSize = 0;
    const modelsToDelete: string[] = [];

    const request = index.openCursor(null, "prev"); // 최신순으로 정렬

    request.onsuccess = (event) => {
      const cursor = (event.target as IDBRequest).result;
      if (cursor) {
        const model = cursor.value as ModelCache;
        totalSize += model.data.byteLength;

        if (totalSize > this.maxCacheSize) {
          modelsToDelete.push(model.url);
        }

        cursor.continue();
      } else {
        // 오래된 모델들 삭제
        modelsToDelete.forEach((url) => {
          store.delete(url);
        });
      }
    };
  }
}
```

## 실제 Vision AI 모델 적용 예제

### MobileNet을 이용한 이미지 분류

```ts
interface ClassificationResult {
  label: string;
  probability: number;
}

class MobileNetClassifier {
  private session: ort.InferenceSession | null = null;
  private labels: string[] = [];

  async initialize() {
    // ImageNet 클래스 라벨 로드
    this.labels = await this.loadImageNetLabels();

    // MobileNet 모델 로드
    this.session = await ort.InferenceSession.create(
      "/models/mobilenet_v2.onnx",
      {
        executionProviders: ["webgpu", "webgl", "wasm"],
      }
    );
  }

  private async loadImageNetLabels(): Promise<string[]> {
    const response = await fetch("/labels/imagenet_labels.json");
    return await response.json();
  }

  async classifyImage(
    imageElement: HTMLImageElement
  ): Promise<ClassificationResult[]> {
    if (!this.session) {
      throw new Error("모델이 초기화되지 않았습니다");
    }

    // 1. 이미지 전처리 (MobileNet 입력 형식: 224x224, RGB, 정규화)
    const inputTensor = this.preprocessImageForMobileNet(imageElement);

    // 2. 추론 실행
    const feeds = { input: inputTensor };
    const results = await this.session.run(feeds);

    // 3. 결과 후처리
    const output = results.output.data as Float32Array;
    const topResults = this.getTopPredictions(output, 5);

    return topResults;
  }

  private preprocessImageForMobileNet(
    imageElement: HTMLImageElement
  ): ort.Tensor {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d")!;

    canvas.width = 224;
    canvas.height = 224;

    // 이미지를 224x224로 리사이즈
    ctx.drawImage(imageElement, 0, 0, 224, 224);

    const imageData = ctx.getImageData(0, 0, 224, 224);
    const pixels = imageData.data;

    // MobileNet 전처리: [0, 255] -> [-1, 1] 정규화
    const float32Data = new Float32Array(1 * 3 * 224 * 224);

    for (let i = 0; i < pixels.length; i += 4) {
      const pixelIndex = i / 4;

      // RGB 값을 [-1, 1] 범위로 정규화
      const r = (pixels[i] / 255.0 - 0.5) * 2;
      const g = (pixels[i + 1] / 255.0 - 0.5) * 2;
      const b = (pixels[i + 2] / 255.0 - 0.5) * 2;

      // NCHW 형식으로 배치
      float32Data[pixelIndex] = r;
      float32Data[pixelIndex + 224 * 224] = g;
      float32Data[pixelIndex + 2 * 224 * 224] = b;
    }

    return new ort.Tensor("float32", float32Data, [1, 3, 224, 224]);
  }

  private getTopPredictions(
    predictions: Float32Array,
    topK: number
  ): ClassificationResult[] {
    const results: ClassificationResult[] = [];

    // 소프트맥스 적용
    const softmaxResults = this.softmax(predictions);

    // 확률과 인덱스를 함께 저장
    const indexedResults = softmaxResults.map((prob, index) => ({
      probability: prob,
      index,
    }));

    // 확률 순으로 정렬
    indexedResults.sort((a, b) => b.probability - a.probability);

    // 상위 K개 결과 반환
    for (let i = 0; i < Math.min(topK, indexedResults.length); i++) {
      const result = indexedResults[i];
      results.push({
        label: this.labels[result.index] || `Class ${result.index}`,
        probability: result.probability,
      });
    }

    return results;
  }

  private softmax(logits: Float32Array): Float32Array {
    const maxLogit = Math.max(...logits);
    const expLogits = logits.map((x) => Math.exp(x - maxLogit));
    const sumExp = expLogits.reduce((sum, x) => sum + x, 0);

    return new Float32Array(expLogits.map((x) => x / sumExp));
  }
}
```

### YOLO를 이용한 객체 탐지

```ts
interface DetectionResult {
  label: string;
  confidence: number;
  bbox: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
}

class YOLODetector {
  private session: ort.InferenceSession | null = null;
  private labels: string[] = [];
  private inputSize = 640; // YOLOv5/v8 기본 입력 크기

  async initialize() {
    // COCO 클래스 라벨 로드
    this.labels = await this.loadCOCOLabels();

    // YOLO 모델 로드
    this.session = await ort.InferenceSession.create("/models/yolov8n.onnx", {
      executionProviders: ["webgpu", "webgl", "wasm"],
    });
  }

  private async loadCOCOLabels(): Promise<string[]> {
    const response = await fetch("/labels/coco_labels.json");
    return await response.json();
  }

  async detectObjects(
    imageElement: HTMLImageElement
  ): Promise<DetectionResult[]> {
    if (!this.session) {
      throw new Error("모델이 초기화되지 않았습니다");
    }

    // 1. 이미지 전처리
    const { inputTensor, scaleX, scaleY } =
      this.preprocessImageForYOLO(imageElement);

    // 2. 추론 실행
    const feeds = { images: inputTensor };
    const results = await this.session.run(feeds);

    // 3. 결과 후처리
    const output = results.output0.data as Float32Array;
    const detections = this.postprocessYOLOOutput(
      output,
      scaleX,
      scaleY,
      imageElement.width,
      imageElement.height
    );

    return detections;
  }

  private preprocessImageForYOLO(imageElement: HTMLImageElement) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d")!;

    canvas.width = this.inputSize;
    canvas.height = this.inputSize;

    // 원본 이미지 비율을 유지하면서 640x640에 맞춤
    const scaleX = imageElement.width / this.inputSize;
    const scaleY = imageElement.height / this.inputSize;

    // 이미지를 캔버스 중앙에 배치 (letterbox)
    ctx.fillStyle = "#808080"; // 회색 패딩
    ctx.fillRect(0, 0, this.inputSize, this.inputSize);

    const scale = Math.min(
      this.inputSize / imageElement.width,
      this.inputSize / imageElement.height
    );
    const scaledWidth = imageElement.width * scale;
    const scaledHeight = imageElement.height * scale;
    const offsetX = (this.inputSize - scaledWidth) / 2;
    const offsetY = (this.inputSize - scaledHeight) / 2;

    ctx.drawImage(imageElement, offsetX, offsetY, scaledWidth, scaledHeight);

    const imageData = ctx.getImageData(0, 0, this.inputSize, this.inputSize);
    const pixels = imageData.data;

    // YOLO 전처리: [0, 255] -> [0, 1] 정규화
    const float32Data = new Float32Array(
      1 * 3 * this.inputSize * this.inputSize
    );

    for (let i = 0; i < pixels.length; i += 4) {
      const pixelIndex = i / 4;

      const r = pixels[i] / 255.0;
      const g = pixels[i + 1] / 255.0;
      const b = pixels[i + 2] / 255.0;

      // NCHW 형식으로 배치
      float32Data[pixelIndex] = r;
      float32Data[pixelIndex + this.inputSize * this.inputSize] = g;
      float32Data[pixelIndex + 2 * this.inputSize * this.inputSize] = b;
    }

    const inputTensor = new ort.Tensor("float32", float32Data, [
      1,
      3,
      this.inputSize,
      this.inputSize,
    ]);

    return { inputTensor, scaleX, scaleY };
  }

  private postprocessYOLOOutput(
    output: Float32Array,
    scaleX: number,
    scaleY: number,
    originalWidth: number,
    originalHeight: number
  ): DetectionResult[] {
    const detections: DetectionResult[] = [];
    const confidenceThreshold = 0.5;
    const nmsThreshold = 0.4;

    // YOLOv8 출력 형식: [1, 84, 8400] (84 = 4 bbox + 80 classes)
    const numDetections = 8400;
    const numClasses = 80;

    const boxes: number[][] = [];
    const scores: number[] = [];
    const classIds: number[] = [];

    for (let i = 0; i < numDetections; i++) {
      let maxScore = 0;
      let maxClassId = 0;

      // 클래스별 최대 점수 찾기
      for (let j = 0; j < numClasses; j++) {
        const score = output[i + (4 + j) * numDetections];
        if (score > maxScore) {
          maxScore = score;
          maxClassId = j;
        }
      }

      if (maxScore > confidenceThreshold) {
        const cx = output[i]; // center x
        const cy = output[i + numDetections]; // center y
        const w = output[i + 2 * numDetections]; // width
        const h = output[i + 3 * numDetections]; // height

        // 중심점 좌표를 좌상단 좌표로 변환
        const x = (cx - w / 2) * scaleX;
        const y = (cy - h / 2) * scaleY;
        const width = w * scaleX;
        const height = h * scaleY;

        boxes.push([x, y, width, height]);
        scores.push(maxScore);
        classIds.push(maxClassId);
      }
    }

    // NMS (Non-Maximum Suppression) 적용
    const nmsIndices = this.applyNMS(boxes, scores, nmsThreshold);

    for (const index of nmsIndices) {
      const [x, y, width, height] = boxes[index];
      detections.push({
        label: this.labels[classIds[index]] || `Class ${classIds[index]}`,
        confidence: scores[index],
        bbox: {
          x: Math.max(0, Math.min(x, originalWidth)),
          y: Math.max(0, Math.min(y, originalHeight)),
          width: Math.min(width, originalWidth - x),
          height: Math.min(height, originalHeight - y),
        },
      });
    }

    return detections;
  }

  private applyNMS(
    boxes: number[][],
    scores: number[],
    threshold: number
  ): number[] {
    const indices = Array.from({ length: boxes.length }, (_, i) => i);

    // 점수 순으로 정렬
    indices.sort((a, b) => scores[b] - scores[a]);

    const keep: number[] = [];

    while (indices.length > 0) {
      const current = indices.shift()!;
      keep.push(current);

      const remainingIndices: number[] = [];

      for (const index of indices) {
        const iou = this.calculateIoU(boxes[current], boxes[index]);
        if (iou <= threshold) {
          remainingIndices.push(index);
        }
      }

      indices.length = 0;
      indices.push(...remainingIndices);
    }

    return keep;
  }

  private calculateIoU(box1: number[], box2: number[]): number {
    const [x1, y1, w1, h1] = box1;
    const [x2, y2, w2, h2] = box2;

    const x1_max = x1 + w1;
    const y1_max = y1 + h1;
    const x2_max = x2 + w2;
    const y2_max = y2 + h2;

    const intersectionX = Math.max(
      0,
      Math.min(x1_max, x2_max) - Math.max(x1, x2)
    );
    const intersectionY = Math.max(
      0,
      Math.min(y1_max, y2_max) - Math.max(y1, y2)
    );
    const intersectionArea = intersectionX * intersectionY;

    const box1Area = w1 * h1;
    const box2Area = w2 * h2;
    const unionArea = box1Area + box2Area - intersectionArea;

    return intersectionArea / unionArea;
  }
}
```

### 사용 예제

```ts
// 이미지 분류 사용 예제
const classifier = new MobileNetClassifier();
await classifier.initialize();

const imageElement = document.getElementById("input-image") as HTMLImageElement;
const classifications = await classifier.classifyImage(imageElement);

console.log("분류 결과:", classifications);
// 출력: [{ label: 'Egyptian cat', probability: 0.85 }, ...]

// 객체 탐지 사용 예제
const detector = new YOLODetector();
await detector.initialize();

const detections = await detector.detectObjects(imageElement);

console.log("탐지 결과:", detections);
// 출력: [{ label: 'person', confidence: 0.92, bbox: { x: 100, y: 50, width: 200, height: 300 } }, ...]

// 탐지 결과를 캔버스에 시각화
function drawDetections(
  canvas: HTMLCanvasElement,
  detections: DetectionResult[]
) {
  const ctx = canvas.getContext("2d")!;

  detections.forEach((detection) => {
    const { bbox, label, confidence } = detection;

    // 바운딩 박스 그리기
    ctx.strokeStyle = "#ff0000";
    ctx.lineWidth = 2;
    ctx.strokeRect(bbox.x, bbox.y, bbox.width, bbox.height);

    // 라벨 그리기
    ctx.fillStyle = "#ff0000";
    ctx.font = "16px Arial";
    const text = `${label} (${(confidence * 100).toFixed(1)}%)`;
    ctx.fillText(text, bbox.x, bbox.y - 5);
  });
}
```

## 성능 최적화 및 메모리 관리

### 모델 최적화 기법

```ts
class OptimizedONNXRunner {
  private session: ort.InferenceSession | null = null;
  private warmupCompleted = false;

  async initialize(modelUrl: string) {
    // 1. 최적화된 세션 옵션 설정
    const sessionOptions: ort.InferenceSession.SessionOptions = {
      executionProviders: ["webgpu", "webgl", "wasm"],
      graphOptimizationLevel: "all", // 그래프 최적화 활성화
      enableCpuMemArena: true, // CPU 메모리 아레나 사용
      enableMemPattern: true, // 메모리 패턴 최적화
      executionMode: "sequential", // 순차 실행 모드
      logId: "onnx-session",
      logSeverityLevel: 2, // 경고 수준 로그만 출력
    };

    this.session = await ort.InferenceSession.create(modelUrl, sessionOptions);

    // 2. 웜업 실행으로 성능 향상
    await this.warmup();
  }

  // 웜업을 통한 초기화 최적화
  private async warmup() {
    if (!this.session || this.warmupCompleted) return;

    const inputNames = this.session.inputNames;
    const inputInfo = this.session.inputMetadata[inputNames[0]];

    // 더미 입력으로 여러 번 실행하여 JIT 컴파일 최적화
    const dummyInput = new ort.Tensor(
      "float32",
      new Float32Array(this.calculateTensorSize(inputInfo.dims as number[])),
      inputInfo.dims as number[]
    );

    const feeds = { [inputNames[0]]: dummyInput };

    // 여러 번 실행하여 최적화
    for (let i = 0; i < 3; i++) {
      await this.session.run(feeds);
    }

    this.warmupCompleted = true;
    console.log("웜업 완료");
  }

  private calculateTensorSize(dims: number[]): number {
    return dims.reduce((acc, dim) => acc * dim, 1);
  }
}
```

### 메모리 관리 전략

```ts
class MemoryManager {
  private static instance: MemoryManager;
  private sessions: Map<string, ort.InferenceSession> = new Map();
  private tensors: Set<ort.Tensor> = new Set();
  private maxSessions = 3; // 최대 세션 수 제한

  static getInstance(): MemoryManager {
    if (!MemoryManager.instance) {
      MemoryManager.instance = new MemoryManager();
    }
    return MemoryManager.instance;
  }

  async getSession(
    modelName: string,
    modelUrl: string
  ): Promise<ort.InferenceSession> {
    // 기존 세션이 있으면 재사용
    if (this.sessions.has(modelName)) {
      return this.sessions.get(modelName)!;
    }

    // 세션 수 제한 확인
    if (this.sessions.size >= this.maxSessions) {
      await this.evictOldestSession();
    }

    // 새 세션 생성
    const session = await ort.InferenceSession.create(modelUrl, {
      executionProviders: ["webgpu", "webgl", "wasm"],
    });

    this.sessions.set(modelName, session);
    return session;
  }

  private async evictOldestSession() {
    const firstKey = this.sessions.keys().next().value;
    if (firstKey) {
      const session = this.sessions.get(firstKey)!;
      await this.releaseSession(firstKey);
    }
  }

  async releaseSession(modelName: string) {
    const session = this.sessions.get(modelName);
    if (session) {
      try {
        session.release();
        this.sessions.delete(modelName);
        console.log(`세션 해제됨: ${modelName}`);
      } catch (error) {
        console.error(`세션 해제 실패: ${modelName}`, error);
      }
    }
  }

  // 텐서 생성 시 추적
  createTensor(type: string, data: Float32Array, dims: number[]): ort.Tensor {
    const tensor = new ort.Tensor(type as any, data, dims);
    this.tensors.add(tensor);
    return tensor;
  }

  // 사용하지 않는 텐서 해제
  releaseTensor(tensor: ort.Tensor) {
    if (this.tensors.has(tensor)) {
      try {
        tensor.dispose();
        this.tensors.delete(tensor);
      } catch (error) {
        console.error("텐서 해제 실패:", error);
      }
    }
  }

  // 모든 리소스 정리
  async cleanup() {
    // 모든 세션 해제
    const sessionNames = Array.from(this.sessions.keys());
    for (const name of sessionNames) {
      await this.releaseSession(name);
    }

    // 모든 텐서 해제
    this.tensors.forEach((tensor) => {
      try {
        tensor.dispose();
      } catch (error) {
        console.error("텐서 해제 실패:", error);
      }
    });
    this.tensors.clear();
  }

  // 메모리 사용량 모니터링
  getMemoryUsage() {
    return {
      activeSessions: this.sessions.size,
      activeTensors: this.tensors.size,
      jsHeapUsed: (performance as any).memory?.usedJSHeapSize || 0,
      jsHeapTotal: (performance as any).memory?.totalJSHeapSize || 0,
    };
  }
}
```

### 배치 처리 최적화

```ts
class BatchProcessor {
  private session: ort.InferenceSession;
  private batchSize: number;

  constructor(session: ort.InferenceSession, batchSize: number = 4) {
    this.session = session;
    this.batchSize = batchSize;
  }

  async processBatch(images: HTMLImageElement[]): Promise<any[]> {
    const results: any[] = [];

    // 이미지를 배치 크기만큼 나누어 처리
    for (let i = 0; i < images.length; i += this.batchSize) {
      const batch = images.slice(i, i + this.batchSize);
      const batchResults = await this.processSingleBatch(batch);
      results.push(...batchResults);
    }

    return results;
  }

  private async processSingleBatch(images: HTMLImageElement[]): Promise<any[]> {
    // 배치 입력 텐서 생성
    const batchTensor = this.createBatchTensor(images);

    const feeds = { input: batchTensor };
    const outputs = await this.session.run(feeds);

    // 배치 출력을 개별 결과로 분리
    return this.splitBatchOutput(outputs, images.length);
  }

  private createBatchTensor(images: HTMLImageElement[]): ort.Tensor {
    const batchSize = images.length;
    const [channels, height, width] = [3, 224, 224];

    const batchData = new Float32Array(batchSize * channels * height * width);

    images.forEach((image, batchIndex) => {
      const imageData = this.preprocessImage(image);
      const offset = batchIndex * channels * height * width;
      batchData.set(imageData, offset);
    });

    return new ort.Tensor("float32", batchData, [
      batchSize,
      channels,
      height,
      width,
    ]);
  }

  private preprocessImage(image: HTMLImageElement): Float32Array {
    // 이미지 전처리 로직 (이전 예제와 동일)
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d")!;

    canvas.width = 224;
    canvas.height = 224;
    ctx.drawImage(image, 0, 0, 224, 224);

    const imageData = ctx.getImageData(0, 0, 224, 224);
    const pixels = imageData.data;
    const float32Data = new Float32Array(3 * 224 * 224);

    for (let i = 0; i < pixels.length; i += 4) {
      const pixelIndex = i / 4;
      const r = (pixels[i] / 255.0 - 0.5) * 2;
      const g = (pixels[i + 1] / 255.0 - 0.5) * 2;
      const b = (pixels[i + 2] / 255.0 - 0.5) * 2;

      float32Data[pixelIndex] = r;
      float32Data[pixelIndex + 224 * 224] = g;
      float32Data[pixelIndex + 2 * 224 * 224] = b;
    }

    return float32Data;
  }

  private splitBatchOutput(outputs: any, batchSize: number): any[] {
    const results: any[] = [];
    const outputData = outputs[Object.keys(outputs)[0]].data;
    const outputSize = outputData.length / batchSize;

    for (let i = 0; i < batchSize; i++) {
      const start = i * outputSize;
      const end = start + outputSize;
      results.push(outputData.slice(start, end));
    }

    return results;
  }
}
```

### 성능 모니터링

```ts
class PerformanceMonitor {
  private metrics: Map<string, number[]> = new Map();

  startTimer(label: string): string {
    const timerId = `${label}_${Date.now()}`;
    this.metrics.set(timerId, [performance.now()]);
    return timerId;
  }

  endTimer(timerId: string): number {
    const times = this.metrics.get(timerId);
    if (times) {
      const duration = performance.now() - times[0];
      times.push(duration);
      return duration;
    }
    return 0;
  }

  async measureInference(
    session: ort.InferenceSession,
    inputs: { [key: string]: ort.Tensor }
  ): Promise<{ results: any; metrics: any }> {
    const timerId = this.startTimer("inference");

    // GPU 메모리 사용량 측정 (WebGPU인 경우)
    const beforeMemory = this.getMemoryUsage();

    const results = await session.run(inputs);

    const afterMemory = this.getMemoryUsage();
    const inferenceTime = this.endTimer(timerId);

    return {
      results,
      metrics: {
        inferenceTime,
        memoryDelta: afterMemory.jsHeapUsed - beforeMemory.jsHeapUsed,
        memoryUsage: afterMemory,
      },
    };
  }

  private getMemoryUsage() {
    return {
      jsHeapUsed: (performance as any).memory?.usedJSHeapSize || 0,
      jsHeapTotal: (performance as any).memory?.totalJSHeapSize || 0,
      jsHeapLimit: (performance as any).memory?.jsHeapSizeLimit || 0,
    };
  }

  getAverageTime(label: string): number {
    const allTimes: number[] = [];

    for (const [key, times] of this.metrics.entries()) {
      if (key.startsWith(label) && times.length > 1) {
        allTimes.push(times[1]); // 두 번째 요소는 실행 시간
      }
    }

    return allTimes.length > 0
      ? allTimes.reduce((sum, time) => sum + time, 0) / allTimes.length
      : 0;
  }

  logPerformanceReport() {
    console.log("=== 성능 리포트 ===");
    console.log(
      `평균 추론 시간: ${this.getAverageTime("inference").toFixed(2)}ms`
    );
    console.log("메모리 사용량:", this.getMemoryUsage());

    // 브라우저별 성능 정보
    if ("gpu" in navigator) {
      console.log("WebGPU 지원: 가능");
    } else {
      console.log("WebGPU 지원: 불가능");
    }
  }
}
```

### 최적화 적용 예제

```ts
async function optimizedInference() {
  const memoryManager = MemoryManager.getInstance();
  const performanceMonitor = new PerformanceMonitor();

  try {
    // 1. 최적화된 세션 로드
    const session = await memoryManager.getSession(
      "mobilenet",
      "/models/mobilenet_v2.onnx"
    );

    // 2. 배치 프로세서 생성
    const batchProcessor = new BatchProcessor(session, 4);

    // 3. 이미지 준비
    const images = [
      document.getElementById("img1") as HTMLImageElement,
      document.getElementById("img2") as HTMLImageElement,
      document.getElementById("img3") as HTMLImageElement,
      document.getElementById("img4") as HTMLImageElement,
    ];

    // 4. 배치 처리 실행
    const timerId = performanceMonitor.startTimer("batch_inference");
    const results = await batchProcessor.processBatch(images);
    const processingTime = performanceMonitor.endTimer(timerId);

    console.log(`배치 처리 완료: ${processingTime.toFixed(2)}ms`);
    console.log("결과:", results);

    // 5. 성능 리포트 출력
    performanceMonitor.logPerformanceReport();
  } catch (error) {
    console.error("최적화된 추론 실행 실패:", error);
  } finally {
    // 6. 리소스 정리 (필요시)
    // await memoryManager.cleanup();
  }
}

// 페이지 언로드 시 리소스 정리
window.addEventListener("beforeunload", async () => {
  const memoryManager = MemoryManager.getInstance();
  await memoryManager.cleanup();
});
```

## 에러 처리 및 디버깅

### 일반적인 에러 유형과 해결 방법

```ts
class ONNXErrorHandler {
  private static readonly ERROR_MESSAGES = {
    MODEL_LOAD_FAILED: "모델 로드 실패",
    INVALID_INPUT: "잘못된 입력 데이터",
    INFERENCE_FAILED: "추론 실행 실패",
    MEMORY_ERROR: "메모리 부족",
    BACKEND_ERROR: "백엔드 초기화 실패",
  };

  static handleError(error: any, context: string): never {
    console.error(`[${context}] 에러 발생:`, error);

    if (error.message?.includes("no available backend found")) {
      throw new Error(
        `${this.ERROR_MESSAGES.BACKEND_ERROR}: 사용 가능한 백엔드가 없습니다. Vite 설정을 확인하세요.`
      );
    }

    if (error.message?.includes("Failed to fetch")) {
      throw new Error(
        `${this.ERROR_MESSAGES.MODEL_LOAD_FAILED}: 모델 파일을 찾을 수 없습니다. 경로를 확인하세요.`
      );
    }

    if (error.message?.includes("Input dimension mismatch")) {
      throw new Error(
        `${this.ERROR_MESSAGES.INVALID_INPUT}: 입력 텐서 크기가 모델 요구사항과 일치하지 않습니다.`
      );
    }

    if (error.message?.includes("out of memory")) {
      throw new Error(
        `${this.ERROR_MESSAGES.MEMORY_ERROR}: GPU 메모리가 부족합니다. 배치 크기를 줄이거나 WASM 백엔드를 사용하세요.`
      );
    }

    throw new Error(`알 수 없는 에러: ${error.message}`);
  }
}
```

### 강력한 에러 처리를 가진 모델 래퍼

```ts
class RobustONNXModel {
  private session: ort.InferenceSession | null = null;
  private retryCount = 0;
  private maxRetries = 3;
  private backoffDelay = 1000; // 1초

  async initialize(modelUrl: string): Promise<void> {
    for (let attempt = 0; attempt <= this.maxRetries; attempt++) {
      try {
        this.session = await this.createSessionWithFallback(modelUrl);
        console.log("모델 초기화 성공");
        return;
      } catch (error) {
        console.warn(
          `초기화 시도 ${attempt + 1}/${this.maxRetries + 1} 실패:`,
          error
        );

        if (attempt < this.maxRetries) {
          await this.delay(this.backoffDelay * (attempt + 1));
        } else {
          ONNXErrorHandler.handleError(error, "MODEL_INITIALIZATION");
        }
      }
    }
  }

  private async createSessionWithFallback(
    modelUrl: string
  ): Promise<ort.InferenceSession> {
    const providers = ["webgpu", "webgl", "wasm"];
    let lastError: any;

    for (const provider of providers) {
      try {
        console.log(`${provider} 백엔드로 시도 중...`);
        const session = await ort.InferenceSession.create(modelUrl, {
          executionProviders: [provider],
        });
        console.log(`${provider} 백엔드로 성공`);
        return session;
      } catch (error) {
        console.warn(`${provider} 백엔드 실패:`, error);
        lastError = error;
        continue;
      }
    }

    throw lastError;
  }

  async predict(inputData: ort.Tensor): Promise<any> {
    if (!this.session) {
      throw new Error("모델이 초기화되지 않았습니다");
    }

    try {
      // 입력 유효성 검사
      this.validateInput(inputData);

      // 추론 실행
      const feeds = { [this.session.inputNames[0]]: inputData };
      const results = await this.session.run(feeds);

      return results;
    } catch (error) {
      ONNXErrorHandler.handleError(error, "INFERENCE");
    }
  }

  private validateInput(inputData: ort.Tensor): void {
    if (!this.session) return;

    const expectedInput =
      this.session.inputMetadata[this.session.inputNames[0]];
    const expectedShape = expectedInput.dims as number[];

    // 동적 차원(-1) 무시하고 비교
    const actualShape = inputData.dims;

    for (let i = 0; i < expectedShape.length; i++) {
      if (expectedShape[i] !== -1 && expectedShape[i] !== actualShape[i]) {
        throw new Error(
          `입력 형태 불일치: 예상 ${expectedShape}, 실제 ${actualShape}`
        );
      }
    }
  }

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async dispose(): Promise<void> {
    if (this.session) {
      try {
        this.session.release();
        this.session = null;
        console.log("모델 리소스 해제 완료");
      } catch (error) {
        console.error("모델 해제 중 에러:", error);
      }
    }
  }
}
```

### 디버깅 도구

```ts
class ONNXDebugger {
  private static logs: string[] = [];

  static enableDebugMode(): void {
    // ONNX Runtime 로그 레벨 설정
    ort.env.logLevel = "verbose";
    console.log("ONNX 디버그 모드 활성화");
  }

  static logModelInfo(session: ort.InferenceSession): void {
    console.group("=== 모델 정보 ===");

    console.log("입력 정보:");
    session.inputNames.forEach((name) => {
      const metadata = session.inputMetadata[name];
      console.log(`  ${name}:`, {
        type: metadata.type,
        dims: metadata.dims,
      });
    });

    console.log("출력 정보:");
    session.outputNames.forEach((name) => {
      const metadata = session.outputMetadata[name];
      console.log(`  ${name}:`, {
        type: metadata.type,
        dims: metadata.dims,
      });
    });

    console.groupEnd();
  }

  static logTensorInfo(tensor: ort.Tensor, name: string): void {
    const stats = this.calculateTensorStats(tensor.data as Float32Array);

    console.log(`텐서 정보 - ${name}:`, {
      type: tensor.type,
      dims: tensor.dims,
      size: tensor.size,
      stats,
    });
  }

  private static calculateTensorStats(data: Float32Array) {
    const values = Array.from(data);
    const min = Math.min(...values);
    const max = Math.max(...values);
    const mean = values.reduce((sum, val) => sum + val, 0) / values.length;

    // 표준편차 계산
    const variance =
      values.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) /
      values.length;
    const std = Math.sqrt(variance);

    return { min, max, mean: mean.toFixed(6), std: std.toFixed(6) };
  }

  static async profileInference(
    session: ort.InferenceSession,
    inputs: { [key: string]: ort.Tensor },
    runs: number = 10
  ): Promise<void> {
    console.log(`=== 성능 프로파일링 (${runs}회 실행) ===`);

    const times: number[] = [];

    // 웜업 실행
    await session.run(inputs);

    for (let i = 0; i < runs; i++) {
      const startTime = performance.now();
      await session.run(inputs);
      const endTime = performance.now();

      times.push(endTime - startTime);
    }

    const avgTime = times.reduce((sum, time) => sum + time, 0) / times.length;
    const minTime = Math.min(...times);
    const maxTime = Math.max(...times);

    console.log("프로파일링 결과:", {
      평균시간: `${avgTime.toFixed(2)}ms`,
      최소시간: `${minTime.toFixed(2)}ms`,
      최대시간: `${maxTime.toFixed(2)}ms`,
      전체시간: times,
    });
  }

  static checkBrowserSupport(): void {
    console.group("=== 브라우저 지원 현황 ===");

    // WebGPU 지원 확인
    const webgpuSupported = "gpu" in navigator;
    console.log("WebGPU 지원:", webgpuSupported ? "✅" : "❌");

    // WebGL 지원 확인
    const canvas = document.createElement("canvas");
    const webglContext =
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    console.log("WebGL 지원:", webglContext ? "✅" : "❌");

    // WASM 지원 확인
    const wasmSupported = typeof WebAssembly !== "undefined";
    console.log("WebAssembly 지원:", wasmSupported ? "✅" : "❌");

    // SharedArrayBuffer 지원 확인 (멀티스레딩용)
    const sharedArrayBufferSupported = typeof SharedArrayBuffer !== "undefined";
    console.log(
      "SharedArrayBuffer 지원:",
      sharedArrayBufferSupported ? "✅" : "❌"
    );

    console.groupEnd();
  }

  static logError(error: any, context: string): void {
    const errorLog = `[${new Date().toISOString()}] ${context}: ${
      error.message
    }`;
    this.logs.push(errorLog);

    console.error(`🚨 ${context}:`, {
      message: error.message,
      stack: error.stack,
      name: error.name,
    });
  }

  static exportLogs(): string {
    return this.logs.join("\n");
  }
}
```

### 통합 디버깅 예제

```ts
async function debugONNXImplementation() {
  // 1. 디버그 모드 활성화
  ONNXDebugger.enableDebugMode();

  // 2. 브라우저 지원 확인
  ONNXDebugger.checkBrowserSupport();

  try {
    // 3. 강력한 모델 초기화
    const model = new RobustONNXModel();
    await model.initialize("/models/mobilenet_v2.onnx");

    // 4. 모델 정보 로그
    if (model["session"]) {
      ONNXDebugger.logModelInfo(model["session"]);
    }

    // 5. 테스트 입력 생성
    const testInput = new ort.Tensor(
      "float32",
      new Float32Array(1 * 3 * 224 * 224).fill(0.5),
      [1, 3, 224, 224]
    );

    // 6. 입력 텐서 정보 로그
    ONNXDebugger.logTensorInfo(testInput, "테스트 입력");

    // 7. 추론 실행 및 프로파일링
    const results = await model.predict(testInput);

    // 8. 출력 결과 로그
    Object.keys(results).forEach((key) => {
      ONNXDebugger.logTensorInfo(results[key], `출력: ${key}`);
    });

    // 9. 성능 프로파일링
    if (model["session"]) {
      await ONNXDebugger.profileInference(
        model["session"],
        { input: testInput },
        10
      );
    }

    console.log("✅ 디버깅 완료");
  } catch (error) {
    ONNXDebugger.logError(error, "DEBUG_IMPLEMENTATION");

    // 디버그 로그 출력
    console.log("=== 에러 로그 ===");
    console.log(ONNXDebugger.exportLogs());
  }
}

// 전역 에러 핸들러 설치
window.addEventListener("error", (event) => {
  ONNXDebugger.logError(event.error, "GLOBAL_ERROR");
});

window.addEventListener("unhandledrejection", (event) => {
  ONNXDebugger.logError(event.reason, "UNHANDLED_PROMISE_REJECTION");
});
```

### 실용적인 트러블슈팅 체크리스트

```ts
class TroubleshootingGuide {
  static async diagnose(): Promise<void> {
    console.log("🔍 ONNX Runtime Web 진단 시작...\n");

    // 1. 기본 환경 확인
    this.checkEnvironment();

    // 2. 네트워크 연결 확인
    await this.checkNetworkAccess();

    // 3. 모델 파일 확인
    await this.checkModelAccess();

    // 4. Vite 설정 확인
    this.checkViteConfig();

    console.log("✅ 진단 완료");
  }

  private static checkEnvironment(): void {
    console.log("📋 환경 확인:");
    console.log("- User Agent:", navigator.userAgent);
    console.log("- HTTPS:", location.protocol === "https:" ? "✅" : "❌");
    console.log(
      "- localhost:",
      location.hostname === "localhost" ? "✅" : "❌"
    );
  }

  private static async checkNetworkAccess(): Promise<void> {
    console.log("\n🌐 네트워크 접근 확인:");

    try {
      const response = await fetch(location.origin);
      console.log("- 서버 접근:", response.ok ? "✅" : "❌");
    } catch (error) {
      console.log("- 서버 접근: ❌", error);
    }
  }

  private static async checkModelAccess(): Promise<void> {
    console.log("\n📦 모델 파일 접근 확인:");

    const testPaths = ["/models/", "/public/models/", "/assets/models/"];

    for (const path of testPaths) {
      try {
        const response = await fetch(`${location.origin}${path}`);
        console.log(`- ${path}:`, response.ok ? "✅" : "❌");
      } catch (error) {
        console.log(`- ${path}: ❌`);
      }
    }
  }

  private static checkViteConfig(): void {
    console.log("\n⚙️ Vite 설정 확인 가이드:");
    console.log("다음 설정이 vite.config.ts에 포함되어야 합니다:");
    console.log(`
export default defineConfig({
  assetsInclude: ["**/*.onnx"],
  optimizeDeps: {
    exclude: ["onnxruntime-web"],
  },
});
    `);
  }
}

// 페이지 로드 시 자동 진단 (개발 모드에서만)
if (process.env.NODE_ENV === "development") {
  window.addEventListener("load", () => {
    TroubleshootingGuide.diagnose();
  });
}
```

## 마무리

이 문서에서는 ONNX Runtime Web을 사용하여 웹 환경에서 AI 모델을 실행하는 방법을 자세히 다뤘습니다. Vite 환경에서의 설정부터 실제 Vision AI 모델 적용, 성능 최적화, 에러 처리까지 실무에서 필요한 모든 내용을 포함했습니다.

### 주요 포인트 요약

1. **환경 설정**: Vite에서 `assetsInclude`와 `optimizeDeps` 설정 필수
2. **백엔드 선택**: WebGPU > WebGL > WASM 순서로 폴백 전략 구현
3. **모델 관리**: IndexedDB를 활용한 캐싱과 버전 관리로 사용자 경험 향상
4. **성능 최적화**: 웜업, 배치 처리, 메모리 관리로 최적 성능 달성
5. **에러 처리**: 강력한 에러 핸들링과 디버깅 도구로 안정성 확보

웹에서의 AI 모델 실행은 이제 더 이상 실험적인 기술이 아닙니다. 적절한 최적화와 에러 처리를 통해 프로덕션 환경에서도 충분히 활용할 수 있는 성숙한 기술이 되었습니다.
