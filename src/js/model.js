import { getProduct, getSearchProducts } from "./helper.js";

export const state = {
  product: {},
  search: {
    query: "",
    results: [],
  },
};

export const loadProductData = async function (id) {
  try {
    const product = await getProduct(id);
    state.product = product.data;
    console.log(state);
  } catch (err) {
    console.error(err);
  }
};

export const searchProduct = async function (query) {
  try {
    const searchResults = await getSearchProducts(query);
    state.search.results = searchResults.data;
    // console.log(state.search);
  } catch (err) {
    console.error(err);
  }
};
