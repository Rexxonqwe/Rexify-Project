import icons from "url:../../img/icons.svg";
import View from "./view.js";

class ProductsView extends View {
  _parentEl = document.querySelector(".results__view");
  _imgSrc;
  _data;

  addHandler(handler) {
    ["hashchange", "load"].forEach((ev) =>
      window.addEventListener(ev, handler)
    );
  }

  _removeActiveClassToImage() {
    const imgBtns = this._parentEl.querySelectorAll(
      ".results__view--image-btn"
    );
    imgBtns.forEach((img) =>
      img.parentElement.classList.remove("u-imgBtn--active")
    );
  }

  addHandlerChangeImg(handler) {
    this._parentEl?.addEventListener("click", (e) => {
      const imgBtn = e.target.closest(".results__view--image-btn");
      if (!imgBtn) return;
      this._removeActiveClassToImage();
      imgBtn.parentElement.classList.add("u-imgBtn--active");
      handler(imgBtn.getAttribute("src"));
    });
  }

  renderNewImage(src) {
    this._imgSrc = src;
    const imgMarkup = this._generateImgMarkup();
    const imageBox = this._parentEl.querySelector(".results__view--image-box");

    imageBox.innerHTML = "";
    imageBox.insertAdjacentHTML("afterbegin", imgMarkup);
  }

  displayProductView() {
    this._parentEl.classList.add("u-display");
  }

  hideContainer() {
    this._parentEl.addEventListener("click", (e) => {
      const backBtn = e.target.closest(".icon--back");
      if (!backBtn) return;
      window.location.hash = "";
      this._parentEl.classList.remove("u-display");
    });
  }

  _generateImgMarkup() {
    return `
          <img
          class="results__view--image"
          src="${this._imgSrc}"
          alt=""
          />
    `;
  }

  _generateMarkup() {
    return `
    <div class="results__view__header">
        <div class="icon--back">
          <svg>
            <use href="${icons}#icon-arrow-left"></use>
          </svg>
        </div>
        <h1 class="heading-primary results__view__header--brand">
        ${this._data.brand}
        </h1>
        <h2 class="heading-secondary results__view__header--title">
        ${this._data.title}
        </h2>
    </div>
    <div class="grid__view">
        <!-- IMAGE BTN -->
        <div class="grid__view--images">
        <div class="flex__view">
            ${this._data.image
              .map(
                (img, i) => `
              <div class="u-flex-center ${i === 0 ? "u-imgBtn--active" : ""}">
                <img class="results__view--image-btn"
                data-img="${i}"
                src="${img}"
                alt=""
                />
              </div>

            `
              )
              .join("")}
        </div>

        <!-- IMAGE  -->
        <div class="results__view--image-box u-flex-center">
            <img
            class="results__view--image"
            src="${this._data.image[0]}"
            alt=""
            />
        </div>
        </div>

        <!-- PRODUCT DEATAILS -->
        <div>
        <div class="product__detail--view">
            <p class="product__brand--view">${this._data.brand}</p>
            <p class="product__title--view">
            ${this._data.title}
            </p>
            <p class="product__price--view">&#8377; ${this._data.price}</p>
            <div class="product__rating">
            <div class="product__rating--rate">${
              this._data.rating.rate
            } ⭐</div>
            <p class="product__rating--review">
                ${this._data.rating.ratings} ratings and ${
      this._data.rating.reviews
    } reviews
            </p>
            </div>
            <!-- SIZE  -->
            <div class="product__size grid__size">
            <p class="product__size--tag">Size:</p>
            <div class="product__size-box grid__size-box">
                <div class="product__size-box--sizes u-flex-center">S</div>
                <div class="product__size-box--sizes u-flex-center">M</div>
                <div class="product__size-box--sizes u-flex-center">L</div>
                <div class="product__size-box--sizes u-flex-center">XL</div>
                <div class="product__size-box--sizes u-flex-center">
                XXL
                </div>
            </div>
            </div>

            <!-- COLOR  -->
            <div class="product__color grid__color">
            <p class="product__color--tag">Color:</p>
            <div class="product__color--label" style="background-color : ${
              this._data.color
            }"></div>
            </div>

            <!-- FIBERIC -->
            <div class="product__fabric grid__fabric">
            <p class="product__fabric--tag">Fabric:</p>
            <div class="product__fabric--content">${this._data.fabric}</div>
            </div>

            <!-- BUYNOW BTN  -->
            <button class="btn-primary product__buynow--btn">
            ⚡ buy now
            </button>
            <button class="btn-primary product__addToCart--btn">
            <i class="fa fa-shopping-cart"></i>
            add to cart
            </button>
        </div>
        </div>
    </div>
    <div class="results__view--footer">
        <div class="grid__footer--ratings">
        <h2 class="heading-secondary">Ratings & Reviews</h2>
        <div class="product__rating--footer">
            <div class="product__rating--rate">${
              this._data.rating.rate
            } ⭐</div>
            <p class="product__rating--review">
            ${this._data.rating.ratings} ratings and ${
      this._data.rating.reviews
    } reviews
            </p>
        </div>
        <button class="btn-primary results__view-rating-btn">Rate</button>
        </div>
        <div class="u-flex-center u-padding-all-side-medium">
        <button class="results__view-whishlist-btn">
            Add to whishlist
        </button>
        </div>
    </div>
    `;
  }
}

export default new ProductsView();
