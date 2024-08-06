import React, { useState } from "react";

import data from "./data";
import "./accord.css";

function Accord() {
  const [selected, setSelected] = useState(null);

  // for Multiple Selection
  const [emselection, SetEmselection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function singleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }
  // for Multiple Selection
  function multipleSelection(getCurrentId) {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);

    console.log(findIndexOfCurrentId);
    if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId);
    else cpyMultiple.splice(findIndexOfCurrentId, 1);
    setMultiple(cpyMultiple);
  }
  return (
    <div className="wrapper">
      <button onClick={() => SetEmselection(!emselection)}>
        Enable Multiple Selection{" "}
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={
                  emselection
                    ? () => multipleSelection(dataItem.id)
                    : () => singleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>

                <span>+</span>
              </div>

              {emselection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="content"> {dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="content"> {dataItem.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div>no data found</div>
        )}
      </div>
    </div>
  );
}

export default Accord;
