import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface CartState {
  ids: number[];
}

const initialState: CartState = {
  ids: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggle: (state, action: PayloadAction<number>) => {
      const id = state.ids.indexOf(action.payload);
      if (state.ids.length === 0 || id === -1) {
        state.ids.push(action.payload);
      } else {
        state.ids.splice(id, 1);
      }
    },
  },
});

export const { toggle } = cartSlice.actions;

export const selectCount = (state: RootState) => state.cart.ids.length;
export const selectIds = (state: RootState) => state.cart.ids;

export default cartSlice.reducer;
