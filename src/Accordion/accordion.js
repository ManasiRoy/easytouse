// Accordion.js
import React, { useState } from "react";
import "./accordion.css";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={toggleAccordion}>
        {title}
        <span>{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};

const Accordion = () => {
  const items = [
    {
      title: "Accordion Item 1",
      content: "Content for accordion item 1",
    },
    {
      title: "Accordion Item 2",
      content: "Content for accordion item 2",
    },
    {
      title: "Accordion Item 3",
      content: "Content for accordion item 3",
    },
  ];
  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;
