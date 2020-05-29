class UMemo extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<um-app>
  `;
  }
}

customElements.define('umemo-application', UMemo);

document.body.appendChild(document.createElement('umemo-application'));
