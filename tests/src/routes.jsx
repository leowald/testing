import NewPage from "./pages/NewPage.jsx";
//import Account from "./pages/Account.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";
import PrivateRoute from "./layouts/PrivateRoot.jsx";
import RootLayout from "./layouts/RootLayout.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

import LoginPage from "./pages/LoginPage.jsx";
import ProductDetailPage from "./pages/ProductDetailPage.jsx";

const routes = [
  {
    path: "/",
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <RootLayout />,
        children: [
          {
            index: true,
            lazy: () => import("./pages/Home.jsx"),
          },
          { path: "/new", element: <NewPage /> },
          { path: "/product/:id", element: <ProductDetailPage /> },
          { path: "/login2", element: <LoginPage /> },
        ],
      },
      {
        path: "/account",
        element: <PrivateRoute />,

        children: [
          {
            index: true,
            lazy: () => import("./pages/Account.jsx"),
          },
          { path: "post", lazy: () => import("./pages/Post.jsx") },
        ],
      },
    ],
  },
];

export default routes;
//  //lazy: () => import("./pages/Home.jsx"),
// //children: [ { path: "/post", element: <Post /> }],
////lazy: () => import("./pages/NewPage.jsx")
