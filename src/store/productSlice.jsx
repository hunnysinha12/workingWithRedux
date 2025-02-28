import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
  IDEL: "idle",
  ERROR: "erroe",
  LOADING: "loading",
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: "STATUSES.IDEL",
  },
  reducers: {
    // setProducts(state, action) {
    //   state.data = action.payload;
    // },
    // setStatus(state, action) {
    //   state.status = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDEL;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });
  },
});

export const { setProducts, setStatus } = productSlice.actions;

export default productSlice.reducer;

// Thunks : It is a middleware and in redux it is already configure

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
});

// export function fetchProducts() {
//   return async function fetchProductThunk(dispatch, getState) {
//     dispatch(setStatus(STATUSES.LOADING));
//     try {
//       const res = await fetch("https://fakestoreapi.com/products");
//       const data = await res.json();

//       dispatch(setProducts(data));
//       dispatch(setStatus(STATUSES.IDEL));
//     } catch (err) {
//       console.log(err);
//       dispatch(setStatus(STATUSES.ERROR));
//     }
//   };
// }
