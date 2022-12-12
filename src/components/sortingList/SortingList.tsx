import React from "react";
import { SORTING_OPTIONS } from "../../mocks";
import { List, styled } from "@mui/material";
import { SortingListItem } from "./sortingListItem";

const StyledList = styled(List)(({ theme }) => ({
  display: "flex",
  overflowX: "auto",
  width: "100%",
  maxWidth: 1536,
  marginTop: theme.spacing(2),
}));

export const SortingList = () => (
  <StyledList disablePadding>
    {SORTING_OPTIONS.map(({ id, title }) => (
      <SortingListItem key={id} title={title} />
    ))}
  </StyledList>
);
