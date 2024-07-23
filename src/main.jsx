import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Dashboard from "./pages/Dashboard";
// import Farmers from "./pages/Farmer";
import "./index.css";
import App from "./App";
// import Farmland from "./pages/Farmland";
import CropCycle from "./pages/Croptype";
import Farmers from "./pages/Crop";

// import Accuonts from "./pages/Accounts";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Oop! Error!</h1>,
    children: [
      
      {
        path:"/crop",
        element:<Farmers/>
      },

      {
        path:"/croptype",
        element:<CropCycle/>
      },
      // {
      //   path:"/accounts",
      //   element:<Accuonts/>

      // }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
