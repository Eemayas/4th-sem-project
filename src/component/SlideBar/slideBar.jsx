import React from "react";
import { GestureDetector } from "react-onsenui";
import "./slideBar.css";


const SlideBar = ({ isSignup, changeSignup }) => {
    // const [isSignup, changeSignup] = useState(false);
  
    return (
      <div className="top_slidebar">
        <GestureDetector onTap={() => changeSignup(false)}>
          <div
            className="top_slidebar_content"
            style={{
              background: !isSignup ? "black" : "white",
              color: !isSignup ? "white" : "black",
            }}
          >
            logIn
          </div>{" "}
        </GestureDetector>
        <GestureDetector onTap={() => changeSignup(true)}>
          <div
            className="top_slidebar_content"
            style={{
              background: isSignup ? "black" : "white",
              color: isSignup ? "white" : "black",
            }}
          >
            Sign Up
          </div>
        </GestureDetector>
      </div>
    );
  };
  export default SlideBar;