import { useSelector } from "react-redux";
import { builderWagerSelector } from "../redux/selectors";

export const useBuilderWager = () => useSelector(builderWagerSelector);
