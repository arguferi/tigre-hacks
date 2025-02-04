import React from "react";
import { TranslationContext } from "../../../page";
import "./index.css";
const Sponsors = () => {
  const language = React.useContext(TranslationContext);
  return (
    <section className="sponsors">
      <h3>{language?.getString("sponsors.title")}</h3>
      <p>
        {language?.getString("sponsors.label")}{" "}
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
          {language?.getString("sponsors.howToBecomeSponsor")}
        </a>
      </p>
      <h4>{language?.getString("sponsors.poweredBy")}</h4>
      <img
        src="sponsors/chubb.png"
        className="chubb"
        alt="Chubb seguros logo"
        loading="lazy"
      />
      <div className="container">
        <div className="image-grid">
          <a className="image-container" href="https://aka.ms" target="_blank">
            <img
              src="sponsors/msft.png"
              alt="Microsoft Azure logo"
              loading="lazy"
            />
          </a>
          <a
            className="image-container"
            href="https://github.com"
            target="_blank"
          >
            <img src="sponsors/github.png" alt="GitHub logo" loading="lazy" />
          </a>
          <a className="image-container">
            <img
              src="sponsors/timhortons.png"
              alt="Tim Hortons logo"
              loading="lazy"
            />
          </a>
          <a href="https://mlh.io" target="_blank" className="image-container">
            <img
              src="sponsors/mlh-logo-color.png"
              alt="MLH logo"
              loading="lazy"
            />
          </a>
          <a
            href="https://codigofacilito.com"
            target="_blank"
            className="image-container"
          >
            <img
              src="sponsors/cf.png"
              alt="Codigo Facilito logo"
              loading="lazy"
            />
          </a>
          <a
            href="https://platzi.com"
            target="_blank"
            className="image-container"
          >
            <img src="sponsors/platzi.png" alt="Platzi logo" loading="lazy" />
          </a>
          <a
            href="https://instagram.com/donchambitas"
            target="_blank"
            className="image-container"
          >
            <img
              src="sponsors/don-chambitas.jpg"
              alt="Don Chambitas logo"
              loading="lazy"
            />
          </a>
          <a href="https://aws.com" target="_blank" className="image-container">
            <img src="sponsors/aws.png" alt="AWS logo" loading="lazy" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
