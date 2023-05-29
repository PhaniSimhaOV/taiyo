import { Navigate, RouteObject } from "react-router";
import { SideBar } from "./common/sideBar";
import AddContact from "./components/addContact";
import ChartsComponent from "./components/chartsComponent";

const routes: RouteObject[] = [
  {
    path: "",
    element: <SideBar />,
  },
  {
    path: "/contact",
    element: <AddContact />,
  },
  {
    path: "/maps",
    element: <ChartsComponent />,
  },
];

export default routes;
