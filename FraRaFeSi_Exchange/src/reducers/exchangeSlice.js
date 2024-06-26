import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cryptoReceived: 0,
  cryptoData: [],
  spentAmount: 0,
  filteredCryptoData: [],
  selectedCrypto: null,
  searchTerm: "",
  error: null,
  selectedCryptoSell: null,
};

export const exchangeSlice = createSlice({
  name: "exchange",
  initialState,
  reducers: {
    setCryptoReceived: (state, action) => {
      state.cryptoReceived = action.payload;
    },
    setSpentAmount: (state, action) => {
      state.spentAmount = action.payload;
    },
    setCryptoData: (state, action) => {
      state.cryptoData = action.payload;
    },
    setFilteredCryptoData: (state, action) => {
      state.filteredCryptoData = action.payload;
    },
    setSelectedCrypto: (state, action) => {
      state.selectedCrypto = action.payload;
    },
    setSelectedCryptoSell: (state, action) => {
      state.selectedCryptoSell = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setCryptoReceived,
  setSpentAmount,
  setCryptoData,
  setFilteredCryptoData,
  setSelectedCrypto,
  setSearchTerm,
  setError,
  setSelectedCryptoSell,
} = exchangeSlice.actions;

export default exchangeSlice.reducer;
