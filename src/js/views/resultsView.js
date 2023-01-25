import searchView from "./searchView";
import icons from "url:../../img/icons.svg";
import View from "./view";

class ResultsView extends View {
  _parentEl = document.querySelector(".results__preview");
  _data;

  render(data) {
    this._data = data;
    this._clearMarkup();
    this._parentEl.insertAdjacentHTML(
      "afterbegin",
      this._data.map((result) => searchView._generateMarkup(result)).join("")
    );
  }

  renderResultsContainer() {
    this._parentEl.parentElement.classList.add("u-display-grid");
  }

  // _generateContainerMarkup() {
  //   return `
  //     <div class="results grid__results u-margin-bottom-medium">
  //     <div class="results__preview"></div>
  //     <div class="results__view"></div>
  //     </div>
  //   `;
  // }
}

export default new ResultsView();
