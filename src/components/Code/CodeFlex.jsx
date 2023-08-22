import React, { useContext } from "react";
import "../../style.css";
import copyed from "../../func";
import { Context } from "../Context/FlexContext";
import { BiSolidCopy } from "react-icons/bi";

const Box = () => {
  const { copyClickText, btnCopyTextChange, state } = useContext(Context);
  const { flexDirection, alignItems, justifyContent, gap } = state;

  const copyHandler = async () => {
    let text = "display:flex;";

    text += flexDirection !== "" && `flex-direction: ${flexDirection};`;
    text += alignItems !== "" && `align-items: ${alignItems};`;
    text += justifyContent !== "" && `justify-content: ${justifyContent};`;
    text += gap !== "" && `gap: ${gap};`;

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
            <span className="code_two">flex;</span>
            <br />
            <span className="code_one">flex-direction:</span>
            <span className="code_two">{flexDirection};</span>
            <br />
            <span className="code_one">justify-content:</span>
            <span className="code_two">{justifyContent};</span>
            <br />
            <span className="code_one">align-items:</span>
            <span className="code_two">{alignItems};</span>
            <br />
            <span className="code_one">gap:</span>
            <span className="code_two">{gap};</span>
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
