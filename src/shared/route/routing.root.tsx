import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { rootRoute } from "./routing.config";
import { IRoute } from "./routing.interface";

function RouteBoostrap() {
  const renderRoute = (rootRoute: IRoute[]) => {
    return rootRoute.map((route, index) => {
      return (
        <Route
          path={route.path}
          key={index}
          element={
            <Suspense fallback={null}>
              <React.Fragment>{route.element}</React.Fragment>
            </Suspense>
          }
        >
          {route.children ? renderRoute(route.children) : null}
        </Route>
      );
    });
  };
  return <Routes>{renderRoute(rootRoute)}</Routes>;
}

export default RouteBoostrap;
