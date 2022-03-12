(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // chitterView.js
  var require_chitterView = __commonJS({
    "chitterView.js"(exports, module) {
      var ChitterView2 = class {
        constructor(model) {
          this.model = model;
          this.mainContainerEl = document.querySelector("#main-container");
          this.submitButtonEl = document.querySelector("#submit-button");
          this.submitButtonEl.addEventListener("click", () => {
            this.display();
          });
        }
        display() {
          console.log("Clicked successfully");
          let textEl = document.querySelector("#peep-input");
          let d = document.createElement("div");
          d.setAttribute("id", "peep");
          d.innerText = textEl.value;
          this.mainContainerEl.append(d);
        }
      };
      module.exports = ChitterView2;
    }
  });

  // index.js
  var ChitterView = require_chitterView();
  var view = new ChitterView();
})();
