import React, {useState} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import {recentWork} from '@site/src/data/recentWork';
import styles from './index.module.css';

const [feature, ...moreWork] = recentWork;
const archive = [
  {
    title: 'ONNX Runtime으로 브라우저에서 AI 모델 실행하기',
    date: '2025.07.28',
    topic: 'Web AI',
    to: '/blog/onnx-on-web',
  },
  {
    title: 'Service Worker로 파일 업로드 분리하기',
    date: '2025.06.16',
    topic: 'Web API',
    to: '/blog/service-worker',
  },
  {
    title: 'Flutter에서 Shorebird로 업데이트 배포하기',
    date: '2025.01.10',
    topic: 'Flutter',
    to: '/blog/flutter-ci-cd-with-shorebird',
  },
];

function FrameComparison() {
  const [position, setPosition] = useState(56);
  return (
    <figure className={styles.viewer}>
      <div
        className={styles.frames}
        style={{'--split': position + '%'} as React.CSSProperties}
      >
        <img
          src="/img/work/saegim-svg.webp"
          alt="SVG로 재구성한 모자 쓴 캐릭터와 떠 있는 청록색 친구"
          width="384"
          height="216"
        />
        <img
          className={styles.original}
          src={feature.preview}
          alt="같은 장면의 원본 영상 프레임"
          width="640"
          height="360"
        />
        <span className={styles.sourceLabel}>원본</span>
        <span className={styles.svgLabel}>SVG</span>
        <span aria-hidden="true" className={styles.divider}>
          <b>‹ ›</b>
        </span>
        <input
          className={styles.slider}
          type="range"
          min="0"
          max="100"
          value={position}
          aria-label="원본 영상과 SVG 비교"
          aria-valuetext={`원본 ${position}% 표시`}
          onChange={(event) => setPosition(Number(event.target.value))}
        />
      </div>
      <figcaption>
        <span>Dream Stage</span>
        <span>
          좌우로 밀어 비교하기 <b aria-hidden="true">↔</b>
        </span>
      </figcaption>
    </figure>
  );
}

export default function Home() {
  return (
    <Layout
      title="개발 블로그"
      description="프론트엔드 개발자 Mooyeon Choi가 만든 웹과 앱, 모션 그래픽 실험과 기술 기록."
    >
      <main className={styles.home}>
        <header className={styles.masthead}>
          <h1>
            Mooyeon’s{' '}
            <em>
              Log<span>.</span>
            </em>
          </h1>
          <div className={styles.byline}>
            <strong>Mooyeon Choi</strong>
            <span>Frontend Developer</span>
          </div>
        </header>
        <section className={styles.lead} aria-labelledby="lead-title">
          <div>
            <p className={styles.meta}>
              <span className={styles.featureLabel}>최근 프로젝트</span>
              <span>{feature.period}</span>
            </p>
            <h2 id="lead-title">{feature.headline}</h2>
            <p className={styles.summary}>{feature.description}</p>
            <Link className={styles.read} to={feature.website}>
              개발 기록 읽기 <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <FrameComparison />
        </section>
        <div className={styles.lower}>
          <section aria-labelledby="projects-title">
            <div className={styles.sectionHead}>
              <h2 id="projects-title">프로젝트 노트</h2>
              <Link to="/showcase">
                전체 프로젝트 <span aria-hidden="true">↗</span>
              </Link>
            </div>
            <div className={styles.workGrid}>
              {moreWork.map((work) => (
                <Link
                  className={styles.work}
                  to={work.website}
                  key={work.website}
                >
                  <img
                    loading="lazy"
                    src={work.preview}
                    width="480"
                    height="270"
                    alt=""
                  />
                  <div className={styles.noteCopy}>
                    <div className={styles.cardMeta}>
                      {work.category}
                      <span>{work.period}</span>
                    </div>
                    <h3>{work.headline}</h3>
                    <p>{work.description}</p>
                    <span className={styles.noteLink}>개발 기록 읽기 ↗</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
          <section aria-labelledby="archive-title">
            <div className={styles.sectionHead}>
              <h2 id="archive-title">다시 읽는 글</h2>
              <Link to="/blog">
                블로그 <span aria-hidden="true">↗</span>
              </Link>
            </div>
            <ul className={styles.archive}>
              {archive.map((post) => (
                <li key={post.to}>
                  <Link to={post.to}>
                    <div className={styles.cardMeta}>
                      {post.topic}
                      <span>{post.date}</span>
                    </div>
                    <h3>
                      {post.title} <span aria-hidden="true">↗</span>
                    </h3>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </Layout>
  );
}
