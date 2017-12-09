# Angular-workshop

 - 강사 : 이웅재
 - 2017-12-02
 - 강의 자료
   - [[코드버스킹] Angular 101](https://slides.com/woongjae/angular101-1/)
 

## Quick Start 

### Angular CLI 설치

```
npm install -g @angular/cli
```

## Component 

### Component Name 의 prefix 변경 

.angular-cli.json 파일에서 prefix 변경

```
      "prefix": "app",
```


## DI

```

class Car {
engine;
wheel;
constructor(engine, wheel) {
this.engine = engine;
this.wheel = wheel;
}
}

class Engine { }

class Wheel { }

const engine = new Engine();
const wheel = new Wheel();

const car = new Car(engine, wheel);

```

## 참고

  - [Angular CLI](https://cli.angular.io/)
  - [inversify - Javascript DI](https://www.npmjs.com/package/inversify)
  - [Visual Studio Code 커맨드에서 바로 실행하는 방법](http://ilseokoh.com/2017/01/04/visual-studio-code-%EC%BB%A4%EB%A7%A8%EB%93%9C%EC%97%90%EC%84%9C-%EB%B0%94%EB%A1%9C-%EC%8B%A4%ED%96%89%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95/)
