import { Component } from "../../core/Component";
import template from "./button.template.hbs";

export class Button extends Component {
  constructor() {
    super();
    this.template = template();
    this.state = {
      caption: this.getAttribute("caption"),
      classname: this.getAttribute("class-name"),
    };
  }
}

customElements.define("ui-button", Button);
