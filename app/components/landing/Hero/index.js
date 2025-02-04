import React from "react";
import { TranslationContext } from "../../../page";
import "./index.css";
const Hero = () => {
  const language = React.useContext(TranslationContext);

  return (
    <>
      <section className="hero">
        <div className="column-left">
          <img src="tiger.png" alt="Bigger image of the logo" loading="eager" />
        </div>
        <div className="column-right">
          <img src="bxu.png" alt="Bisontech logo" />
          <h1>{language?.getString("hero.title") ?? "TIGRE HACKS"}</h1>
          <p className="extra-light">{language?.getString("hero.subtitle") ?? "Un Hackathon Regio Hecho Por Estudiantes Para Estudiantes"}</p>
          <h6 className="bold">
            {language?.getString("hero.date")} |{" "}
            {language?.getString("hero.place")}
          </h6>
          <div className="button-row">
            <a className="white-background">
              {language?.getString("hero.register" ?? "Regístrate")}
            </a>
            <a className="orange-background">
              {language?.getString("hero.sponsorUs" ?? "¡Patrocínanos!")}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
