import { IMenuConfig } from "./bigMenu.interface";

export const bigMainMenuConfig: IMenuConfig[] = [
  {
    id: "Id-1",
    name: "main-menu",
    config: [
      {
        id: 1,
        icon: "home",
        title: "Trang chủ",
        redirectPath: "/spotify/playlist",
      },
      {
        id: 2,
        icon: "search",
        title: "Tìm kiếm",
        redirectPath: "/spotify/playlist",
      },
      {
        id: 3,
        icon: "library",
        title: "Thư viện",
        redirectPath: "/spotify/playlist",
      },
    ],
  },
  {
    id: "Id-2",
    name: "1st-sub-menu",
    config: [
      {
        id: 4,
        icon: "add",
        title: "Tạo Playlist",
        redirectPath: "/spotify/playlist",
      },
      {
        id: 5,
        icon: "heart",
        title: "Bài hát yêu thích",
        redirectPath: "/spotify/playlist",
      },
    ],
  },
];
