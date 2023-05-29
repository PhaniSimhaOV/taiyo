import React from "react";
import "./App.css";
import { useQuery } from "@tanstack/react-query";
import { useRoutes } from "react-router";
import { useDispatch } from "react-redux";
import { getAllCases } from "./actions/getAllCases";
import router from "./router";

const App = () => {
  const dispatch = useDispatch();
  const content = useRoutes(router);
  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=20").then((res) => res.json()),
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error;
  if (data) {
    getAllCases(dispatch, data);
  }
  return <React.Fragment>{content}</React.Fragment>;
};

export default App;
