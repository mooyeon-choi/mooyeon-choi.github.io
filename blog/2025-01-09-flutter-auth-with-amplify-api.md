---
slug: flutter-auth-with-amplify-api
title: AWS Amplify-Cognito를 통한 Flutter 애플리케이션 인증 로직
authors: mooyeon
tags: [모노레포, sonar, google]
date: 2025-01-09T09:53
---

# AWS Amplify-Cognito를 통한 Flutter 애플리케이션 인증 로직

## 소개

현재 진행하고 있는 B2B 서비스들에서 여러 사용자가 동시에 같은 아이디로 접속하거나 구독 시스템을 통해 기존에 이용중이던 특정 계정들을 강제로 로그아웃 시켜줘야할 상황들이 필요했다. 따라서 JWT 토큰만으로는 처리하기 어려워 세션을 통한 사용자 관리 도입이 필요하였고, 이 과정에서 좀 더 쉽게 관리 가능하고 빠르게 적용할 수 있는 방법을 찾다가 백엔드 동료분이 AWS Cognito를 통한 사용자 관리 방법을 공유해주었다. 처음 시도했던 24년 중순~말까지만 하더라도 Cognito와 앱을 직접 연결하기 위해서는 Swift, Kotlin 플러그인 작성이 필수적(원하는 기능을 모두 사용하기 위해서)이었는데, 이후 수정된<sup>[[1]](#footnote_1)</sup> [Amplify Docs Gen2](https://docs.amplify.aws/flutter/) 문서를 보니 Amplify 백엔드 구성 없이도 Cognito 설정이 가능하도록 되어있어 기존의 방식(Swift, Kotlin 플러그인 작성)을 폐기하고 이 방법으로 도입하기로 하였다.

아래 내용은 기존에 사용하려 했던 Swift, Kotlin 플러그인 생성 방식과 Amplify Backend를 구성해서 인증 로직을 처리해주는 방식, 그리고 최종적으로 사용하는 별도의 백엔드 구성 없이 Cognito에 직접 연결하여 사용하는 방식을 정리한 내용이다.

:::info 목차

1. [Cognito란?](#cognito란)
2. [Amplify auth cognito 적용하기](#amplify-auth-cognito-적용하기)

:::

<!--truncate-->

## Cognito란?

:::note 주석

<a name="footnote_1">[1]</a>: 해당 문서를 찾지 못해서 못봤던 것일 수도 있음, 관련된 내용이 이전에는 검색해봐도 안나와서 24년 10월말쯤 추가된게 아닐까 생각

:::

## Amplify auth cognito 적용하기

### dependency 추가

```yaml
dependencies:
  amplify_flutter: ^2.0.0
  amplify_auth_cognito: ^2.0.0
  amplify_authenticator: ^2.0.0
```

- `amplify_flutter`: 애플리케이션을 Amplify에 연결하기 위한 패키지
- `amplify_auth_cognito`: Amplify Cognito에 연결하기 위한 패키지
- `amplify_authenticator`: Amplify UI 요소들을 사용하기 위한 패키지

위 패키지들을 종속성에 추가해준 후 아래 명령어를 통해 설치해준다.

```bash
flutter pub get
```

이 후 애플리케이션 UI에 적용하기 위해 `main.dart`에 아래와 같이 추가해준다.

```dart
import 'package:amplify_auth_cognito/amplify_auth_cognito.dart';
import 'package:amplify_authenticator/amplify_authenticator.dart';
import 'package:amplify_flutter/amplify_flutter.dart';
import 'package:flutter/material.dart';

import 'amplify_outputs.dart';

Future<void> main() async {
  try {
    WidgetsFlutterBinding.ensureInitialized();
    await _configureAmplify();
    runApp(const MyApp());
  } on AmplifyException catch (e) {
    runApp(Text("Error configuring Amplify: ${e.message}"));
  }
}

Future<void> _configureAmplify() async {
  try {
    await Amplify.addPlugin(AmplifyAuthCognito());
    await Amplify.configure(amplifyConfig);
    safePrint('Successfully configured');
  } on Exception catch (e) {
    safePrint('Error configuring Amplify: $e');
  }
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});
  @override
  Widget build(BuildContext context) {
    return Authenticator(
      child: MaterialApp(
        builder: Authenticator.builder(),
        home: const Scaffold(
          body: Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                SignOutButton(),
                Text('TODO Application'),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
```

```dart
class MyApp extends StatelessWidget {
  ...

  @override
  Widget build(BuildContext context) {
    return Authenticator(
      ...
...
```

위 `Authenticator` 컴포넌트는 Auth 백엔드 설정을 자동으로 감지하고 인증로직을 확인하여 올바른 화면을 표시해준다.

일반적으로 인증로직을 설정한다면 Amplify에 backend 코드를 배포하여 인증로직에 대한 설정을 추가해주어야 한다. 하지만, Cognito를 이미 사용중이었다면 `AmplifyAuthCognito` 플러그인을 통해 별도의 백엔드 코드 구현 없이도 사용할 수 있다.

### Amplify 백엔드 없이 인증 리소스 사용

모바일 클라이언트 라이브러리를 직접 구성하는 것은 지원하지 않지만, `amplify_output.json`을 아래와 같이 직접 스키마를 수정하여 사용할 수 있다.

```dart
const amplifyConfig = '''{
  "version": "1",
  "auth": {
    "aws_region": "<your-cognito-aws-region>",
    "user_pool_id": "<your-cognito-user-pool-id>",
    "user_pool_client_id": "<your-cognito-user-pool-client-id>",
    "identity_pool_id": "<your-cognito-identity-pool-id>",
    "username_attributes": ["email"],
    "standard_required_attributes": ["email"],
    "user_verification_types": ["email"],
    "unauthenticated_identities_enabled": true,
    "password_policy": {
      "min_length": 8,
      "require_lowercase": true,
      "require_uppercase": true,
      "require_numbers": true,
      "require_symbols": true
    }
  }
}'''
```

이 때 스키마 설정 정보는 아래와 같다.

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://amplify.aws/2024-02/outputs-schema.json",
  "title": "AWS Amplify Backend Outputs",
  "description": "Config format for Amplify Gen 2 client libraries to communicate with backend services.",
  "type": "object",
  "additionalProperties": false,
  "properties": {
    "$schema": {
      "description": "JSON schema",
      "type": "string"
    },
    "version": {
      "description": "Version of this schema",
      "const": "1"
    },
    "analytics": {
      "description": "Outputs manually specified by developers for use with frontend library",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "amazon_pinpoint": {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "aws_region": {
              "description": "AWS Region of Amazon Pinpoint resources",
              "$ref": "#/$defs/aws_region"
            },
            "app_id": {
              "type": "string"
            }
          },
          "required": ["aws_region", "app_id"]
        }
      }
    },
    "auth": {
      "description": "Outputs generated from defineAuth",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "aws_region": {
          "description": "AWS Region of Amazon Cognito resources",
          "$ref": "#/$defs/aws_region"
        },
        "user_pool_id": {
          "description": "Cognito User Pool ID",
          "type": "string"
        },
        "user_pool_client_id": {
          "description": "Cognito User Pool Client ID",
          "type": "string"
        },
        "identity_pool_id": {
          "description": "Cognito Identity Pool ID",
          "type": "string"
        },
        "password_policy": {
          "description": "Cognito User Pool password policy",
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "min_length": {
              "type": "integer",
              "minimum": 6,
              "maximum": 99
            },
            "require_numbers": {
              "type": "boolean"
            },
            "require_lowercase": {
              "type": "boolean"
            },
            "require_uppercase": {
              "type": "boolean"
            },
            "require_symbols": {
              "type": "boolean"
            }
          }
        },
        "oauth": {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "identity_providers": {
              "description": "Identity providers set on Cognito User Pool",
              "type": "array",
              "items": {
                "type": "string",
                "enum": [
                  "GOOGLE",
                  "FACEBOOK",
                  "LOGIN_WITH_AMAZON",
                  "SIGN_IN_WITH_APPLE"
                ]
              },
              "minItems": 0,
              "uniqueItems": true
            },
            "domain": {
              "description": "Domain used for identity providers",
              "type": "string"
            },
            "scopes": {
              "type": "array",
              "items": {
                "type": "string"
              },
              "minItems": 0,
              "uniqueItems": true
            },
            "redirect_sign_in_uri": {
              "description": "URIs used to redirect after signing in using an identity provider",
              "type": "array",
              "items": {
                "type": "string"
              },
              "minItems": 1,
              "uniqueItems": true
            },
            "redirect_sign_out_uri": {
              "description": "URIs used to redirect after signing out",
              "type": "array",
              "items": {
                "type": "string"
              },
              "minItems": 1,
              "uniqueItems": true
            },
            "response_type": {
              "type": "string",
              "enum": ["code", "token"]
            }
          },
          "required": [
            "identity_providers",
            "domain",
            "scopes",
            "redirect_sign_in_uri",
            "redirect_sign_out_uri",
            "response_type"
          ]
        },
        "standard_required_attributes": {
          "description": "Cognito User Pool standard attributes required for signup",
          "type": "array",
          "items": {
            "$ref": "#/$defs/amazon_cognito_standard_attributes"
          },
          "minItems": 0,
          "uniqueItems": true
        },
        "username_attributes": {
          "description": "Cognito User Pool username attributes",
          "type": "array",
          "items": {
            "type": "string",
            "enum": ["email", "phone_number", "username"]
          },
          "minItems": 1,
          "uniqueItems": true
        },
        "user_verification_types": {
          "type": "array",
          "items": {
            "type": "string",
            "enum": ["email", "phone_number"]
          }
        },
        "unauthenticated_identities_enabled": {
          "type": "boolean",
          "default": true
        },
        "mfa_configuration": {
          "type": "string",
          "enum": ["NONE", "OPTIONAL", "REQUIRED"]
        },
        "mfa_methods": {
          "type": "array",
          "items": {
            "enum": ["SMS", "TOTP"]
          }
        }
      },
      "required": ["aws_region", "user_pool_id", "user_pool_client_id"]
    },
    "data": {
      "description": "Outputs generated from defineData",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "aws_region": {
          "$ref": "#/$defs/aws_region"
        },
        "url": {
          "description": "AppSync endpoint URL",
          "type": "string"
        },
        "model_introspection": {
          "description": "generated model introspection schema for use with generateClient",
          "type": "object"
        },
        "api_key": {
          "type": "string"
        },
        "default_authorization_type": {
          "$ref": "#/$defs/aws_appsync_authorization_type"
        },
        "authorization_types": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/aws_appsync_authorization_type"
          }
        }
      },
      "required": [
        "aws_region",
        "url",
        "default_authorization_type",
        "authorization_types"
      ]
    },
    "geo": {
      "description": "Outputs manually specified by developers for use with frontend library",
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "aws_region": {
          "description": "AWS Region of Amazon Location Service resources",
          "$ref": "#/$defs/aws_region"
        },
        "maps": {
          "description": "Maps from Amazon Location Service",
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "items": {
              "type": "object",
              "additionalProperties": false,
              "propertyNames": {
                "description": "Amazon Location Service Map name",
                "type": "string"
              },
              "patternProperties": {
                ".*": {
                  "$ref": "#/$defs/amazon_location_service_config"
                }
              }
            },
            "default": {
              "type": "string"
            }
          },
          "required": ["items", "default"]
        },
        "search_indices": {
          "description": "Location search (search by places, addresses, coordinates)",
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "items": {
              "type": "array",
              "uniqueItems": true,
              "minItems": 1,
              "items": {
                "description": "Actual search name",
                "type": "string"
              }
            },
            "default": {
              "type": "string"
            }
          },
          "required": ["items", "default"]
        },
        "geofence_collections": {
          "description": "Geofencing (visualize virtual perimeters)",
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "items": {
              "type": "array",
              "uniqueItems": true,
              "minItems": 1,
              "items": {
                "description": "Geofence name",
                "type": "string"
              }
            },
            "default": {
              "type": "string"
            }
          },
          "required": ["items", "default"]
        }
      },
      "required": ["aws_region"]
    },
    "notifications": {
      "type": "object",
      "description": "Outputs manually specified by developers for use with frontend library",
      "additionalProperties": false,
      "properties": {
        "aws_region": {
          "$ref": "#/$defs/aws_region"
        },
        "amazon_pinpoint_app_id": {
          "type": "string"
        },
        "channels": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/amazon_pinpoint_channels"
          },
          "minItems": 1,
          "uniqueItems": true
        }
      },
      "required": ["aws_region", "amazon_pinpoint_app_id", "channels"]
    },
    "storage": {
      "type": "object",
      "description": "Outputs generated from defineStorage",
      "additionalProperties": false,
      "properties": {
        "aws_region": {
          "$ref": "#/$defs/aws_region"
        },
        "bucket_name": {
          "type": "string"
        }
      },
      "required": ["aws_region", "bucket_name"]
    },
    "custom": {
      "description": "Outputs generated from backend.addOutput({ custom: <config> })",
      "type": "object"
    }
  },
  "required": ["version"],
  "$defs": {
    "aws_region": {
      "type": "string"
    },
    "amazon_cognito_standard_attributes": {
      "description": "Amazon Cognito standard attributes for users -- https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-attributes.html",
      "type": "string",
      "enum": [
        "address",
        "birthdate",
        "email",
        "family_name",
        "gender",
        "given_name",
        "locale",
        "middle_name",
        "name",
        "nickname",
        "phone_number",
        "picture",
        "preferred_username",
        "profile",
        "sub",
        "updated_at",
        "website",
        "zoneinfo"
      ]
    },
    "aws_appsync_authorization_type": {
      "description": "List of supported auth types for AWS AppSync",
      "type": "string",
      "enum": [
        "AMAZON_COGNITO_USER_POOLS",
        "API_KEY",
        "AWS_IAM",
        "AWS_LAMBDA",
        "OPENID_CONNECT"
      ]
    },
    "amazon_location_service_config": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "style": {
          "description": "Map style",
          "type": "string"
        }
      }
    },
    "amazon_pinpoint_channels": {
      "description": "supported channels for Amazon Pinpoint",
      "type": "string",
      "enum": ["IN_APP_MESSAGING", "FCM", "APNS", "EMAIL", "SMS"]
    }
  }
}
```

### Sign-in, Sign-up 구현

SignIn, SignUp 메서드를 사용하기 위해서는 `AmplifyAuthCognito` 플러그인을 사용한다. `Amplify.Auth`를 바로 사용할 수도 있지만, 백엔드를 구성하지 않고 사용한다면 기본 속성만을 활용할 수 있어 Cognito에서 설정한 내용들을 확인하지 못할 수 있다.

이번 프로젝트에서는 `email`을 통한 로그인과 `OAuth` 인증 방식을 적용하였는데 각각 아래와 같이 추가할 수 있다.

#### Email 로그인

```dart
...
final cognitoPlugin = Amplify.Auth.getPlugin(AmplifyAuthCognito.pluginKey);
cognitoPlugin.signIn(
  username: _userEmail_,
  password: _userPassword_,
);
```

#### OAuth 인증(Apple 인증)

```dart
...
final cognitoPlugin =
    Amplify.Auth.getPlugin(AmplifyAuthCognito.pluginKey);
