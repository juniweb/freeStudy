export default class codeSqurad {
  constructor(props) {
    this.lectures = ['JAVA', 'iOS'];
  }

  getLectures () {
    return this.lectures;
  }

  getCurrentHour () {
    return (new Date).getHours();
  }

  getTime () {
    return Date.now();
  }
}