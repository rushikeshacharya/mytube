import React from "react";
import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import store from "./store/store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import { WatchPage } from "./components/WatchPage";
import Demo from "./components/Demo";
import Demo2 from "./components/Demo2";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "demo",
        element: (
          <>
            <Demo />
            <Demo2 />
          </>
        ),
      },
    ],
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <Head />
      <RouterProvider router={appRouter} />
    </Provider>
  );
};

export default App;
