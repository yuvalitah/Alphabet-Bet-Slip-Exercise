import { useSelector } from "react-redux";
import { betBuilderWagerSelector } from "../redux/selectors";

export const useBetBuilderWager = () => useSelector(betBuilderWagerSelector);
