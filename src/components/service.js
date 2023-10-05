import { useEffect, useState} from "react";
import serviceData from "../data/serviceData";
import ServiceDetail from "./serviceDetail";

const Service = () => {
  let [isClicked, changeClick] = useState(false);
  let [myId , changeMyId] = useState(0);

  const handleClick = (item1) => {
    console.log("myitem1=>",item1);
    
    changeClick(!isClicked);
    changeMyId(item1) 
        
  };

  useEffect (()=>{
    console.log("myId clicked=>",myId);

  },[myId])
  
  return (
    <>
      {/* {console.log("render=>",serviceData)} */}

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
              {serviceData.map((item) => {
                console.log(item)
                // {myId = item.id} 

               return  <div className="col-lg-4 mb-5">
                  <div className="card">
                    {/* <img src="..." className="card-img-top" alt="..."></img> */}
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.content}</p>
                      <button
                        href="#"
                        className="btn btn-primary"
                        // onClick={()=>handleClick(item.id)}
                        onClick={()=>handleClick(item.id)}
                        
                      >
                        Show detail
                      </button>
                    </div>
                  </div>
                </div>
})}
            </div>
          </div>
        </div>
      ) : (
        // <ServiceDetail myId={myId} />
        <ServiceDetail myData={serviceData[myId-1]} />
      )}
    </>
  );
};

export default Service;
