import { Component } from "../../core/Component";
import template from "./board.template.hbs";
import { useUserStore } from "../../hooks/useUserStore";
import { INITIAL_STATE } from "./initialState";
import { ROUTES } from "../../constants/routes";
import { useNavigate } from "../../hooks/useNavigate";
import { useModal } from "../../hooks/useModal";

export class BoardPage extends Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;
    this.template = template();
  }

  initialization() {
    const { getUser } = useUserStore();
    this.setState({
      ...this.state,
      boardId: this.getAttribute("id"),
      user: getUser(),
    });
  }

  openCreateTaskModal = () => {
    useModal({
      isOpen: true,
      title: "Create Task",
      successCaption: "Create",
      template: "ui-create-task-form",
      onSuccess: () => {
        console.log("Success!!!");
      },
    });
  };

  onClick = (evt) => {
    if (evt.target.closest(".go-to-dashboard")) {
      useNavigate(ROUTES.dashboard);
    }
    if (evt.target.closest(".create-task-btn")) {
      this.openCreateTaskModal();
    }
  };

  componentDidMount() {
    this.initialization();
    this.addEventListener("click", this.onClick);
  }

  componentWillUnmount() {
    this.removeEventListener("click", this.onClick);
  }
}

customElements.define("board-page", BoardPage);
