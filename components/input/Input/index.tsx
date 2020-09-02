import React from "react";
import "./styles.css";
import ReactFlagsSelect from "react-flags-select";
import "react-flags-select/css/react-flags-select.css";

interface InputProps {
  length: Number;
  title:String;
}
const Input: React.FC<InputProps> = (props) => {
  return (
    <div>
      <label>{props.title}</label>
      <form className="input-form">
        <div>
          <ReactFlagsSelect defaultCountry="BR" showSelectedLabel={false} />
        </div>
        <div>
          <input type="phone" placeholder="9999-9999" maxLength={11} />
        </div>
      </form>
    </div>
  );
};

export default Input;
