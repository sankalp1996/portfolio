import React from "react";

const ProjectDetail = (item) => {
    console.log(item)
  return (
    <div>
      <div>
        <div>
          <h1>Details of Project</h1>
          <h3>Project Name : {item.item.id}</h3>
          <p>Detail:{item.item.content}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
