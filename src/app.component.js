import { Component } from "./core/Component";
import template from "./app.template.hbs";

export class App extends Component {
  constructor() {
    super();
    this.template = template();
    this.state = {
      name: "al",
      last: "KK",
      count: 0,
    };
  }

  increment = (evt) => {
    if (evt.target.closest(".plus")) {
      this.setState({
        ...this.state,
        count: this.state.count + 1,
      });
    }
  };

  decrement = (evt) => {
    if (evt.target.closest(".minus")) {
      this.setState({
        ...this.state,
        count: this.state.count - 1,
      });
    }
  };

  componentDidMount() {
    this.addEventListener("click", this.increment);
    this.addEventListener("click", this.decrement);
  }

  componentWillUnmount() {
    this.removeEventListener("click", this.increment);
    this.removeEventListener("click", this.decrement);
  }
}

customElements.define("my-app", App);
