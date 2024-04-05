// function Header() {
//   return (
//     <header>
//       <h1>header</h1>
//     </header>
//   );
// }

// export default Header;

import React from "react";

const Header = () => {
  const handleOnClick = () => {
    alert("버튼을 클릭하셨군요! (´･ω･`)?");
  };
  return (
    <header>
      <h1>Header</h1>
      <button onClick={handleOnClick}>클릭..💟</button>
    </header>
  );
};

export default Header;
