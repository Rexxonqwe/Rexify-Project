import "core-js/stable";
import "regenerator-runtime/runtime";

import * as model from "./model.js";
import productsView from "./views/productsView.js";
import searchView from "./views/searchView.js";
import resultsView from "./views/resultsView.js";

const controlProduct = async function () {
  const id = window.location.hash.slice(1);
  if (!id) return;

  productsView.displayProductView();

  productsView.renderSpinner();

  await model.loadProductData(id);

  productsView.render(model.state.product);

  productsView.hideContainer();
};

const controlSearchResults = async function () {
  resultsView.renderResultsContainer();

  resultsView.renderSpinner();

  const query = searchView.getQuery();

  await model.searchProduct(query);

  resultsView.render(model.state.search.results);
};

const controlChangeImg = async function (imgSrc) {
  productsView.renderNewImage(imgSrc);
};

const newFeature = function () {
  console.log("Welcome to NEW application!");
};
const init = function () {
  productsView.addHandler(controlProduct);
  searchView.addHandlerSearch(controlSearchResults);
  productsView.addHandlerChangeImg(controlChangeImg);
  newFeature();
};

init();
