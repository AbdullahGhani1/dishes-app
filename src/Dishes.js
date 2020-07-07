import React, { Component } from "react";
import "./Dishes.css"

class Dishes extends Component {
  render() {
    const {name,imgs} = this.props;

    return (
      <div className="Dishes">
      <h1>{name}</h1>
      <img src={imgs} alt=""/>
      </div>
    );
  }
}
export default Dishes;
// {/* <img src={imgSrc} /> */}
