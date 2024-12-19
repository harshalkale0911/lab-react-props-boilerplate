import React, { Component } from "react";

class AppClass extends Component {
  render() {
    const { data } = this.props;

    return (
      <div>
        <h1>Class Component: Image Gallery</h1>
        <div style={{ display: "flex", gap: "20px" }}>
          {data.map((item) => (
            <img key={item.id} src={item.img} alt={`Elephant ${item.id}`} style={{ width: "200px", height: "150px" }} />
          ))}
        </div>
      </div>
    );
  }
}

export default AppClass;
