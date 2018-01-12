// lotto 번호 만들기
// 1.유일한 값을 추출하는 과정에서 Set 을 사용합니다.
// getRandomNumber 함수에 변수를 전달하는 과정에서 destructuring 을 사용해 봅시다.

const SETTING = {
  name : 'LUCKY LOTTO!',
  count : 6,
  maxNumber : 45
};

function getRandomNumber(maxNumber) {
  // 랜덤한 유일한 숫자값을 추출
  let resultNumber = Math.floor(Math.random() * maxNumber) + 1;
  console.log(resultNumber);

  return resultNumber;
}

let resultLotto = new Set();

let {count, maxNumber} = SETTING;

for(let i=0; i<count; i++) {
  resultLotto.add(getRandomNumber(maxNumber));
}

console.log(resultLotto);
