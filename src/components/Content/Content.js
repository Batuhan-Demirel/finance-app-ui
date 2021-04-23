import React , {useState} from "react";
import ActiviteCard from "./Activites/ActiviteCard";
import Credit from "./CreditCard/Card";
import Doughnut from "./Reports/Doughnut";
import LineGraph from "./Reports/LineGraph";

const Content = () => {

const [date, setDate] = useState("year")

const handleChange = (e)=>{
  setDate(e.target.value)
}
  return (
    <div className="content-container">
      <div className="content-header">
        <div className="content-title">
          <h1>Hello Alberto Wells </h1>
          <p>Welcome back !</p>
        </div>
        <div className="search">
          <div class="icon">
            <img src="./img/search.svg" alt="" />
          </div>
          <input type="text" placeholder="Search .." />
        </div>
      </div>
      <div className="content-main">
        <div className="content-start">
          <div className="content-start-head">
            <div className="header-text">
              <h2> Transfer money to Your Bank</h2>
              <div className="header-text-card">
                <div className="creditCard1">
                  <img width="40" src="./img/card.svg" alt="" />
                </div>
                <div className="creditCard2">
                  <img width="40" src="./img/card.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="header-img">
              <img src="./img/human.png" alt="header" />
            </div>
          </div>
          <div className="content-start-content">
            <div className="content-start-content-activite">
              <h2 className="activite-title">Top Activites</h2>
              <div className="activite-list">
                <ActiviteCard
                  color="red"
                  title="Utility"
                  date="08 Apr. 2.30pm"
                  price="- $150"
                />
                <ActiviteCard
                  color="green"
                  title="Transfered"
                  date="07 Apr. 4.30pm"
                  price="+ $150"
                />
                <ActiviteCard
                  color="red"
                  title="Food"
                  date="07 Apr. 3.30pm"
                  price="- $150"
                />
                <ActiviteCard
                  color="red"
                  title="Beauty"
                  date="06 Apr. 8.30pm"
                  price="- $150"
                />
                <ActiviteCard
                  color="green"
                  title="Transfered"
                  date="06 Apr. 6.30pm"
                  price="+ $150"
                />
                <ActiviteCard
                  color="green"
                  title="Transfered"
                  date="04 Apr. 5.30pm"
                  price="+ $150"
                />
                <ActiviteCard
                  color="red"
                  title="Beauty"
                  date="06 Apr. 8.30pm"
                  price="- $150"
                />
                <ActiviteCard
                  color="red"
                  title="Beauty"
                  date="06 Apr. 8.30pm"
                  price="- $150"
                />
              </div>
            </div>
            <div className="content-start-content-card">
              <Credit />
            </div>
          </div>
        </div>
        <div className="content-report">
          <div className="report-footer">
            <h2 className="report-title">Reports</h2>
            <select value={date} onChange={handleChange} >
              <option value="year">Year</option>
              <option value="week">Week</option>
            </select>
          </div>
          <div className="report-main">
            <div className="line-container">
              <LineGraph data={date} />
            </div>
            <div className="doughnut-container">
              <div className="doughnut">
                <Doughnut data={date} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
