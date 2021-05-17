# React Starter Template

## 소개

신규 react 프로젝트를 위한 시작 템플릿입니다.
기업협업 위티 프론트엔드 3명으로 부동산 사이트 클론 프로젝트입니다.

## 기간

04.12 ~ 04.16

## 구조

이 프로젝트의 구조는 다음과 같습니다.

### components/

- 컴포넌트들을 관리하는 디렉토리입니다.

#### components/common/

- 공용으로 사용되는 재사용성이 높은 컴포넌트들을 관리하는 디렉토리입니다.

### styles

- style에 관련된 것들을 관리하는 디렉토리입니다.

#### stlyes/mixin.ts

- 자주 사용되는 스타일 구성요소들을 mixin 함수를 통해서 편리하게 사용할 수 있도록 만든 파일입니다.

### styles/theme.ts

- styled-components에서 ThemeProvider를 통해서 전달할 theme을 작성 및 관리하는 파일입니다.

## 실행가능한 스크립트

1. `yarn start`

- 프로젝트를 localhost:3000 주소로 개발용 모드로 실행합니다.

2. `yarn bulild`

- build를 합니다.

3. `yarn lint`

- eslint를 통해서 설정한 lint 문법에 맞지 않는 부분이 있는지 검사합니다.

4. `yarn lint-fix`

- eslint를 통해서 설정한 lint 문법에 맞지 않는 부분이 있는지 확인 후 자동수정이 가능한 부분들은 자동으로 수정합니다.

## ISSUE
