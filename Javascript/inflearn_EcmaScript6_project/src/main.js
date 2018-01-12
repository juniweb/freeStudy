class Blog {
  constructor() {
    console.log('Blog is strted');
    const dataURL = "https://api.github.com/users";
    this.setInitBlog(dataURL);
  }

  setInitBlog(dataURL) {
    this.getData(dataURL, this.insertPosts);
  }

  getData(dataURL, fn) {
    const oReq = new XMLHttpRequest();

    oReq.addEventListener("load", () => {
      const list = JSON.parse(oReq.responseText);

      fn(list);
    });

    oReq.open('GET', dataURL);
    oReq.send();
  }

  insertPosts(list) {
    const div = document.querySelector(".row");

    list.forEach((v) => {
      div.innerHTML += `<div class="col-md-3"><a href=${v.html_url}> ${v.login} </a></div>`;

      console.log(div.innerHTML);
    });

    // console.log(div.innerHTML);
  }
}

export default Blog;