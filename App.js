import React from "react";
import ReactDOM from "react-dom/client";

// Creating a nested header element without jsx
// const headerWithoutJSX = React.createElement("div",{class:"title"},[
//     React.createElement("h1",{},"This first is h1 tag"),
//     React.createElement("h1",{},"This is second h1 tag"),
//     React.createElement("h1",{},"This is third h1 tag")
// ])

// Creating header element using JSX
// const headerWithJSX = (
//     <div className="title">
//         <h1>This is first h1 tag</h1>
//         <h1>This is second h1 tag</h1>
//         <h1>This is third h1 tag</h1>
//     </div>
// );

// Creating a functional component with JSX
// const HeaderComponent = () => (
//     <div className="title">
//         <h1>This is first h1 tag</h1>
//         <h1>This is second h1 tag</h1>
//         <h1>This is third h1 tag</h1>
//     </div>
// );

const HeaderComponent = () => (
    <div className="title">
        <i className="bi bi-bell-fill bell"></i>
        <input type="text" name="search" className="search-bar"></input>
        <i class="bi bi-person-circle user"></i>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent/>);