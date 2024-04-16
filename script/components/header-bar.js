class HeaderBar extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    const nav = document.createElement("nav");

    const title = document.createElement("h1");
    title.textContent = "My Notes APPS";

    nav.appendChild(title);

    this.shadowRoot.appendChild(nav);
  }
}

customElements.define("header-bar", HeaderBar);
