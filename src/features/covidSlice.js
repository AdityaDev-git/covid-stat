import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDataWorld = createAsyncThunk("covid/fetchData", async () => {
  const response = await axios.get("https://covid-19.dataflowkit.com/v1/world");
  return response.data;
});

export const fetchDataCountry = createAsyncThunk(
  "covid/fetchByCountry",
  async (country, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://covid-19.dataflowkit.com/v1/${country}`
      );
      return response.data;
    } catch(error){
      return rejectWithValue(error.response.data);
    }
  }
);

const covidSlice = createSlice({
  name: "covid",
  initialState: {
    worldData: {},
    countryData: {},
    worldState: 'idle',
    countryState: 'idle',
    worldDataError: null,
    countryDataError: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataWorld.pending, (state) => {
        state.worldState = 'loading';
      })
      .addCase(fetchDataWorld.fulfilled, (state, action) => {
        state.worldState = 'succeeded';
        state.worldData = action.payload;
      })
      .addCase(fetchDataWorld.rejected, (state, action) => {
        state.worldState = 'failed';
        state.worldDataError = action.payload;
      })
      .addCase(fetchDataCountry.pending, (state) => {
        state.countryState = 'loading';
      })
      .addCase(fetchDataCountry.fulfilled, (state, action) => {
        state.countryState = 'succeeded';
        state.countryData = action.payload;
      })
      .addCase(fetchDataCountry.rejected, (state, action) => {
        state.countryState = 'failed';
        state.countryDataError = action.payload;
      });
  },
});

export default covidSlice.reducer;
