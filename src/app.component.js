import { Component } from "./core/Component";
import template from "./app.template.hbs";

export class App extends Component {
  constructor() {
    super();
    this.template = template();
    this.state = {
      name: "al",
      last: "KK",
    };
  }
}

customElements.define("my-app", App);