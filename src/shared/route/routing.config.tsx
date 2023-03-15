import { lazy } from "react";
import { IRoute } from "@Shared/route/routing.interface";
import { TestComponent } from "@/pages/test/Test.pages";
/**
 * Lazy importing route
 */
const SideBar = lazy(
  () => import("@Shared/components/sidebar/Sidebar.component")
);
const NotFound = lazy(() => import("@Pages/not-found/Notfound.component"));
const Home = lazy(() => import("@Pages/spotify/home/Home.component"));

export const rootRoute: IRoute[] = [
  {
    path: "/spotify",
    element: <SideBar />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "playlist",
        element: <Home />,
      },
      {
        path: "tracks",
        element: <Home />,
      },
    ],
  },
  {
    path: "/test",
    element: <TestComponent />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
