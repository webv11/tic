import React from "react";

let Square = (props) => {
    return(
        <div 
        onClick={props.onClick}
        style={{
            border: "1px solid  #c91054" ,
            height: "100px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
           

          }}
        className="square">
            <h5>{props.value}</h5>
        </div>
    );
}

export default Square;