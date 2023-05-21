import React from "react";
import ReactDOM  from "react-dom/client";


const heading = React.createElement(
  "h1",
  {
    id: "header",
    className: "head",
    key: 1,
  },
  "Hello World! from parcel"
);

const heading2 = React.createElement(
  "h2",
  {
    className: "head",
    key: 2
  },
  "heading 2"
)

const heading3 = (
  <h1 id="heading3" className="head" key="3">Heading3 inside jsx</h1>
)

const container = React.createElement(
  "div",
  {
    id : "container"  
  }, 
  [heading, heading2, heading3]
)

const HeaderComponent = () => {
  return (
    <div>
      <h1>Hello from header component</h1>
      { heading3 }
    </div>
    
 
  
  )
}



const root = ReactDOM.createRoot(document.getElementById("root"));
console.log('check')
root.render(<HeaderComponent />);


