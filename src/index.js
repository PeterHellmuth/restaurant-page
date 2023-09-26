import './style.css';

import { createHomeContent } from './home';
import { createMenuContent } from './menu';
import { createContactContent } from './contact';
export {appendElem};

const contentElem = document.getElementById("content");


const navSection = appendElem(contentElem, "div", null, "nav-section");
const homeButton = appendElem(navSection, "button", "Home", "nav-button");
const menuButton = appendElem(navSection, "button", "Menu", "nav-button");
const contactButton = appendElem(navSection, "button", "Contact", "nav-button");
homeButton.addEventListener("click", navButtonClicked);
menuButton.addEventListener("click", navButtonClicked);
contactButton.addEventListener("click", navButtonClicked);

let pageContent = contentElem.appendChild(createHomeContent());


function appendElem(parentElem, type, innerText = null, classIn = null, id = null){
    let childElem = document.createElement(`${type}`);
    id ? childElem.id = id : null ;
    classIn ? childElem.classList.add(classIn) : null;
    innerText ? childElem.innerText = innerText : null;
    parentElem.appendChild(childElem);
    return childElem;
}


function navButtonClicked(event){
    pageContent.remove();
    if(event.target == homeButton){
        pageContent = createHomeContent();
        contentElem.appendChild(pageContent);
    } else if (event.target == menuButton){
        pageContent = createMenuContent();
        contentElem.appendChild(pageContent);
    } else if (event.target == contactButton){
        pageContent = createContactContent();
        contentElem.appendChild(pageContent);
    } 
}

