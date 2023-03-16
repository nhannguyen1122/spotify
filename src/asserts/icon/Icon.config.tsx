import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import AddBoxTwoToneIcon from "@mui/icons-material/AddBoxTwoTone";
import DownloadForOfflineOutlinedIcon from "@mui/icons-material/DownloadForOfflineOutlined";
export type IconType =
  | "home"
  | "search"
  | "playCircle"
  | "heart"
  | "library"
  | "add"
  | "download";

const iconMap: {
  [key: string]: JSX.Element;
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
  download: <DownloadForOfflineOutlinedIcon fontSize="inherit" />,
};

export default iconMap;
