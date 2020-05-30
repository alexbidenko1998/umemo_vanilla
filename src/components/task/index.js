import './task.css';
import {store} from "../../store";

class App extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<div class="task">
  <button class="task__delete">Удалить</button>
  <h2 class="task__title">${this.dataset.title}</h2>
  <p class="task__text">${this.dataset.text}</p>
  ${this.timeout()}
</div>
  `;
    this.querySelector('.task__delete').addEventListener('click', () => {
      store.tasks = store.tasks.filter(el => el.id !== +this.dataset.id);
    });
  }
  timeout() {
    if (this.dataset.timeout) {
      const date = new Date(+this.dataset.timeout);
      return `
        <div>
          <hr />
        </div>
        <span>Время окончания:
          ${date.getFullYear()}.${date.getMonth()}.${date.getDate()}
          ${date.getHours()}:${date.getMinutes()}
        </span>
      `
    } else return '';
  }
}

customElements.define('um-task', App);
