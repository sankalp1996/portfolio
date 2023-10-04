import React from "react";

const ServiceDetail = (isClicked) => {
  console.log("serviceDetail=>", isClicked);

  if (isClicked.isClicked) {
    return (
      <div>
        <div>
          <h1>details of new service</h1>
          <button className="btn-primary">Go Back</button>
        </div>
      </div>
    )
  } else {
    return (<>
    <h1>nothing</h1>
    </>
    )
  }
};
export default ServiceDetail;
