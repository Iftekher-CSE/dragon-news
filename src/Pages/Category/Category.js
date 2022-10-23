import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummaryCard from "../Shared/NewsSummaryCard/NewsSummaryCard";

const Category = () => {
  const newsCategory = useLoaderData();
  // console.log(newsCategory);

  return (
    <div>
      <h2>This category has total {newsCategory.length} news.</h2>
      {newsCategory.map(news => (
        <NewsSummaryCard key={news._id} news={news}></NewsSummaryCard>
      ))}
    </div>
  );
};

export default Category;
