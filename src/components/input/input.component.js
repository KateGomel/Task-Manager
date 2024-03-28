import { Component } from "../../core/Component";
import template from "./input.template.hbs";

export class Input extends Component {
  constructor() {
    super();

    this.template = template();
    this.state = {
      label: this.getAttribute("label"),
      name: this.getAttribute("name"),
      type: this.getAttribute("type") ?? "text",
      placeholder: this.getAttribute("placeholder") ?? "",
      value: this.getAttribute("value") ?? "",
    };
  }
}

customElements.define("ui-input", Input);
