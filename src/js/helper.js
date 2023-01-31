import { DEV_API, PROD_API } from "./config";

export const getProduct = async function (id) {
  try {
    const res = await fetch(
      // `${DEV_API}/${id}`,
      `${PROD_API}/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const getSearchProducts = async function (query) {
  try {
    const res = await fetch(`${PROD_API}?search=${query}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};
