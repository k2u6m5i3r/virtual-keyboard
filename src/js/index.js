class Keyboard {
    buildingPage() {
        let wrapperEl = document.createElement("div");
        wrapperEl.classList.add("wrapper");

        let keyboardContainerEl = document.createElement("div");
        keyboardContainerEl.classList.add("keyboard__container","keyboard");

        let keyboardTitelEl = document.createElement("div");
        keyboardTitelEl.classList.add("keyboard__titel");
        keyboardTitelEl.textContent = "RSS Виртуальная клавиатура";

        let keyboardTextAreaEl = document.createElement("textarea");
        keyboardTextAreaEl.classList.add("keyboard__text-area");
        keyboardTextAreaEl.setAttribute("id", "textarea");
        keyboardTextAreaEl.setAttribute("rows", "5");
        keyboardTextAreaEl.setAttribute("cols", "50");
  
        let keyboardbBodyEl = document.createElement("div");
        keyboardbBodyEl.classList.add("keyboard__body");

        let keyboardInfoEl = document.createElement("div");
        keyboardInfoEl.classList.add("keyboard__info");
        let keyboardInfoDesOneEl = document.createElement("p");
        keyboardInfoDesOneEl.textContent = "Клавиатура создана в операционной системе Windows";
        let keyboardInfoDesTwoEl = document.createElement("p");
        keyboardInfoDesTwoEl.textContent = "Для перекоючения языка комбинация: левый crtl + alt";
        keyboardInfoEl.appendChild(keyboardInfoDesOneEl);
        keyboardInfoEl.appendChild(keyboardInfoDesTwoEl);

        keyboardContainerEl.appendChild(keyboardTitelEl);
        keyboardContainerEl.appendChild(keyboardTextAreaEl);
        keyboardContainerEl.appendChild(keyboardbBodyEl);
        keyboardContainerEl.appendChild(keyboardInfoEl);
        
        wrapperEl.appendChild(keyboardContainerEl);

        document.body.appendChild(wrapperEl);
    }
}

let myKeyboard = new Keyboard();
myKeyboard.buildingPage();
console.log("in js");