import { Component } from "../../core/Component";
import template from "./sign-up.template.hbs";
import { ROUTES } from "../../constants/routes";

import "../../components/input/input.component";
import "../../components/button/button.component";
import "../../components/loader/loader.component";

export class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
    };

    this.template = template({
      routes: ROUTES,
    });
  }
}

customElements.define("sign-up-page", SignUp);
