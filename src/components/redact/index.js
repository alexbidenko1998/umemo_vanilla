import { store } from "../../store";

class App extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<input placeholder="Название" class="redactTitle" />
<br />
<textarea class="redactText" placeholder="Содержание"></textarea>
<br />
<button class="redactAdd">Добавить</button>
  `;
    this.querySelector('.redactAdd').addEventListener('click', () => {
      store.tasks = [ ...store.tasks, {
        id: new Date().getTime(),
        title: this.querySelector('.redactTitle').value,
        text: this.querySelector('.redactText').value
      }];
      this.querySelector('.redactTitle').value = '';
      this.querySelector('.redactText').value = '';
    });
  }
}

customElements.define('um-redact', App);
