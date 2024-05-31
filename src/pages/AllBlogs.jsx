import React from "react";
import { useLocation } from "react-router-dom";
import LoadingSpinner from "../components/shared/LoadingSpinner";

const AllBlogs = () => {
  return (
    <div className="grid grid-cols-1">
      <h2 className="text-3xl md:text-7xl font-bold text-red-500 text-center">
        {" "}
        More Blogs ? Coming Soon ....
      </h2>
      <LoadingSpinner />
    </div>
  );
};

export default AllBlogs;
