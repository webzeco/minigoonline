import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import { createSelector } from "reselect";
import { apiCallBegan } from "../api";
import { paginate } from "../../utils/paginate";
import { sortBy } from "../../utils/sort";
import { filterByPrice } from "../../utils/filter";
const slice = createSlice({
  name: "products",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
    category: "",
    categoryProducts: [],
    filtered: [],
    pagination: {
      currentPage: 1,
      itemsCount: 0,
      pageSize: 2,
    },
    sort: "sort",
    priceFilter:"All"
  },
  reducers: {
    productsRequested: (products, action) => {
      products.loading = true;
    },
    productsReceived: (products, action) => {
      products.list = action.payload;
      products.loading = false;
      products.lastFetch = Date.now();
      products.categoryProducts = action.payload;
    },
    productsRequestFailed: (products, action) => {
      products.loading = false;
      // alert(action.payload);
    },
    categoryProductsAdded: (products, action) => {
      if (action.payload.split("/")[0] === "bestSellers") {
        products.categoryProducts = products.list.filter(
          (prod) => prod.bestSeller
        );
        products.pagination.itemsCount = products.categoryProducts?.length;
        products.pagination.currentPage=1;
        products.sort="sort";
        products.filtered="price";
        products.filtered = paginate(
          products.categoryProducts,
          products.pagination.currentPage,
          products.pagination.pageSize
        );
      } else if (action.payload.split("/")[0] === "sale") {
        products.categoryProducts = products.list.filter((prod) => prod.onSale);
        products.pagination.itemsCount = products.categoryProducts?.length;
        products.pagination.currentPage=1;
        products.sort="sort";
        products.filtered="price";
        products.filtered = paginate(
          products.categoryProducts,
          products.pagination.currentPage,
          products.pagination.pageSize
        );
      } else {
        products.categoryProducts = products.list.filter(
          (prod) => prod.category === action.payload
        );
        products.pagination.itemsCount = products.categoryProducts?.length;
        products.pagination.currentPage=1;
        products.sort="sort";
        products.filtered="price";
        products.filtered = paginate(
          products.categoryProducts,
          products.pagination.currentPage,
          products.pagination.pageSize
        );
      }
    },
    pageChanged: (products, action) => {
      products.pagination.currentPage = action.payload;
      products.filtered = paginate(
        products.categoryProducts,
        products.pagination.currentPage,
        products.pagination.pageSize
      );
    },
    productsSorted: (products, action) => {
      products.sort = action.payload;
      products.categoryProducts = sortBy(products.categoryProducts, products.sort);
      products.filtered = paginate(
        products.categoryProducts,
        products.pagination.currentPage,
        products.pagination.pageSize
      );
    },
    priceFiltered: (products, action) => {
      products.priceFilter = action.payload;
      products.categoryProducts = products.list.filter(
        (prod) => prod.bestSeller
      );
      products.categoryProducts = filterByPrice(products.categoryProducts, products.priceFilter);
      products.pagination.itemsCount = products.categoryProducts?.length;
      products.pagination.currentPage=1;
      products.filtered = paginate(
        products.categoryProducts,
        products.pagination.currentPage,
        products.pagination.pageSize
      );
    },
  },
});
const {
  productsReceived,
  productsRequested,
  productsRequestFailed,
  categoryProductsAdded,
  pageChanged,
  productsSorted,
  priceFiltered
} = slice.actions;
export default slice.reducer;

// Action Creators
const url = "/product/allProducts";
// get all products in apiCallBegan  middleware request
export const loadProducts = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.products;
  const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
  if (diffInMinutes < 10) return;
  dispatch(
    apiCallBegan({
      url,
      onStart: productsRequested.type,
      onSuccess: productsReceived.type,
      onError: productsRequestFailed.type,
    })
  );
};
export const addCategoryProducts = (category) => (dispatch, getState) => {
  dispatch(categoryProductsAdded(category));
};

export const changePage = (page) => (dispatch, getState) => {
  dispatch(pageChanged(page));
};
export const sortProducts = (path) => (dispatch, getState) => {
  dispatch(productsSorted(path));
};
export const filterPrice = (path) => (dispatch, getState) => {
  dispatch(priceFiltered(path));
};

// Selector

export const getAllProductsSelector = createSelector(
  (state) => state.entities.products.list,
  (list) => list
);
export const getCategoryProductsSelector = createSelector(
  (state) => state.entities.products.categoryProducts,
  (categoryProducts) => categoryProducts
);
// export const getProductsWithCategorySelector = (category) =>
//   createSelector(
//     (state) => state.entities.products.list,
//     (list) => list.filter((product) => product.category === category)
//   );
