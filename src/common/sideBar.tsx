import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { createBrowserHistory } from "@remix-run/router";
import { Link } from "react-router-dom";

export const SideBar = () => {
  return (
    <>
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Sidebar
        </Typography>
      </div>
      <ul className="sidebar">
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/maps">Charts and Maps</Link>
        </li>
      </ul>
    </>
  );
};