cognitoPlugin.signInWithWebUI(provider: AuthProvider.apple);
...
```

OAuth 인증의 경우 반드시 WebView를 통해 진행된다(Amplify 제약사항). **iOS**, **Windows**, **Linux** 환경의 경우 별도의 설정 없이도 웹 화면을 표시해준다.

하지만 **Android**의 경우 다음과 같이 `AndroidManifest.xml` 파일의 스키마를 추가해주어야한다.

```xml
<queries>
    <intent>
        <action android:name=
            "android.support.customtabs.action.CustomTabsService" />
    </intent>
</queries>
<application>
  ...
  <activity
        android:name=".MainActivity" android:exported="true">
        <intent-filter>
            <action android:name="android.intent.action.VIEW" />
            <category android:name="android.intent.category.DEFAULT" />
            <category android:name="android.intent.category.BROWSABLE" />
            <data android:scheme="myapp" />
        </intent-filter>
  </activity>
  ...
</application>
```

### 인증정보 확인

#### 기본적인 방법

현재 사용자의 인증 상태를 가져오기 위해서는 `fetchAuthSession` 메서드를 통해 확인 할 수 있다.

```dart
await Amplify.Auth.fetchAuthSession();
```

해당 메서드의 `isSignedIn` 값을 확인하면 `true`, `false`로 표시된다. 이외에도 다른 정보들을 확인하려면 백엔드 설정을 통해 추가해줄 수 있는데, **Cognito**의 설정을 그대로 가져오기 위해서는 위의 **SignIn**, **SignUp** 과 같이 `AmplifyAuthCognito` 패키지의 `fetchAuthSession` 메서드를 호출하면 된다.

```dart
...
final cognitoPlugin =
    Amplify.Auth.getPlugin(AmplifyAuthCognito.pluginKey);
