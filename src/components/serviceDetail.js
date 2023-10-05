import React from "react";
import serviceData from "../data/serviceData";

const ServiceDetail = (myData) => {
  // console.log("serviceDetail=>", props);
 const item = myData.myData
 console.log ("props=>",myData)
  return (
    <div>
      <div>
        <h1>details of new service</h1>
          {/* <h3>Project Name : {item.title}</h3> */}
      </div>
    </div>
  );
};

// const ServiceDetail = (props) => {
//   // console.log("serviceDetail=>", props);
//  const item = serviceData[props.myId-1]
//  console.log ("props=>",props)
//   return (
//     <div>
//       <div>
//         <h1>details of new service</h1>
//           <h3>Project Name : {item.title}</h3>
//       </div>
//     </div>
//   );
// };
export default ServiceDetail;
