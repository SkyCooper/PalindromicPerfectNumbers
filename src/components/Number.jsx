import React from "react";
import "./number.scss";

const Number = () => {
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
          positive divisors, excluding the number itself. <br /> For instance, 6 has
          divisors 1, 2 and 3, and 1 + 2 + 3 = 6, so 6 is a perfect number.
        </p>
      </div>
      <div className="inputs">
        <input placeholder="first number" />
        <input type="number" placeholder="second number" />
      </div>
      <div className="buttons">
        <button>List Palindrome</button>
        <button>List Perfect Number</button>
      </div>
      <div className="results">
        <textarea name="" id="" cols="15" rows="15"></textarea>
        <textarea name="" id="" cols="15" rows="15"></textarea>
      </div>
    </div>
  );
};

export default Number;
