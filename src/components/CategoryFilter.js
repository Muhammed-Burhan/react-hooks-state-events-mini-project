import React from "react";

function CategoryFilter({ categories, category, onSelectCategory }) {
  const buttonForCategories = categories.map((cate) => {
    const className = cate === category ? "selected" : null;
    return (
      <button
        className={className}
        key={cate}
        onClick={() => onSelectCategory(cate)}
      >
        {cate}
      </button>
    );
  });
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttonForCategories}
    </div>
  );
}

export default CategoryFilter;
