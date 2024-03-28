import { Component } from "../../core/Component";
import template from "./sing-in.template.hbs";
import { ROUTES } from "../../constants/routes";
import "../../components/input/input.component";
import "../../components/button/button.component";

export class SingIp extends Component {
  constructor() {
    super();
    this.template = template({
      routes: ROUTES,
    });
  }
}

customElements.define("sing-in", SingIp);
