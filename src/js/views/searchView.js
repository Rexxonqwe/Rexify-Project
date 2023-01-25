import View from "./view";
class SearchView extends View {
  _parentEl = document.querySelector(".search");
  _data;

  getQuery() {
    const query = document.querySelector(".search__input").value;
    document.querySelector(".search__input").value = "";
    return query;
  }

  _generateMarkup(data) {
    this._data = data;
    return `
        <a class="product" href="#${this._data._id}">
                <div class="product__card--preview grid__preview">
                <div class="product__image--preview-box u-flex-center">
                    <img
                    class="product__image--preview"
                    src="${this._data.image[0]}"
                    alt="${this._data.title}"
                    />
                </div>
                <div class="product__detail--preview">
                    <p class="product__brand--preview">${this._data.brand}</p>
                    <p class="product__title--preview">
                    ${this._data.title}
                    </p>
                    <p class="product__price--preview">&#8377;${this._data.price}</p>

                    <div class="product__rating--preview">
                    <div class="product__rating--rate">${this._data.rating.rate} ⭐</div>
                    <p class="product__rating--preview--review">
                        ${this._data.rating.ratings} ratings and ${this._data.rating.reviews} reviews
                    </p>
                    </div>
                </div>
                </div>
        </a>
    `;
  }

  addHandlerSearch(handler) {
    this._parentEl.addEventListener("submit", (e) => {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
