class FooterElement extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    const footer = document.createElement("div");
    footer.style.display = "flex";
    footer.style.backgroundColor = "#71C9CE";
    footer.style.color = "white";
    footer.style.alignItems = "center";
    footer.style.fontSize = "20px";
    footer.style.justifyContent = "center";
    footer.style.height = "50px";
    footer.style.fontWeight = "bold";

    const paragraph = document.createElement("p");
    paragraph.textContent = "Copyright © 2024. Designed & Developed by rendi";

    footer.appendChild(paragraph);

    this.shadowRoot.appendChild(footer);
  }
}

customElements.define("footer-elements", FooterElement);
