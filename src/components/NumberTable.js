import React from "react";
import "../css/NumberTable.css";

const NumberTable = ({ numbersCalled }) => {
  const isNumberCalled = (number) => numbersCalled.includes(number);
  const prevNum = (number) =>
    numbersCalled[numbersCalled.length - 2] === number;
  const currentNumber = (number) =>
    numbersCalled[numbersCalled.length - 1] === number;

  return (
    <div className="number-table">
      <table>
        <tbody>
          {Array.from({ length: 9 }, (_, rowIndex) => (
            <tr key={rowIndex}>
              {Array.from({ length: 10 }, (_, colIndex) => {
                const number = rowIndex * 10 + colIndex + 1;
                return (
                  <td
                    key={colIndex}
                    className={`${isNumberCalled(number) ? "called" : ""} ${
                      prevNum(number) ? "prevNum" : ""
                    } ${currentNumber(number) ? "currNum" : ""}`}
                  >
                    {number}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NumberTable;
