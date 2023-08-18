import React, { useState } from "react";
import "../css/WinningPoints.css";
import { winningPtLists } from "../Constants";

const WinningPoints = () => {
  const [winningPtList, setWinningPtList] = useState(winningPtLists);
  const [winnerNameVal, setWinnerNameVal] = useState({
    winningName: "",
    winnerName: "",
  });
  const checkboxClicked = (e) => {
    const { checked, name } = e.target;
    const newList = winningPtList.map((list) => {
      if (list.winningName === name) return { ...list, checked };
      else if (list.winningName === name && !checked && list.winnerName)
        return { ...list, checked, winnerName: "" };
      else return list;
    });
    setWinningPtList(newList);
  };

  //   const winningPointsList = () => {
  //     return winningPtList.map(
  //       ({ winningLabel, winningName, checked, winnerName }) => (
  //         <div key={winningName} className="winningPoint">
  //           <input type="checkbox" onClick={checkboxClicked} name={winningName} />
  //           <label> {winningLabel} </label>
  //         </div>
  //       )
  //     );
  //   };

  const winningPointsList = () => {
    return winningPtList.map(
      ({ winningLabel, winningName, checked, winnerName, isWinnerNameBig }) => (
        <div className="list" key={winningName}>
          <div className="winningPoint">
            <input
              type="checkbox"
              onClick={checkboxClicked}
              name={winningName}
            />
            <label className="winningLabel"> {winningLabel} </label>
          </div>
          {/* <div className="winningPoint">hello</div> */}
          {winners(checked, winnerName, winningName, isWinnerNameBig)}
        </div>
      )
    );
  };

  const onNameChange = (e) => {
    const { value, name } = e.target;
    setWinnerNameVal({ winningName: name, winnerName: value });
  };

  const addWinner = () => {
    const newList = winningPtList.map((list) => {
      if (list.winningName === winnerNameVal.winningName)
        return {
          ...list,
          winnerName: winnerNameVal.winnerName,
          isWinnerNameBig: winnerNameVal.winnerName.length > 10,
        };
      else return list;
    });
    setWinningPtList(newList);
  };

  const winners = (checked, winnerName, winningName, isWinnerNameBig) => {
    if (checked && winnerName) {
      return (
        <div className="winningPointName">
          <label className="winnerNameLabel">{winnerName}</label>
          {isWinnerNameBig && (
            <>
              <div className="tooltip">
                <label>{winnerName}</label>
              </div>
            </>
          )}
        </div>
      );
    } else if (checked) {
      return (
        <div className="winningPointss">
          <input
            className="winningPointInput"
            type="text"
            name={winningName}
            onChange={onNameChange}
          />{" "}
          <button className="winningPointssBtn" onClick={addWinner}>
            ADD
          </button>
        </div>
      );
    } else {
      return <div className="winningPointEmpty"> &nbsp;</div>;
    }
  };

  //   const winners = (checked, winnerName, winningName) => {
  //     return winningPtList.map(({ checked, winnerName, winningName }) => {
  //       if (checked && winnerName) {
  //         return (
  //           <div className="winningPoint">
  //             <label>{winnerName}</label>
  //           </div>
  //         );
  //       } else if (checked) {
  //         return (
  //           <div className="winningPointss">
  //             <input type="text" name={winningName} onChange={onNameChange} />{" "}
  //             <button onClick={addWinner}>Add</button>
  //           </div>
  //         );
  //       } else {
  //         return <div className="winningPointEmpty"> &nbsp;</div>;
  //       }
  //     });
  //   };
  return (
    <div className="winningPoints">
      <header className="heading">Winning Points & Winners</header>
      <div className="winningPointsList">{winningPointsList()}</div>
    </div>
  );
};

export default WinningPoints;
