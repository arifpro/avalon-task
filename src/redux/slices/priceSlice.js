import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    animation: "fadeInLeft",
    title: "Students",
    number: "FREE",
    month: "",
    content: [
      "list item 1 students",
      "list item 2 students",
      "list item 3 students",
      "list item 4 students",
      "list item 5 students",
      "list item 6 students",
    ],
  },
  {
    id: 2,
    animation: "zoomIn",
    title: "Small",
    number: "$10",
    month: "per month",
    content: [
      "list item 1 small",
      "list item 2 small",
      "list item 3 small",
      "list item 4 small",
      "list item 5 small",
      "list item 6 small",
    ],
  },
  {
    id: 3,
    animation: "zoomIn",
    title: "Standard",
    number: "$50",
    month: "per month",
    content: [
      "list item 1 standard",
      "list item 2 standard",
      "list item 3 standard",
      "list item 4 standard",
      "list item 5 standard",
      "list item 6 standard",
    ],
  },
];

export const priceSlice = createSlice({
  name: "price",
  initialState,
  reducers: {},
});

export const actions = priceSlice.actions;

export default priceSlice.reducer;
