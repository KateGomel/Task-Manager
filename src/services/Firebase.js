import { initializeApp } from "firebase/app";

export class Firebase {
  constructor() {
    this._app = initializeApp({
      apiKey: import.meta.env.VITE_API_KEY,
      authDomain: "task-manager-7c59c.firebaseapp.com",
      projectId: "task-manager-7c59c",
      storageBucket: "task-manager-7c59c.appspot.com",
      messagingSenderId: "609245358669",
      appId: "1:609245358669:web:0e1841e8c03bdd6f30ca04",
    });
  }

  get app() {
    return this._app;
  }
}
export const firebaseService = new Firebase();
