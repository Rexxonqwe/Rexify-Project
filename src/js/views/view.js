import icons from "url:../../img/icons.svg";

export default class View {
  _data;

  render(data) {
    this._data = data;
    this._clearMarkup();
    const html = this._generateMarkup();
    this._parentEl.insertAdjacentHTML("afterbegin", html);
  }

  _clearMarkup() {
    this._parentEl.innerHTML = "";
  }

  renderSpinner() {
    const spinner = `
      <div class="spinner">
        <svg>
          <use href="${icons}#icon-loader"></use>
        </svg>
      </div>
    `;
    this._clearMarkup();
    this._parentEl.insertAdjacentHTML("afterbegin", spinner);
  }
}
