import { Component } from "../../core/Component";
import template from "./board.template.hbs";
import { useUserStore } from "../../hooks/useUserStore";

export class BoardPage extends Component {
  constructor() {
    super();
    this.state = {
      boardId: null,
      user: null,
      isLoading: false,
    };

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
}

customElements.define("board-page", BoardPage);
