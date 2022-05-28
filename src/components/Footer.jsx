import React from "react";

let Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
};

export default Footer;
