import React, { useContext } from "react";
import "../../style.css";
import copyed from "../../func";
import { Context } from "../Context/BoxContext";
import { BiSolidCopy } from "react-icons/bi";

const Box = () => {
  const { copyClickText, btnCopyTextChange, state } = useContext(Context);
  const {
    flexDirection,
    alignItems,
    justifyContent,
  } = state;

  /*
      <div className="copy_code_wraper">
          <span>Code</span>
          <div className="code_box flex-code-box">
            <pre>
              <span className="code_one">display:</span>
              <span className="code_two">flex;</span>
              <br />
              <span className="code_one">flex-direction:</span>
              <span className="code_two">{flex["flex-direction"]};</span>
              <br />
              <span className="code_one">justify-content:</span>
              <span className="code_two">{flex["justify-content"]};</span>
              <br />
              <span className="code_one">align-items:</span>
              <span className="code_two">{flex["align-items"]};</span>
            </pre>
          </div>
          <button onClick={flexBoxCopyHandler} className="copyBtn">
            {copyClickText ? "Copied!" : "Copy"}
          </button>
        </div>
  
  */
  const copyHandler = async () => {
    let text = "";


    //text += borderRadius !== "0px" && `border-radius: ${borderRadius};`;


    text = text.replace(/false/g, "");

    await copyed(text);
    btnCopyTextChange();
  };

  return (
    <div className="topBox">
      <div className="copyWraper">
        <div className="codeBox">
          <pre>

           
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


/*
 {bgType === "linear" ? (
              <>
                <span className="code_one">background-color</span>:{" "}
                <span className="code_three">{bgColor}</span>;
                <br />
              </>
            ) : null}
            {bgType === "gradient" ? (
              <>
                <span className="code_one">background</span>
                {": "}
                <span className="code_two">{gradientType}</span>
                {"("}
                <span className="code_three">{gradientAngle}</span>
                <span className="code_two">{gradientColorOne}</span>{" "}
                <span className="code_three">{gradientRateOne}</span>
                {", "}
                <span className="code_two">{gradientColorTwo}</span>{" "}
                <span className="code_three">{gradientRateTwo}</span>
                {");"}
                <br />
              </>
            ) : null}
           
*/