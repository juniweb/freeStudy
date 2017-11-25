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

### TypeScript Config File(tsconfig.json) Option
[tsconfig json](http://json.schemastore.org/tsconfig)

### 최상위 프로퍼티
[Compiler Options](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
[Typescript 컴파일 옵션](http://blog.naver.com/PostView.nhn?blogId=skout90&logNo=221036082289&parentCategoryNo=&categoryNo=72&viewDate=&isShowPopularPosts=true&from=search)

### types, typeRoots

> typeRoots와 types는 type definition(d.ts) 파일을 찾을 수 있는 디렉토리 위치를 지정

```
{
  "compilerOptions": {
    "typeRoots": [
      "node_modules"
    ],
    "types": [
      "types.d3"
    ]
  }
}
```

### target 과 lib

  - target
    - 빌드 결과물의 Script 버전. 
    - Default 는 es3
  - lib
    - 기본 type definition 라이브러리. 
      - 'es3' 는 lib.d.ts
      - 'es5' 는 dom, es5, scripthost
      - 'es6' 는 dom, es6, dom.iterable, scripthost  

### outDir, outFile

  - outDir : 컴파일 파일의 디렉토리 지정
  - outFile : 컴파일 파일 위치 지정. 1 개 파일.

### module

> 컴파일 결과물을 어떤 모둘 표준을 사용할 것인가

  - 'es6' 는 es6
  - 'es6'가 아니면 commonJS
  - AMD 나 System 사용하려면, outFile 지정
  - es6 es2015 사용하려면, target 이 'es5 이하

 
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

  - [TypeScript Quick start](https://www.typescriptlang.org/docs/tutorial.html)
  - [Typescript 2.0 options : typeRoots, types, rootDirs](https://medium.com/@iamssen/typescript-2-0-options-typeroots-types-rootdirs-d82e261dcc8c)
