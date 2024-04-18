import { TASK_PRIORITY, TASK_TYPE } from "../../constants/task";
import { Component } from "../../core/Component";
import { eventEmitter } from "../../core/EventEmitter";
import template from "./create-task-form.template.hbs";

export class CreateTasForm extends Component {
  constructor() {
    super();

    this.state = {};
    this.template = template({ type: TASK_TYPE, priority: TASK_PRIORITY });
  }

  componentDidMount() {}

  componentWillUnmount() {}
}

customElements.define("ui-create-task-form", CreateTasForm);
