import React, { Component } from "react";
import "./Dishes.css"

class Dishes extends Component {
  render() {
    const {name,imgs} = this.props;

    return (
      <div className="Dishes">
      <h1 className="Dishes-tittle">{name}</h1>
      <div className="Dishes-image">
      <img src={imgs} alt=""/>

      </div>
      </div>
    );
  }
}
export default Dishes;
// {/* <img src={imgSrc} /> */}
