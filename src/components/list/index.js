import './list.css';
import { store, setters } from "../../store";

class List extends HTMLElement {
  connectedCallback() {
    this.render();
    setters.tasks.app = () => {
      this.render();
    };
  }
  list() {
    return store.tasks.map(item => `
<um-task
    data-title="${item.title}"
    data-text="${item.text}"
    data-id="${item.id}"
    data-timeout="${item.timeout || ''}"
></um-task>
`).join('');
  }
  render() {
    this.innerHTML = `
<section class="list">
  ${this.list()}
</section>
  `;
  }
}

customElements.define('um-list', List);
