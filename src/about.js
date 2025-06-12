import sylvain from "./assets/sylvainOmbrelune.png"

export default class About {
    constructor(content) {
        this.content = content;
    }

    createCard() {
        let div = document.createElement("div");
        div.classList.add("tab");

        let image = document.createElement("img");
        image.src = sylvain;
        image.alt = "Sylvain Ombrelune";

        let para = document.createElement("p");
        para.textContent = "Maison Ombrelune — The House of Shadowmoon — was founded to preserve a rare, flickering feeling: the quiet stillness between dusk and dream. Its founder, Sylvain Ombrelune, a poet, herbalist, and wanderer of forgotten places, believed taste was the sixth sense—one that connected the waking world to the infinite realms of imagination.Legend says Sylvain never wrote a menu. Instead, the dishes appear to those who hunger—whether it's for warmth, wonder, memory, or magic. Some guests speak of tasting lost family recipes. Others recall meals from lands they've never visited—or never could.";

        div.appendChild(image);
        div.appendChild(para);

        return div;
    }

    generateAbout() {
        this.content.innerHTML = "";

        let card = this.createCard();
        this.content.appendChild(card);
    }
}