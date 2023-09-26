export{createMenuContent}
import backgroundImage from './background.jpg';
import { appendElem } from ".";

function createMenuContent(){
    let content = document.createElement("div");
    content.classList.add("content-section");

    const homeBackground = new Image();
    homeBackground.src = backgroundImage;
    homeBackground.classList.add("background-image");
    content.appendChild(homeBackground);

    appendElem(content, "h1", "Our Menu", "content-header");
    const aboutSection = appendElem(content, "div", null, "main-content");
    appendElem(aboutSection, "p", "Plants on a log.", "content-text");
    return content;
}