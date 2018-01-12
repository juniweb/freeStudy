// HTML 의 li 리스트 중에서 문자열 'e'가 포함된 노드로 구성된 배열을 만들어서 반환

window.onload = function () {

  // li element 리스트
  let elLi = document.querySelectorAll('li');

  // 반복 객체를 Array 변환
  let arr = Array.from(elLi);

  // filter 이용하여 조건에 맞는 배열 반환
  let resultArr = arr.filter(function (el) {
    // 특정 문자 포함여부 확인
    return el.innerText.includes('e');
  });

  console.log('resultArr11 : ', resultArr);
};