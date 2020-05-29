import './app.css';

class App extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<main class="app">
  <h2>Umemo Vanilla</h2>
  <um-redact></um-redact>
  <um-list></um-list>
</main>
  `;
  }
}

customElements.define('um-app', App);
