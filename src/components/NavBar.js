import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const createA = links.map((link) => {
    const hashLink = "#" + link
    
    return (<a key={link} href={hashLink}>{link}</a>)
  })

  return <nav>{createA}</nav>;
}

export default NavBar;
