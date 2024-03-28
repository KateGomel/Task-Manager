import { Component } from "../../core/Component";
import template from "./sing-in.template.hbs";

export class SingIp extends Component {
  constructor() {
    super();
    this.template = template();
  }
}

customElements.define("sing-in", SingIp);