await cognitoPlugin.fetchAuthSession();
...
```

#### Routes에 적용

일반적으로 애플리케이션을 구현할 때에는 Routes를 통해 각 화면을 구현한다. 외부에서 화면에 바로 접근할 수 있는 링크가 없는 경우 각 화면에 진입할 때 사용자의 인증정보를 확인하는 것만으로도 충분할 것이다. 다음은 `MaterialApp.router`에서 각 화면에 진입할 때 인증정보를 검증하도록 하는 로직이다.

```dart
/// main.dart
class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return Authenticator(
      authenticatorBuilder:
          (BuildContext context, AuthenticatorState authenticatorState) {
        return MaterialApp(
          home: const Scaffold(
            ...
            body: LoginScreen(),
          ),
        );
      },
      child: MaterialApp.router(
        ...
        routerConfig: onGenerateCustomRoute,
      ),
    );
  }
}
```

`authenticatorBuilder` Named Parameter를 통해 인증 되지 않은 사용자가 접근할 경우 표시할 화면을 구현해준다. 따로 작성하지 않을 경우 Amplify에서 기본적으로 제공하는 UI가 표시된다.

```dart
/// GoRouter 설정 파일
/// on_generate_custom_route.dart
final GoRouter onGenerateCustomRoute = GoRouter(
  routes: [
    GoRoute(
      path: '/',
      builder: (BuildContext context, GoRouterState state) =>
          const AuthenticatedView(
        child: CustomScreen(),
      ),
    ...
```

일반적으로 **Flutter Navigator 2.0**을 통해서 개발하는 환경이라면 **GoRouter**를 적용해서 사용하고 있을 것이다. 위 예시는 **GoRouter**설정 파일의 예시로 기본 **Router** 설정 방법도 크게 다르지 않다.

`AuthenticatedView` 위젯을 활용하여 화면을 감싸주면 해당 위젯에 접근할 때, Authentication 정보를 확인한다. 인증 세션을 확인하여 인증된 사용자일 경우 `AuthState`에 해당 인증정보를 담아두는데 해당 `state`가 `null`인지 확인하는 로직을 거친다.
