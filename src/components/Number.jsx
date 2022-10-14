import React from "react";
import "./number.scss";
import { useState } from "react";
import { v1 as uuid } from "uuid";

  let lowNumber;
  let highNumber;
const Number = () => {
  const [numberPoli, setNumberPoli] = useState([]);
  const [numberPer, setNumberPer] = useState([]);

  const changelowNumber = (e) => {
    lowNumber = e.target.value;
    console.log(lowNumber);
  };
  const changehighNumber = (e) => {
    highNumber = e.target.value;
    console.log(highNumber);
  };

  const listPalindrome = () => {
    let array = [];
    for (let i = lowNumber; i < highNumber; i++) {
      if (String(i) === String(i).split("").reverse().join("")) {
        array.push(i);
      }
    }
    setNumberPoli(array);
    // return array
  };
  // console.log(listPalindrome());

  const listPerfect = () => {
    let array = [];
    for (let i = lowNumber; i < highNumber; i++) {
      let temp = 0;
      for (let j = 1; j <= i / 2; j++) {
        if (i % j === 0) {
          temp += j;
        }
      }
      if ((temp === i) & (temp !== 0)) {
        array.push(temp);
      }
    }
    setNumberPer(array);

    // console.log(array);
  };

  // console.log(listPerfect());

  return (
    <div className="container">
      <h1>Palindromic and Perfect Numbers</h1>
      <div className="explain">
        <p>
          <span>What is the palindromic numbers? </span> <br />A palindromic
          number is a number (such as 16461) that remains the same when its
          digits are reversed. In other words, it has reflectional symmetry
          across a vertical axis. <br /> The first 30 palindromic numbers (in
          decimal) are:0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55, 66, 77,
          88, 99, 101, 111, 121, 131, 141, 151, 161, 171, 181, 191, 202,
        </p>
        <br /> <hr />
        <br />
        <p>
          <span>What is perfect numbers?</span> <br /> In number theory, a
          perfect number is a positive integer that is equal to the sum of its
          positive divisors, excluding the number itself. <br /> For instance, 6
          is a perfect number because has divisors 1, 2 and 3, and 1 + 2 + 3 =
          6, AND 28 is a perfect number because (1 + 2 + 4 + 7 + 14) = 28
        </p>
      </div>
      <div className="inputs">
        <input onChange={changelowNumber} placeholder="first number" />
        <input
          onChange={changehighNumber}
          type="number"
          placeholder="second number"
        />
      </div>
      <div className="buttons">
        <button onClick={listPalindrome}>List Palindrome</button>
        <button onClick={listPerfect}>List Perfect Number</button>
      </div>
      <div className="results">
        <div>
          {numberPoli.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <div>
          {numberPer.map((item) => (
            <p key={uuid()}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Number;
