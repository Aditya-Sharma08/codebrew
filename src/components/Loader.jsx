import React from "react";
import Lottie from "lottie-react";

const mystyle = {
  width: "25%",
  marginLeft: "auto",
  marginRight: "auto",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  marginTop: "10%",
};

function Loader(props) {
  return (
    <div>
      <Lottie animationData={props.animation} style={mystyle} />;
    </div>
  );
}
export default Loader;
