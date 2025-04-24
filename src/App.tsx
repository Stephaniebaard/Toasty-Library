import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import Rootlayout from "./layouts/RootLayout";
import Homepage from "./routes/HomePage";
import BrowsePage from "./routes/BrowsePage";
import FavoritesPage from "./routes/FavoritesPage";
import LibraryPage from "./routes/LibraryPage";
import ItemDetailsPage from "./routes/ItemDetailsPage";

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
        }
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
    
  );
}


export default App;


