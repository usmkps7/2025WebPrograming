import React from "react";

const styles = {
  footer: {
    marginTop: "20px",
    padding: "15px",
    backgroundColor: "#333",
    color: "#fff",
    textAlign: "center",
    fontSize: "14px",
    borderTop: "3px solid #ffcc00"
  }
};

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>2025 WebProgramming Report</p>
    </footer>
  );
};

export default Footer;