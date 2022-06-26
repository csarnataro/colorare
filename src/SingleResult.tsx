import { Component } from "solid-js";
import { ResultItem } from "./ResultItem";
import { useRouteData } from 'solid-app-router';

const SingleResult: Component = () => {
  const image = useRouteData<ResultItem>();
  return <pre>{image.title} here</pre>
}

export default SingleResult;