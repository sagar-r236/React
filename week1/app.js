import React from "react";
import ReactDOM  from "react-dom/client";



const heading = React.createElement(
  "h1",
  {
    id: "header",
    className: "head",
  },
  "Hello World! from parcel"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log('check')
root.render(heading);
