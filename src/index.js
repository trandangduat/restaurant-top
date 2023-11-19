import { homePage } from "./homePage.js";
import { menuPage } from "./menuPage.js";
import { aboutPage } from "./aboutPage.js";
import "./style.css"

let separateNavbarAndContent = document.getElementById("separate");
let navigationBar = document.getElementById("navbar");
let contentContainer = document.getElementById("content");
const pageContent = [homePage(), menuPage(), aboutPage()];
const navButton = document.querySelectorAll("#navbar > #links > a");

const UImodification = (function() {
    separateNavbarAndContent.style.height = navigationBar.offsetHeight + 'px';
})();

const pageLoadOnNavbar = (function() {
    let lastIndex = 0;
    navButton[lastIndex].setAttribute("class", "active");
    pageContent[0].forEach((e) => {
        contentContainer.appendChild(e);
    });
    navButton.forEach((Button, index) => {
        Button.addEventListener("click", () => {
            Button.setAttribute("class", "active");
            navButton[lastIndex].removeAttribute("class");
            lastIndex = index;
            contentContainer.innerHTML = '';
            pageContent[index].forEach((e) => {
                contentContainer.appendChild(e);
            });
            // contentContainer.appendChild(pageContent[index]);
        });
    });
})();

