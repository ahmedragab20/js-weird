const template = document.createElement("template");

const style = `
  <style>
    :host {
      display: block;
      font-family: sans-serif;
      background: #CEDEBD;
      padding: 1rem;
      border-radius: 0.5rem;
    }

    button {
      font-family: inherit;
      font-size: 1rem;
      padding: 0.75rem 1rem;
      border: 0;
      border-radius: 0.75rem;
      cursor: pointer;
      background: #435334;
      color: white;
      transition: background 0.3s ease-in-out;
      box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
    }
    
    button:hover {
      background: #4E5E41;
    }
  </style>
`;

const html = `
  <button>
    <slot>
      <!--- Default text if no slot is provided --->
    </slot>
  </button>
`;

template.innerHTML = `
  ${style}
  ${html}
`;

class customElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  static get observedAttributes() {
    return ["color"];
  }

  get color() {
    return this.getAttribute("color");
  }

  set color(value) {
    if (!value || typeof value !== "string") {
      throw new Error("Invalid value for color");
    }

    this.setAttribute("color", value);
  }

  connectedCallback() {
    console.log("connectedCallback");
    this.button = this.shadowRoot.querySelector("button");
    this.button.style.background = `#${this.color}`;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.group("attributeChangedCallback");
    console.log("name", name);
    console.log("oldValue", oldValue);
    console.log("newValue", newValue);
    console.groupEnd();
    if (oldValue === newValue) {
      return;
    }

    if (name === "color" && this.button) {
      this.button.style.background = `#${newValue}`;
    }
  }
}

customElements.define("custom-element", customElement);
