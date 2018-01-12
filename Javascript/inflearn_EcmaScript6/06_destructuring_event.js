let news = [
  {
    'title' : 'sbs',
    'imgurl' : 'http://sbs.com/image',
    'newslist' : [
      'SBS 기사1',
      'SBS 기사2',
      'SBS 기사3',
      'SBS 기사4',
      'SBS 기사5'
    ]
  },
  {
    'title' : 'mbc',
    'imgurl' : 'http://mbc.com/image',
    'newslist' : [
      'MBC 기사1',
      'MBC 기사2',
      'MBC 기사3',
      'MBC 기사4',
      'MBC 기사5'
    ]
  }  
];

// 두번째 newslist 만 출력
function getSecondsNewsList([,{newslist}]) {
  console.log('[두번째 newslist 출력]');
  console.log(newslist);
}

getSecondsNewsList(news);


// 첫번째 newslist 만 출력
function getFirstNewsList([{newslist}]) {
  console.log('[첫번째 newslist 출력]');
  console.log(newslist);
}

getFirstNewsList(news);

// DIV 엘리멘트에서 target 정보만 가져오기
window.onload = function () {
  document.querySelector('div').addEventListener('click', function ({target}) {
    console.log('tagName: ', target.tagName);
    console.log('innerText: ', target.innerText);
    console.log('target: ', target);
  });
};