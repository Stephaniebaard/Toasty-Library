import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import Rootlayout from "./layouts/RootLayout";
import Homepage from "./routes/HomePage";
import BrowsePage from "./routes/BrowsePage";
import FavoritesPage from "./routes/FavoritesPage";
import LibraryPage from "./routes/LibraryPage";
import ItemDetailsPage from "./routes/ItemDetailsPage";
import { FavoritesProvider } from "./context/FavoritesContext";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Rootlayout/>,
      children: [
        {index: true, element: <Homepage />},
        {path:"/:browse", 
        element: <BrowsePage/>,
        children: [
          {
            path: ":item", 
            element: <ItemDetailsPage/>,
          },
        ],
        },
        {
          path: "library",
          element: <LibraryPage />,
        },
        {
          path: "favorites",
          element: <FavoritesPage />,
        },
        {
          path: "book/:id", 
          element: <ItemDetailsPage />,
        },
      ],
    },
  ]);

  return (
 
    <RouterProvider router={router} />

  );
}


export default App;


