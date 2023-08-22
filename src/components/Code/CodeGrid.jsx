import React, { useContext } from "react";
import "../../style.css";
import copyed from "../../func";
import { Context } from "../Context/FlexContext";
import { BiSolidCopy } from "react-icons/bi";

const Box = () => {
  const { copyClickText, btnCopyTextChange, state } = useContext(Context);
  const { column, gridGap } = state;

  const copyHandler = async () => {
    let text = "display:grip;";

    text += column !== "" && `grid-template-columns: repeat(${column}, 1fr);`;

    text += gridGap !== "" && `grid-gap: ${gridGap};`;

    text = text.replace(/false/g, "");

    await copyed(text);
    btnCopyTextChange();
  };

  return (
    <div className="topBox">
      <div className="copyWraper">
        <div className="codeBox">
          <pre>
            <span className="code_one">display:</span>
            <span className="code_two">grid;</span>
            <br />
            <span className="code_one">grid-template-columns:</span>
            <span className="code_two">repeat({column}, 1fr);</span>
            <br />
            <span className="code_one">grid-gap:</span>
            <span className="code_two">{gridGap};</span>
          </pre>
        </div>
        <button onClick={copyHandler} className="copyBtn">
          <BiSolidCopy size={18} />
          {copyClickText ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
};

export default Box;
