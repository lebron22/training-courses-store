import React from "react";
import { Link } from "react-router-dom";
import Heading from "../../components/shared/Heading/Heading";
import "./Homepage.sass";

const Homepage = () => {
  return (
    <div className="homepage">
      <Heading title="my store" subtitle="Top programming courses" />
      <p className="homepage__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At vero
        incidunt officia non quidem. Reiciendis, exercitationem fuga quis
        eligendi beatae inventore. Fuga eveniet corporis sint error saepe animi,
        rerum nam, exercitationem rem ad fugit sit, iusto deserunt nesciunt
        voluptatum dolores. Officia saepe cum maxime nisi beatae delectus,
        reprehenderit ducimus laboriosam!
      </p>
      <Link to="/store">
        <button className="homepage__button">See our products!</button>
      </Link>
    </div>
  );
};

export default Homepage;
