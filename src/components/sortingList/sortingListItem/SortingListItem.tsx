import React from "react";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";

interface ISortingListItemProps {
  title: string;
}

export const SortingListItem = ({ title }: ISortingListItemProps) => (
  <ListItem disablePadding>
    <ListItemButton
      onClick={() => console.log(`You just sorted for: ${title}`)}
    >
      <ListItemText sx={{ whiteSpace: "noWrap", textAlign: "center" }}>
        {title}
      </ListItemText>
    </ListItemButton>
  </ListItem>
);
