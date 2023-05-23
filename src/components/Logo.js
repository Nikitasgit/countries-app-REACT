import React from "react";

const Logo = () => {
  return (
    <div className="logo">
      {/*       // Les images importées depuis la balise IMG sont accessibles dans
      "public" (utiliser le même chemin que si on était dans "public")*/}
      <img src="./logo192.png" alt="logo react" />
      <h3>React World</h3>
    </div>
  );
};

export default Logo;
