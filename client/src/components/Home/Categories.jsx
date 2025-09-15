import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = [
    {
      name: "Platform Eng.",
      to: "/cat/pe",
      bg: "bg-amber-200 hover:bg-amber-400",
      span: "col-span-2 row-span-1",
    },
    {
      name: "ML",
      to: "/cat/ml",
      bg: "bg-violet-200 hover:bg-violet-400",
      span: "col-span-1 row-span-2",
    },
    {
      name: "MLOps",
      to: "/cat/mlops",
      bg: "bg-rose-200 hover:bg-rose-400",
      span: "col-span-1 row-span-1",
    },
  ];

  return (
    <div className="mb-4 py-4">
      <h1 className="text-xl font-semibold mb-4">Categories</h1>
      <div className="grid grid-cols-3 grid-rows-2 gap-4 max-w-md mx-auto">
        {categories.map((items, i) => (
          <Link
            className={`px-4 py-2 text-center text-normal md:text-xl font-semibold ${items.bg} ${items.span} rounded transition-all duration-300 flex items-center justify-center`}
            key={i}
            to={items.to}
          >
            {items.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
