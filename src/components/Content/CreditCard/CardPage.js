import React from "react";

const CardPage = () => {
  return (
    <div className="cardPage-container">
      <div className="credit-card">
        <ul className="credit-card-class">
          <li className="credit-card-class-item">
            <span>NAME</span>
            <p>ALBERTO WELLS</p>
          </li>
          <li className="credit-card-class-item">
            <span>VALID FROM</span>
            <p>07/14</p>
          </li>
          <li className="credit-card-class-item">
            <span>UNTIL END</span>
            <p>10/18</p>
          </li>
        </ul>
        <p className="credit-card-no">5467 5670 7623 0945</p>
      </div>
      <div  className="credit-card-content" >
        <ul className="credit-card-content-class" >
          <li className="credit-card-content-class-item">
            <span>Enable Balance</span>
            <p>$2960</p>
          </li>
          <li className="credit-card-content-class-item">
            <span>Spent</span>
            <p>$400</p>
          </li>
          <li className="credit-card-content-class-item">
            <span>Earned </span>
            <p>$1400</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CardPage;
