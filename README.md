# className modules

```
const sassRegex = /(\.module|.*)\.(scss|sass)$/; // sass, scss, module regex

module: {
  rules: [
    test: sassRegex,
    use: [
      "style-loader",
      {
        loader: "css-loader",
        options: {
          modules: true, // 클래스네임 모듈화 (!핵심)
          importLoaders: 1,
        },
      },
      "sass-loader",
    ],
  ]
}
```

## [부가적으로 추가하고 싶은 내용]

- className의 모듈화로 다른 파일인데 클래스네임이 겹치더라도 서로의 영향을 안주도록 설정을 했지만 코드의 가독성, 코드가 무거워지는 부분에 있어 고민을 하고 추가한 내용이다.

1. packgae.json

```
npm install @dr.pogodin/babel-plugin-react-css-modules
            postcss-scss
```

2. babelrc config

```
"plugins": [
		[
			"@dr.pogodin/react-css-modules",
			{
				"generateScopedName": "[name]_[local]_[hash:base64:5]",
				"filetypes": {
					".scss": {
						"syntax": "postcss-scss"
					}
				}
			}
		]
	]
```

3. webpack config

```
{
  test: sassRegex,
  use: [
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        importLoaders: 1,
        modules: { localIdentName: '[name]_[local]_[hash:base64:5]' } // 클래스네임 모듈화
      },
    },
    'sass-loader',
  ],
  exclude: /node_modules/,
},
```

4. 사용방법

```
// 원래 사용 방법
className="name box"

// 모듈화 적용시 사용 방법
className={[styles.name, styles.box].join(' ')}

// 모듈화를 적용하면서 기존 방법 사용
styleName="name box"
```

- localIdentName: '[name]_[local]_[hash:base64:5]'
- 출력할 클래스네임 형식: '[파일이름]_[해당 클래스네임]_[hash값을 5글자로표현]'

=> 편한 방식을 사용하면 된다.

# sass

## node-sass or dart-sass

- 두 개 다 설치 x
- $ npm install -g sass // sass만 설치해도 사용가능, dart-sass를 sass로 변경함

## @use 사용 권장

- @use를 사용하면 변수 등 충돌이나 모듈 간의 의존 관계 문제를 해결할 수 있다.
- 2022년 10월 1일 @import 및 대부분의 전역 기능에 대한 지원이 완전히 중단.

- ## @use vs @import

- 기존에 사용되어 오던 @import는 전역으로 사용하여 변수나 클래스네임이 겹칠 경우 구조(레이아웃)이 서로 겹쳐 중첩 클래스네임을 사용하거나 겹치지 않는 클래스네임을 사용하도록 해야했다. 반면 @use는 이러한 문제등을 보완하기 나온것으로 범위(scope)를 제한 할 수 있다. 즉, 불러온 파일의 특정값만 불러와 사용할 수 있다.

```
// 사용 방법
@use "file";

.element {
  background-color: file.$body-bg;
  @include file.float-left;
}

```

## @use와 @import 사이에는 네임스페이스 외에도 몇 가지 중요한 차이점이 있습니다 .

- @use스타일시트를 몇 번 사용하든 상관없이 스타일시트를 실행하고 CSS 를 한 번만 포함.
- @use 전역이 아니라 현재 스타일시트에서만 이름을 사용할 수 있다.
- 이름이 - 또는 \_로 시작하는 멤버는 @use가 있는 현재 스타일시트에 대해 비공개다.
- 스타일시트에 @extend가 포함되어 있으면 해당 확장은 가져오는 스타일시트가 아니라 가져오는 스타일시트에만 적용.
  자리 표시자 선택자는 네임스페이스가 없지만 개인 정보를 존중.

```
// 다른 파일의 공통 속성 불러오기

[특정 속성 값 불러오기]
@use "file" as b;

.element {
  @include b.float-left;
}

[해당 파일의 전체 속성을 읽어옴]
@use "file" as \*;

.element {
  @include float-left;
}
```

## with문

- $paragraph-margin-bottom 변수를 1.2rem으로 설정했을 때, with문은 임포트되는 모듈에 정의된(또는 전달된) 변수만 허용하고 !default로 정의된 경우에만 허용하므로 값을 전달하지 않으면 default값을 출력하고 값을 지정하면 변경 된 값이 출력된다.

```
// file.scss
$paragraph-margin-bottom: 1rem !default;

p {
  margin-top: 0;
  margin-bottom: $paragraph-margin-bottom;
}

@use "file" with (
  $paragraph-margin-bottom: 1.2.2vmin
);
```

## @forward

- @forward 규칙은 다른 모듈의 변수, 믹스인 및 함수를 현재 모듈 내에서 코드에 표시하지 않고 전역으로 사용할 파일을 해당 파일에서 사용할때 사용하기 위한 문법.

```
// 전역 파일
@forward "functions";
@forward "variables";
@forward "mixins";

// 전역 파일 안에서 단 하나의 속성(변수)만 보여주고 싶을 때 : show
@forward "functions" show color-yiq;

// 전역 파일 안에서 해당 속성(변수)만 비공개하고 싶을 때 : hide
@forward "functions" hide assert-ascending;
```

- ## @forward + @use
- 모듈에 수동 네임스페이스를 추가할 수 있다. 전달되는 모든 이름에 접두사를 추가하여 as 문으로 활용 가능

```
// material/_index.scss
@forward "theme" as theme-*;

// 범위의 이름을 가진 올인원 모듈을 사용할 수 있다.
@use "material" with ($theme-primary: blue);

// (or) 혹은 간단한 이름으로 하위 모듈을 사용할 수 있다.
@use "material/theme" with ($primary: blue);
```

# 주의사항

- 클래스네임을 동일하게 사용해도 레이아웃에 영향을 안 주기 위함으로 className 모듈을 설정하였으나,
  공통으로 사용할 속성이 다른 파일에도 존재하면 해당 파일을 불러오는데 레이아웃을 설정할 파일과 불러올 파일의 클래스네임이 겹치는 경우 서로의 레이아웃에 영향을 주게된다. 따라서 공통 파일을 생성해서 해당 파일에서의 속성만 꺼내오거나 하나의 속성만 필요 할 경우 변수 파일을 생성하여 불러오는 것이 @use와 className 모듈을 사용하는데에 효율적이다.


https://jangar6.github.io/port2022/
