import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "Développeur Mobile Junior React Native",
              "Développeur Web Junior React js",
              "Etudiant en licence 3 de Génie Logiciel",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      )
}

export default Type