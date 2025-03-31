import React from "react";

const styles = {
    header: {
        backgroundColor: "#333",  
        color: "white",  
        padding: "1px 0",  
        textAlign: "center",  
        fontSize: "2rem",  
        fontWeight: "bold",  
        borderBottom: "3px solid #ffcc00" 
    }
};

const Header = () => {
    return (
        <header style={styles.header}>
            <h1>나의 소개 페이지</h1>
        </header>
    );
};

export default Header;