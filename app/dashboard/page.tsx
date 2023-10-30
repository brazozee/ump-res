import React from "react";

const dashboard = () => {
    return ( 

      <div className="App">
      
      <iframe
  style={{
    background: "#F1F5F4",
    border: "none",
    borderRadius: 2,
    boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
    width: "100vw",
    height: "100vh"
  }}
  src="https://charts.mongodb.com/charts-mpumabnb-gwwxn/embed/dashboards?id=65350ee7-829f-49b1-8b3f-b0fa6ec99f2d&theme=light&autoRefresh=true&maxDataAge=60&showTitleAndDesc=false&scalingWidth=fixed&scalingHeight=fixed"
/>

    </div>
     );
}
 
export default dashboard;