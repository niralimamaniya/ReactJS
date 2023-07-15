import User from "./User";
// import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";
class About extends React.Component{

    constructor(props){
        super(props)
    }

    componentDidMount(){

    }
    render(){
        return (
            <div>
                <h1>About</h1>
                <div>
                    <UserContext.Consumer>
                        {({loggedInUser}) => <h1>{loggedInUser}</h1> }
                    </UserContext.Consumer>
                </div>

                {/* <User name={"Nirali Mamaniya"}/> */}
    
                {/* <UserClass name={"Nirali Mamaniya (class)"}/> */}
            </div>      
        )
    }
}
// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <User name={"Nirali Mamaniya"}/>

//             <UserClass name={"Nirali Mamaniya (class)"}/>
//         </div>      
//     )
// };

export default About;