import maisonOmbreluneImg from "./assets/maisonOmbrelune.jpg"

export default class Home {
    constructor(content) {
        this.content = content;
    }

    createWelcomeCard() {
        let div = document.createElement("div");
        div.classList.add("welcome");

        let image = document.createElement("img");
        image.src = maisonOmbreluneImg;
        image.alt = "Maison Ombrelune";

        let para = document.createElement("p");
        para.textContent = "Bienvenue à la Maison Ombrelune. Where every dish is a whisper of moonlight and memory.";

        div.appendChild(image);
        div.appendChild(para);

        return div;
    }

    createCard() {
        let div = document.createElement("div");
        div.classList.add("card");
        
        let heading = document.createElement("h2");
        heading.textContent = "Location";
        
        let para1 = document.createElement("p");
        para1.textContent = "📍 No. 3, Silent Mist Lane, Moonvalley Hamlet, Kingdom of Luneval, Starlight Region, Postal Code: 000-MOON";

        let para2 = document.createElement("p");
        para2.textContent = "🕯️ Just beyond the Willow Arch, where shadows shimmer and the moonlight lingers.";

        div.appendChild(heading);
        div.appendChild(para1);
        div.appendChild(para2);

        return div;
    }

    generateHome(){
        this.content.innerHTML = "";

        let welcomeCard = this.createWelcomeCard();
        let card = this.createCard();

        this.content.appendChild(welcomeCard);
        this.content.appendChild(card);
    }
}