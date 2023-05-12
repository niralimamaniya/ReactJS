// Creating a single element
// const heading = React.createElement(
//     "h2",
//     {id:"heading"},
//     "Hello World from React :)"
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

//  root.render(heading);


// Creating nested elements / structure 
/* <div id="parent">
    <div id="child">
        <h1></h1>
        <h2></h2>
    </div>
    <div id="child2">
        <h1></h1>
        <h2></h2>
    </div>
</div> */ 
const parent = 
    React.createElement("div",{id:"parent"},[
        React.createElement("div",{id:"child"},[
            React.createElement("h1",{},"I am h1 tag of child"),
            React.createElement("h2",{},"I am h2 tag of child")
        ]),
        React.createElement("div",{id:"child2"},[
            React.createElement("h1",{},"I am h1 tag of child2"),
            React.createElement("h2",{},"I am h2 tag of child2")
        ])
    ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);