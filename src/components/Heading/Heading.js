import React from "react";

import "./Heading.sass";

const Heading = ({ title, subtitle }) => {
  return (
    <header className="heading">
      <h1 className="heading__title">{title}</h1>
      <h3 className="heading__subtitle">{subtitle}</h3>
    </header>
  );
};

export default Heading;
