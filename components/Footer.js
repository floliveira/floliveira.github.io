class Footer extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <footer class="footer is-100">
      <div class="mail-me">
        <a href="javascript:alert('JavaScript')" onclick="this.href=atob('bWFpbHRvOmZlbGlwZS5sZW1tb3MlNDBpY2xvdWQuY29t'); return true">
        //<a href="mailto:felipe.lemmos@icloud.com">
          <i class='bx bx-envelope'></i>
        </a>
      </div>
      <span class="footer-copy">&#169; All rights and lefts reserved. 2021.</span>
    </footer>
    `;
  }
}

customElements.define('main-footer', Footer);


