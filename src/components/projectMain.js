import React , { useState } from "react";
import PropTypes from 'prop-types';
import ProjectCard from "./projectCard";
import ProjectDetail from "./projectDetail";

const ProjectMain = () => {
  const [isClick, setClick] = useState(false);
  const [item, setItem] = useState({id:0,title:"",content:""});

  console.log("isClick=>", isClick);

  const handleClick = (obj) => {
    const {status,item} = obj;
    setClick(status);
    setItem(item);
    console.log("obj=>", obj);
  };

  return (
    <div>
      {isClick ? (
        <>
          <button className="btn-warning" onClick={() => handleClick(false)}>
            Go Back
          </button>
          <ProjectDetail  item={item} />
        </>
      ) : (
        <ProjectCard handleClick={handleClick} />
      )}
    </div>
  );

  ProjectMain.prototype={
    id:PropTypes.number,
  }
};

export default ProjectMain;
