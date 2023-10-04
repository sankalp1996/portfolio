import { useState, createContext } from "react";
import serviceData from "../data/serviceData";
import ServiceDetail from "./serviceDetail";

const Service = () => {
  let [isClicked, changeClick] = useState(false);

  const handleClick = () => {
    console.log(isClicked);

    changeClick(!isClicked);
  };

  return (
    <>
      {console.log("render")}

      {isClicked ? "" : (
        <button className="btn-primary" onClick={handleClick}>
          Go Back
        </button>
      )}

      {isClicked ? (
        <div className="container-fluid">
          <div className="container">
            <h3>Services</h3>
            <div className="row">
              {serviceData.map((item) => (
                <div className="col-lg-4 mb-5">
                  <div className="card">
                    {/* <img src="..." className="card-img-top" alt="..."></img> */}
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.content}</p>
                      <a
                        href="#"
                        className="btn btn-primary"
                        onClick={handleClick}
                      >
                        Show detail
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <ServiceDetail changeClick={changeClick} />
      )}
    </>
  );
};

export default Service;
