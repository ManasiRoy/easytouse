import React, { useState } from "react";
import "./card.css";

const Card = () => {
  const [htmlContent, setHtmlContent] = useState("");
  const [cssText, setCssText] = useState("");

  const ShowHTML = (e) => {
    e.preventDefault();
    let showHtml = document.getElementById("showHtmlBtn").innerHTML;
    setHtmlContent(showHtml);
  };

  // Function to get the CSS rules

  const showCardCSS = () => {
    const styleSheets = document.styleSheets;
    let cssText = "";

    for (let i = 0; i < styleSheets.length; i++) {
      const styleSheet = styleSheets[i];
      const rules = styleSheet.cssRules || styleSheet.rules;

      if (rules) {
        for (let j = 0; j < rules.length; j++) {
          const rule = rules[j];
          if (
            rule.selectorText &&
            (rule.selectorText.includes(".card") ||
              rule.selectorText.includes(".card>") ||
              rule.selectorText.includes(".card-body") ||
              rule.selectorText.includes(".card-title") ||
              rule.selectorText.includes(".card-text") ||
              rule.selectorText.includes(".btn") ||
              rule.selectorText.includes(".btn-primary"))
          ) {
            cssText += rule.cssText + "\n";
          }
        }
      }
    }

    return cssText;
  };

  const handleShowCSS = () => {
    const cssText = showCardCSS();
    setCssText(cssText);
  };

  return (
    <>
      <div id="showHtmlBtn">
        <div className="card">
          <div className="bgWrap"></div>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
      <div className="flex">
        <button onClick={ShowHTML} className="showHtmlBtn">
          Click to Show HTML
        </button>
        <button onClick={handleShowCSS} className="showCSSBtn">
          Click to Show CSS
        </button>
      </div>
      <div id="output">
        <>
          {htmlContent && (
            <pre>
              <h3>Html Rules:</h3>
              {htmlContent}
            </pre>
          )}
        </>
        <>
          {cssText && (
            <pre>
              <h3>CSS Rules:</h3>
              {cssText}
            </pre>
          )}
        </>
      </div>
    </>
  );
};

export default Card;
