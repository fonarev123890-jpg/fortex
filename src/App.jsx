import { createHashRouter, Navigate, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import PhoneModal from "./features/modal/PhoneModal";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const Contacts = lazy(() => import("./pages/Contacts"));
const AboutInfo = lazy(() => import("./pages/AboutInfo"));
const Services = lazy(() => import("./pages/Services"));
const NotFound = lazy(() => import("./pages/NotFound"));

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "contacts", element: <Contacts /> },
      { path: "about", element: <AboutInfo /> },
      { path: "services", element: <Services /> },
      { path: "*", element: <NotFound /> },
    ],
  },
  { path: "", element: <Navigate to="/#" replace /> },
]);

function App() {
  return (
    <>
      <Suspense fallback={<div>Загрузка...</div>}>
        <RouterProvider router={router} />
      </Suspense>
      <PhoneModal />
    </>
  );
}

export default App;
