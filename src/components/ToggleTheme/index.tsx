import { useState } from "react";
import Switch from "react-switch";
import * as S from "./styles";

export function ToggleTheme() {
  const [toggle, setToggle] = useState(true);
  function handleChange() {
    setToggle(!toggle);
  }
  return (
    <S.ToggleContent>
      <label>
        <strong>Light</strong>
        <Switch
          checked={toggle}
          onChange={handleChange}
          onColor="#E3E4E6"
          onHandleColor="#48494D"
          handleDiameter={18}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={12}
          width={35}
          className="react-switch"
          id="material-switch"
        />
        <strong>Dark</strong>
      </label>
    </S.ToggleContent>
  );
}
