export{createMenuContent}
import backgroundImage from './background.jpg';
import { appendElem } from ".";

function createMenuContent(){
    let content = document.createElement("div");

    const homeBackground = new Image();
    homeBackground.src = backgroundImage;
    homeBackground.classList.add("background-image");
    content.appendChild(homeBackground);

    appendElem(content, "h1", "Our Menu");
    const aboutSection = appendElem(content, "div", null, "about-section");
    appendElem(aboutSection, "p", "We put some tiny bits of plant on a log and charge you $72.");
    return content;
}