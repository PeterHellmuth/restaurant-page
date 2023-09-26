export{createContactContent}
import backgroundImage from './background.jpg';
import { appendElem } from ".";

function createContactContent(){
    let content = document.createElement("div");
    content.classList.add("content-section");

    const homeBackground = new Image();
    homeBackground.src = backgroundImage;
    homeBackground.classList.add("background-image");
    content.appendChild(homeBackground);

    appendElem(content, "h1", "Location and hours:", "content-header");
    const aboutSection = appendElem(content, "div", null, "main-content");
    appendElem(aboutSection, "p", "Your backyard, any time.", "content-text");
    return content;
}