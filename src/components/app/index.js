import './app.css';
import {store} from "../../store";

class App extends HTMLElement {
  connectedCallback() {
    store.tasks = store.tasks.filter(el => !el.timeout || el.timeout > new Date().getTime());
    this.innerHTML = `
<main class="app">
  <h1>UMemo Vanilla</h1>
  <um-redact></um-redact>
  <hr />
  <um-list></um-list>
</main>
  `;
  }
}

customElements.define('um-app', App);
