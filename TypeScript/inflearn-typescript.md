# 타입스크립트 코리아 : 기초 세미나

 - 강사 : 이웅재
 - [인프런 - 타입스크립트 코리아 : 기초세미나](https://www.inflearn.com/course/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%BD%94%EB%A6%AC%EC%95%84-1705-%EA%B8%B0%EC%B4%88-%EC%84%B8%EB%AF%B8%EB%82%98/)
 - 강의 자료
   - http://slides.com/woongjae/deck-8
   - http://slides.com/woongjae/deck-8-14
   - http://slides.com/woongjae/deck-8-15  


## TypeScript Overview

TypeScript 는 Javascript의 Superset이다  

## 개발환경 구축 및 컴파일러 사용


### TypeScript 개발환경
  1. node.js 설치(npm 포함)
  2. typescript 설치(global 설치)
  ```
	$ npm install -g typescript
  ```
  3. typescript 버전 확인
  ```
	$ tsc -v
  ```

### TypeScript 컴파일(Global 설치) 

  1. CLI 명령어로 ts 파일을 컴파일
  ```
	$ tsc [ts 파일명]
	Ex) $ tsc test.ts
  ```
  2. 특정 프로젝트 폴더에서 타입스크립트 컴파일러 설정에 맞춰 컴파일
  ```
	$ tsc --init
  ```  
	tsconfig.js 파일이 생성되며, 컴파일 옵션을 설정할 수 있다  
   
	타입스크립트 컴파일을 아래 명령어로 처리한다.
  ```
	$ tsc
  ```  
  
  3. 특정 프로젝트 폴더에서 타입스크립트 컴파일러 설정에 맞춰 컴파일(watch 모드)
	타입스크립트 Watch 모드 컴파일을 아래 명령어로 처리한다. 파일이 변경 되면, 자동으로 컴파일한다.
  ```
	$ tsc -w
  ```  


## IDE 활용

### Visual Studio Code - TypeScript 버전 변경 

> Editor 우측 하단에서 버전 클릭 후, Version 변경 가능

![](https://user-images.githubusercontent.com/2193314/28851416-0fc1765e-76d7-11e7-9b86-6a9ae1c728dd.png)

### TSLint

> VS Code 에서 **TSLint** 설치
 

## Compiler Options

## TypeScript Basic Types

## var, let, const

## Type assertions, Type alias

## Interface

## Class

## Generic

## iterator

## Decorator

## Type Inference

## React with TypeScript 


## 참고

  - [git - 간편 안내서](https://rogerdudler.github.io/git-guide/index.ko.html)
  - [Git 활용 (기본적인 사용법)](http://jeremyko.blogspot.kr/2012/07/git.html)