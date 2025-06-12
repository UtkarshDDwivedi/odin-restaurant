import './styles.css'
import Home from './home';
import Contact from './contact';
import About from './about'

let content = document.querySelector("#content");

let homeBtn = document.querySelector("nav :nth-child(1)");
let aboutBtn = document.querySelector("nav :nth-child(2)");
let contactBtn = document.querySelector("nav :nth-child(3)");

let home = new Home(content);
let about = new About(content);
let contact = new Contact(content);

let activeBtn;
activeBtn = homeBtn;
activeBtn.classList.toggle("active");
home.generateHome();

homeBtn.addEventListener("click", () => {
    if (activeBtn == homeBtn) return;

    activeBtn.classList.toggle("active");
    activeBtn = homeBtn;
    activeBtn.classList.toggle("active");
    home.generateHome();
})
aboutBtn.addEventListener("click", () => {
    if (activeBtn == aboutBtn) return;

    activeBtn.classList.toggle("active");
    activeBtn = aboutBtn;
    activeBtn.classList.toggle("active");
    about.generateAbout();
})
contactBtn.addEventListener("click", () => {
    if (activeBtn == contactBtn) return;

    activeBtn.classList.toggle("active");
    activeBtn = contactBtn;
    activeBtn.classList.toggle("active");
    contact.generateContact();
})