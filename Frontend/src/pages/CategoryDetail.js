import React from 'react';
import { useParams } from 'react-router-dom';

const CategoryDetail = () => {
  let { id } = useParams();

  return (
    <div>
      <h1>Details for Category: {id}</h1>
      <p>Here you can view detailed information and trends for the selected financial category.</p>
    </div>
  );
};

export default CategoryDetail;
