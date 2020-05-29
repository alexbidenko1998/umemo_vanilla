import './task.css';
import {store} from "../../store";

class App extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<div class="task">
  <button class="taskDelete">Удалить</button>
  <h4 class="taskTitle">${this.dataset.title}</h4>
  <p class="taskTest">${this.dataset.text}</p>
</div>
  `;
    this.querySelector('.taskDelete').addEventListener('click', () => {
      store.tasks = store.tasks.filter(el => el.id !== +this.dataset.id);
    });
  }
}

customElements.define('um-task', App);
