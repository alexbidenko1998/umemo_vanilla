import { store } from "../../store";
import './redact.css';

class App extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<div class="redact__result">
  <span class="redact__result--success" hidden="hidden">Заметка успешно сохранена</span>
  <span class="redact__result--error" hidden="hidden">Проверьте правильность введенных данных</span>
</div>
<div class="redact">
  <div>
    <input placeholder="Название" class="redact__title" />
    <textarea class="redact__text" placeholder="Содержание"></textarea>
  </div>
  <div>
    <label>
      <input type="checkbox" class="redact__isTimeout"/>
      Время окончания
    </label>
    <div class="redact__timeoutSettings">
      <input type="datetime-local" class="redact__timeoutValue"/>
    </div>
  </div>
</div>
<button class="redact__add">Добавить</button>
  `;
    const [
      redactTitle,
      redactText,
      redactIsTimeout,
      redactTimeoutValue,
      redactAdd,
      redactTimeoutSettings,
    ] = [
      this.querySelector('.redact__title'),
      this.querySelector('.redact__text'),
      this.querySelector('.redact__isTimeout'),
      this.querySelector('.redact__timeoutValue'),
      this.querySelector('.redact__add'),
      this.querySelector('.redact__timeoutSettings'),
    ];
    const isValid = () => {
      return redactTitle.value
        && redactText.value
        && (
          !redactIsTimeout.checked
          || (redactTimeoutValue.value && typeof new Date(redactTimeoutValue.value).getTime() === 'number'));
    };
    redactAdd.addEventListener('click', () => {
      if (!isValid()) {
        this.changeMessage('.redact__result--error');
        return;
      }
      store.tasks = [ ...store.tasks, {
        id: new Date().getTime(),
        title: redactTitle.value,
        text: redactText.value,
        ...(redactIsTimeout.checked ? {
          timeout: new Date(redactTimeoutValue.value).getTime(),
        } : {})
      }];
      redactTitle.value = '';
      redactText.value = '';
      redactIsTimeout.checked = false;
      redactTimeoutValue.value = null;
      redactTimeoutSettings.classList.remove('redact__timeoutSettings--visible');
      this.changeMessage('.redact__result--success');
    });
    redactIsTimeout.addEventListener('change', () => {
      redactTimeoutSettings.classList.toggle('redact__timeoutSettings--visible');
    });
  }
  changeMessage(query) {
    const el = this.querySelector(query);
    el.style.display = 'block';
    setTimeout(() => {
      el.style.display = '';
    }, 3000);
  }
}

customElements.define('um-redact', App);
