# 기능 구현

## 목차

## Modal

상세보기, 이미지 보기 등의 기능을 위해 화면위에 작은 창을 띄워 표시📑해주는
Modal 기능을 만들어보고 fadein, fadeout 등의 효과를 줘 완성도를 높여보자🙌

### Class로 구현

* Directory Tree

  ```
  template/
  ├── index.html
  └── src/
     ├── app.js
     ├── modal.js
     └── style.css
  ```

* `index.html`

  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>modal</title>
    <link rel="stylesheet" href="src/style.css">
  </head>
  <body>
    <div id="App"></div>
    <script src="src/modal.js"></script>
    <script src="src/app.js"></script>
  </body>
  </html>
  ```

* `src/app.js`

  ```js
  "use strict";
  console.log("app is running!");
  
  class App {
    $target = null;
  
    constructor($target) {
      this.$target = $target;
  
      console.log(this.$target);
      const button = document.createElement("button");
      button.addEventListener("click", this.onOpenModal.bind(this), false);
      button.innerText = "Click!";
      $target.appendChild(button);
  
      this.info = new Modal({
        $target,
        visible: false,
      });
    }
  
    onOpenModal() {
      this.info.setState();
    }
  }
  
  window.onload = () => {
    new App(document.querySelector("#App"));
  };
  ```

* `src/modal.js`

  ```js
  "use strict";
  console.log("modal is running!");
  
  class Modal {
    $info = null;
  
    constructor({ $target, visible }) {
      const $info = document.createElement("div");
      $info.className = "modal-info";
      this.$info = $info;
      $target.appendChild($info);
  
      this.visible = visible;
  
      this.render();
    }
  
    setState() {
      this.visible = !this.visible;
      this.render();
    }
  
    closeInfo() {
      this.visible = false;
      this.$info.style.animation = "fadeout 2s";
      this.render();
    }
  
    render() {
      const src =
        "https://github.com/mooyeon-choi/kinetic-typography-6/raw/main/images/kinetic-typography-6-example.gif";
      if (this.visible) {
        this.$info.innerHTML = `
          <article class="content-wrapper">
            <header class="title">
              <span>제목</span>
              <button class="close">x</button>
            </header>
            <img src="${src}" alt="image"/>
            <ul class="description">
              <li>첫번째</li>
              <li>두번째</li>
            </ul>
          </article>`;
  
        const closeModal = this.$info.querySelector(".close");
        closeModal.addEventListener("click", this.closeInfo.bind(this), false);
  
        this.$info.style.display = "block";
      } else {
        this.$info.style.display = "none";
      }
    }
  }
  ```
