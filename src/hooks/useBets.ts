import { useSelector } from "react-redux";
import { betSlipSelector } from "../redux/selectors";

export const useBets = () => useSelector(betSlipSelector);
