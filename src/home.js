export{createHomeContent}
import backgroundImage from './background.jpg';
import { appendElem } from ".";

function createHomeContent(){
    let content = document.createElement("div");
    content.classList.add("content-section");

    const homeBackground = new Image();
    homeBackground.src = backgroundImage;
    homeBackground.classList.add("background-image");
    content.appendChild(homeBackground);

    appendElem(content, "h1", "Plants on a log restaurant", "content-header");
    const aboutSection = appendElem(content, "div", null, "main-content");
    appendElem(aboutSection, "p", "We put some tiny bits of plant on a log and charge you $72.", "content-text");

    return content;
}