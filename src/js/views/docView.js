class DocumentsView {
  _resultsHeader = document.querySelector(".heading-primary");
  _data;

  displayElement(data) {
    this._data = data;
    this._resultsHeader.classList.add("u-display");
    this._resultsHeader.innerHTML = `Search results for ${this._data}`;
  }
}

export default new DocumentsView();
