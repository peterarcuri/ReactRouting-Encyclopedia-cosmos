import React from 'react';

const ContentPage = ({ data }) => {
  return (
    <div className="content">
      <h1>{data.title}</h1>
      <p>{data.content}</p>
    </div>
  );
};

export default ContentPage;
