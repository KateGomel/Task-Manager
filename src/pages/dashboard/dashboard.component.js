import { Component } from "../../core/Component";
import template from "./dashboard.template.hbs";
import { apiService } from "../../services/Api";
import { useUserStore } from "../../hooks/useUserStore";

export class Dashboard extends Component {
  constructor() {
    super();

    this.template = template();

    this.state = {
      isLoading: false,
      user: null,
      boars: [],
    };
  }

  openCreateBoartModal() {}

  openDeleteBoardModal() {}

  get() {}

  onClick = ({ target }) => {
    if (target.closest(".create-board")) {
      this.openCreateBoartModal;
    }
    if (target.closest(".delete-board")) {
      this.openDeleteBoardModal();
    }
  };

  setUser() {
    const { getUser } = useUserStore();
    this.setState({ ...this.state, user: getUser() });
  }

  componentDidMount() {
    this.setState();
    this.addEventListener("click", this.onClick);
  }

  componentWillUnmount() {
    this.removeEventListener("click", this.onClick);
  }
}

customElements.define("dashboard-page", Dashboard);
