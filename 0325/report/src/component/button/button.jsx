import React from "react";

const styles = {
    btn: {
        textAlign: "center",
        color: "black",
        backgroundColor: "white",
        border: "2px solid black",
        textDecoration: "none",
        fontSize: "1em",
        borderRadius: "5px",
    }
};

function Button(props){
    return(
        <span>
            <a href="#" style={styles.btn}>{props.name}</a>
        </span>
    );
}

export default Button;