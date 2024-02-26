import React, { Component } from "react";
import { IoReload } from "react-icons/io5";
import Header from "../Components/Header/Header";
class Home extends Component {
  constructor() {
    super();
    this.state = { mathal: {}, tenMathal: [] };
  }
  componentDidMount() {
    fetch("https://frantic-tan-tiara.cyclic.app/amthal/one")
      .then((Response) => Response.json())
      .then((json) => this.setState({ mathal: json }));
  }
  fetchMathal = () => {
    fetch("https://frantic-tan-tiara.cyclic.app/amthal/one")
      .then((Response) => Response.json())
      .then((json) => this.setState({ mathal: json }));
  };
  fetchAmthal = () => {
    fetch("https://frantic-tan-tiara.cyclic.app/amthal/ten")
      .then((Response) => Response.json())
      .then((json) => this.setState({ tenMathal: json }));
  };
  render() {
    return (
      <div>
        <Header />
        <div className="home_container">
          <h1>مَثَّلَ اَلْيَوْمِ</h1>
          <div style={{ display: "flex", flexDirection: "column-reverse" }}>
            <button onClick={this.fetchMathal} className="btn">
              <IoReload />
            </button>
            <p>{this.state.mathal.title}</p>
          </div>
          <br />
          <h1>اَلْمَزِيدَ مِنْ اَلْأَمْثَالِ ؟ </h1>
          <button className="button-27" onClick={this.fetchAmthal}>
            اِضْغَطْ
          </button>
          {this.state.tenMathal.map((item) => {
            return <p>{item.title}</p>;
          })}
        </div>
      </div>
    );
  }
}
export default Home;
