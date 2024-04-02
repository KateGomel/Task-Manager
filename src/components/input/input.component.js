import { Component } from "../../core/Component";
import template from "./input.template.hbs";

export class Input extends Component {
  constructor() {
    super();

    this.template = template();
    this.state = {
      type: this.getAttribute("type") ?? "text",
      value: this.getAttribute("value") ?? "",
      placeholder: this.getAttribute("placeholder") ?? "",
      label: this.getAttribute("label"),
      name: this.getAttribute("name"),
      className: this.getAttribute("class-name"),
    };
  }
}

customElements.define("ui-input", Input);
