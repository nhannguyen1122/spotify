import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import AddBoxTwoToneIcon from "@mui/icons-material/AddBoxTwoTone";
export type IconType =
  | "home"
  | "search"
  | "playCircle"
  | "heart"
  | "library"
  | "add";

const iconMap: {
  [key: string]: any;
} = {
  /**
   * This will be improve later
   */
  home: <HomeIcon fontSize="inherit" />,
  playCircle: <PlayCircleIcon fontSize="inherit" />,
  search: <SearchIcon fontSize="inherit" />,
  heart: <FavoriteBorderIcon fontSize="inherit" />,
  library: <LocalLibraryIcon fontSize="inherit" />,
  add: <AddBoxTwoToneIcon fontSize="inherit" />,
};

export default iconMap;
