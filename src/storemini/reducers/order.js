import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
import { createSelector } from "reselect";
import { apiCallBegan } from "../api";

const slice = createSlice({
  name: "orders",
  initialState: {
    list: [
      // { estimatedProcessingTime , selectedVariants, customWriting   , customDate ,qty,product }
    ],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    ordersRequested: (orders, action) => {
      orders.loading = true;
    },
    ordersReceived: (orders, action) => {
      orders.list = action.payload;
      orders.loading = false;
      orders.lastFetch = Date.now();
    },
    ordersRequestFailed: (orders, action) => {
      orders.loading = false;
    },
    orderAdded: (reviews, action) => {
      reviews.list.push(action.payload);
    },
  },
});

const { ordersReceived, ordersRequested, orderAdded, ordersRequestFailed } =
  slice.actions;
export default slice.reducer;

// Action Creators
const url = "/order";

export const loadOrders = () => (dispatch, getState) => {
  // const { lastFetch } = getState().entities.orders;
  // const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
  // if (diffInMinutes < 10) return;
  dispatch(
    apiCallBegan({
      url: `${url}/userOrders`,
      onStart: ordersRequested.type,
      onSuccess: ordersReceived.type,
      onError: ordersRequestFailed.type,
    })
  );
};

export const addOrder = (order, payment, user) => (dispatch, getState) => {
  dispatch(
    apiCallBegan({
      url: `${url}/addOrder`,
      method: "post",
      data: { order, payment, user },
      successMessage:
        "Order added successfully !!! check your mail for further detail!!!",
      errorMessage: "Order not added Something went Wrong",
      onSuccess: orderAdded.type,
      onError: ordersRequestFailed.type,
    })
  );
};

// Selector
export const getOrdersByUserSelector = createSelector(
  (state) => state.entities.orders.list,
  (orders) => orders
);
export const getLoadingSelector = createSelector(
  (state) => state.entities.orders.loading,
  (loading) => loading
);

// export const getOrdersByUser = (userId) =>
//   createSelector(
//     (state) => state.entities.orders.list,
//     (orders) => orders.filter((item) => item.userId === userId)
//   );
