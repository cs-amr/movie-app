import React from "react";
import { useParams } from "react-router-dom";

export default function Movie() {
  const { movieid } = useParams();

  return <div>Movie {movieid}</div>;
}
