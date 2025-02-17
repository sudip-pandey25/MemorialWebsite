"use client"; // Important for using Redux in Next.js

import { Provider } from "react-redux";
import store from "../../../redux/Store/Store";

const Providers = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
