import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  navItems: [
    'Existing Inventory',
    'Used Inventory',
    'Trade-in',
    'Cybertruck',
    'Roadaster',
    'Shop',
    'Tesla Account'
  ],
}
const navItemSlice = createSlice({
  name: 'navItem',
  initialState,
  reducers: {},
});

export const selectNavItems = state => state.navItem.navItems;

export default navItemSlice.reducer;