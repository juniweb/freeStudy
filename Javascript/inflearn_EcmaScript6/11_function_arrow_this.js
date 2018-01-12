window.onload = function () {

  const myObj = {
    runTimeout() {
      setTimeout(() =>  {
        console.log(this);
        this.printData();
      }, 200);
    },
    printData() {
      console.log('hi! huimori');
    }
  };
  
  myObj.runTimeout();

  // ---------------------------------------------------

  const el = document.querySelector('p');

  const myObj2 = {
    register() {
      el.addEventListener('click', (evt) => {
        this.printData(evt.target);
      });      
    },
    printData(el) {
      console.log('clicked! ', el.innerText);
    }
  };

  myObj2.register();


};


