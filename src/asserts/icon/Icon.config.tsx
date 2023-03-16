import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import AddBoxTwoToneIcon from "@mui/icons-material/AddBoxTwoTone";
import DownloadForOfflineOutlinedIcon from "@mui/icons-material/DownloadForOfflineOutlined";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import ImagePip from "@/asserts/svg/pip-togle.svg";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import LoopIcon from "@mui/icons-material/Loop";
import MicIcon from "@mui/icons-material/Mic";
import ReorderIcon from "@mui/icons-material/Reorder";
import CastConnectedIcon from "@mui/icons-material/CastConnected";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";

export type IconType =
  | "home"
  | "search"
  | "playCircle"
  | "heart"
  | "library"
  | "add"
  | "download"
  | "pip"
  | "shuffle"
  | "inShuffle"
  | "previous"
  | "next"
  | "pause"
  | "play"
  | "loop"
  | "mic"
  | "wait-list"
  | "connect-other"
  | "vol-down"
  | "vol-up";

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
  pip: <PermMediaIcon fontSize="inherit" />,
  shuffle: <ShuffleIcon fontSize="inherit" />,
  inShuffle: <PermMediaIcon fontSize="inherit" />,
  previous: <SkipPreviousIcon fontSize="inherit" />,
  next: <SkipNextIcon fontSize="inherit" />,
  pause: <PermMediaIcon fontSize="inherit" />,
  play: <PlayCircleFilledWhiteIcon fontSize="inherit" />,
  loop: <LoopIcon fontSize="inherit" />,
  mic: <MicIcon fontSize="inherit" />,
  "wait-list": <ReorderIcon fontSize="inherit" />,
  "connect-other": <CastConnectedIcon fontSize="inherit" />,
  "vol-down": <VolumeDown fontSize="inherit" />,
  "vol-up": <VolumeUp fontSize="inherit" />,
};

export default iconMap;
