import React, { Component } from "react";

import Icon from "../icon";
import Arrow from "../arrow";
import Action from "../action";

class Course extends Component {
  render() {
    return (
      <div className="course">
        <div className="course__title-check">
          <label className="course__title">Problem Solving</label>
          {Icon("fas fa-check", "course__check")}
        </div>
        <Arrow className="course__arrow" />
        <Action className="course__action" />
        <div className="course__description">
          <label>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            mollis blandit enim vel sagittis. Proin pharetra interdum metus
            hendrerit laoreet. Morbi vel lectus sed tellus aliquam pellentesque
            non vitae velit. Donec a eros scelerisque quam venenatis rhoncus.
          </label>
        </div>
      </div>
    );
  }
}

export default Course;
