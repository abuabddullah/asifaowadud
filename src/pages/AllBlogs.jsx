import React from "react";
import { useLocation } from "react-router-dom";
import LoadingSpinner from "../components/shared/LoadingSpinner";

const AllBlogs = () => {
  return (
    <div className="grid grid-cols-1">
      <LoadingSpinner />
    </div>
  );
};

export default AllBlogs;
