import * as React from "react";
import Icon from "material-ui/Icon";
import { TextField } from "material-ui";
import searchicon from "./busqueda.jpg";

const style = require("./search-input.style.scss");

interface SearchInputProps {
  searchValue: string;
  onSearchUpdate: (newValue: string) => void;
  onSearchSubmit: () => void;
}

const handleOnChange = (onSearchUpdate) => (e) => {
  onSearchUpdate(e.target.value);
};

const captureEnter = (onSearchSubmit) => (e) => {
  if (e.key === "Enter") {
    onSearchSubmit();
  }
};

export const SearchInput = (props: SearchInputProps) => (
  <div>
    <div>
      <img src={searchicon}></img>
    </div>
    {/* <Icon classes={{ root: style.icon }}>&#xe900;</Icon> */}
    <input
      className={style.input}
      type="text"
      style={{ width: "557px", height: "39px", marginRight: "76px" }}
      placeholder="Buscar por palabra clave..."
      value={props.searchValue}
      onChange={handleOnChange(props.onSearchUpdate)}
      onKeyPress={captureEnter(props.onSearchSubmit)}
      spellCheck={false}
      autoFocus
    />
  </div>
);
