import cat from "./assets/cat.jpeg"

export default class Contact {
    constructor(content) {
        this.content = content;
    }

    createCard() {
        let div = document.createElement("div");
        div.classList.add("contact");

        let image = document.createElement("img");
        image.src = cat;
        image.alt = "cat";

        let heading = document.createElement("h2");
        heading.textContent = "The Maison Ombrelune does not seek attention, it waits to be found.";

        let para = document.createElement("p");
        // para.textContent = "If you feel the call, follow the scent of wild thyme and candle smoke down Silent Mist Lane. Past the Willow Arch and through the veil of shimmerlight, you will arrive—not merely at a restaurant, but at a moment out of time. Follow the quiet curve of Silent Mist Lane, beyond the Willow Arch, where moonlight lingers longer than it should.";
        para.textContent = "If you feel the call, follow the scent of wild thyme and candle smoke down Silent Mist Lane. Follow the quiet curve of Silent Mist Lane, beyond the Willow Arch, where moonlight lingers longer than it should be";

        let para2 = document.createElement("p");
        para2.textContent = "📍 No. 3, Silent Mist Lane";

        let para3 = document.createElement("p");
        para3.textContent = "Moonvalley Hamlet, Starlight Region";

        let para4 = document.createElement("p");
        para4.textContent = "Kingdom of Luneval · 000-MOON";

        let para5 = document.createElement("p");
        para5.textContent = "No bookings are required—our tables shift, stretch, and shimmer to welcome all who arrive. You’ll never find the place full, only waiting.";

        let addressDiv = document.createElement("div");
        addressDiv.appendChild(para2);
        addressDiv.appendChild(para3);
        addressDiv.appendChild(para4);

        let paraDiv = document.createElement("div");

        paraDiv.appendChild(para);
        paraDiv.appendChild(addressDiv);
        paraDiv.appendChild(para5);


        div.appendChild(image);
        div.appendChild(paraDiv);

        return div;
    }

    generateContact() {
        this.content.innerHTML = "";

        let card = this.createCard();
        this.content.appendChild(card);
    }
}
