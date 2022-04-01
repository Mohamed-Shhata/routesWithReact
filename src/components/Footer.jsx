import React from "react";

function Footer() {
  return (
    <>
      <footer className="p-5 bg-secondary text-center">
        <p className="m-0">
          All Copy Rights Reserved to Shehata &copy;
          {new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "2-digit",
          })}
        </p>
      </footer>
    </>
  );
}

export default Footer;
