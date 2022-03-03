import React, { Component } from "react";
import Button from "./Button";

class ColorGen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newColor: [],
    };
  }
  getNewColor() {
    let symbols, color;
    symbols = "0123456789ABCDEF";
    color = "#";
    for (let i = 0; i < 6; i++) {
      color = color + symbols[Math.floor(Math.random() * 16)];
    }
    this.setState({
      newColor: [...this.state.newColor,color],
    });
    console.log(this.state.newColor);
  }

  render() {
    return (
      <div className="countainer">
        <ul>
          {this.state.newColor.map((coloring) => (
            <li>
              <span style={{ color: coloring }}>■</span>
              {coloring}
            </li>
          ))}
        </ul>
        
          <Button
            title="Generation New Color"
            ClickHandeler={() => this.getNewColor()}
          />
        
      </div>
    );
  }
}

export default ColorGen;
