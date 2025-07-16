import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

export const store = configureStore({

})

export const useAppDispatch = () => useDispatch()