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

// mbc 값만 출력
let [,mbc] = news;
console.log('[mbc 값만 출력]');
console.log(mbc);

// mbc 에서 title, imgurl 출력
// let {title, imgurl} = mbc;
// console.log('[mbc 에서 title, imgurl 출력]');
// console.log('title: ', title, ' / imgurl: ', imgurl);

// mbc 에서 title, imgurl 출력 두번째 방법
let [, {title, imgurl}] = news;
console.log('[mbc 에서 title, imgurl 출력 두번째]');
console.log('title: ', title, ' / imgurl: ', imgurl);