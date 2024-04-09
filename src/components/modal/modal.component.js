import { EVENT_TYPES } from "../../constants/eventTypes";
import { Component } from "../../core/Component";
import { eventEmitter } from "../../core/EventEmitter";
import template from "./modal.template.hbs";

export class ModaL extends Component {
  constructor() {
    super();
    this.template = template();
    this.state = {
      isOpen: false,
      title: "Modal",
      successCaption: "Success",
      rejectCaption: "Reject",
      confirmation: null,
      template: null,
      onSuccess: null,
      onReject: null,
    };
  }

  modalHandler = ({ detail }) => {
    this.setState({
      ...this.state,
      isOpen: detail.isOpen,
    });
  };

  componentDidMount() {
    eventEmitter.on(EVENT_TYPES.modal, this.modalHandler);
  }

  componentWillUnmount() {
    eventEmitter.off(EVENT_TYPES.modal, this.modalHandler);
  }
}
customElements.define("ui-modal", ModaL);
