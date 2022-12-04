import React, { Component } from "react";
import "./Tour.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";

export default class Tour extends Component {
  state = {
    showInfo: false,
  };
  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };
  render() {
    const { id, city, img, name, info } = this.props.obj;
    const { obj2 } = this.props;
    return (
      <article className="tour" onClick={this.handleTour}>
        <div className="img-container">
          <img src={img} alt="Image" />
          <span
            className="close-btn"
            onClick={() => {
              obj2(id);
            }}
          >
            <FontAwesomeIcon icon={solid("square-xmark")} />
          </span>
        </div>

        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info{""}
            <span onClick={this.handleInfo}>
              <FontAwesomeIcon icon={solid("square-caret-down")} />
            </span>
            {this.state.showInfo && <p>{info}</p>}
          </h5>
        </div>
      </article>
    );
  }
}
