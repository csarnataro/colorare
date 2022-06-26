import { useRouteData } from 'solid-app-router';
import { Component } from "solid-js";
import { ResultItem } from "../types/result-item";

const SingleResult: Component = () => {
  const image = useRouteData<ResultItem>();
  return <pre>{image.title} here</pre>
}

export default SingleResult;