import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
    <h1 className="head">
        Namaste React from JSX
    </h1>
);

const HeadingComponent = () => (
    
    <React.Fragment>
        <div id="container">
            {Title()}
            <h1 className="head">
                Namaste React from Component
            </h1>   
        </div>
        <div></div>
    </React.Fragment>
    
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);