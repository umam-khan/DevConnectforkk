import React from "react";

function Wave() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{position:'absolute', bottom:0, opacity:0.6}}>
      <path
        fill="#f50"
        d="M0 32h30c30 0 90 0 150 26.7 60 26.3 120 80.3 180 96 60 16.3 120-5.7 180-21.4 60-16.3 120-26.3 180-26.6 60 .3 120 10.3 180 10.6 60-.3 120-10.3 180-5.3 60 5 120 27 180 21.3 60-5.3 120-37.3 150-53.3l30-16v256H0z"
      ></path>
    </svg>
  );
}

export default Wave;
