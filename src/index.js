import './style.css';
import backgroundImage from './background.jpg';


const homeBackground = new Image();
homeBackground.src = backgroundImage;
homeBackground.classList.add("background-image");

const contentElem = document.getElementById("content");
contentElem.appendChild(homeBackground);