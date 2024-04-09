import template from "./create-board-form.template.hbs";
import { Component } from "../../core/Component";

export class CreateBoardForm extends Component {
  constructor() {
    super();

    this.state = {};
    this.template = template();
  }
}
customElements.define("ui-create-board-form", CreateBoardForm);
