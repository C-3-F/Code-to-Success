import React, { Component } from 'react';

import Icon from '../icon';
import Arrow from '../arrow';
import Action from '../action';
import { connect } from 'react-redux';

import * as actions from '../../actions';

class Course extends Component {
  render() {
    return (
      <div className="course">
        <div className="course__title-check">
          <label className="course__title">{this.props.title}</label>
          {Icon('fas fa-check', 'course__check')}
        </div>
        <Arrow className="course__arrow" />
        <Action
          onClick={() => this.props.toggleEnrolled(this.props.id)}
          className="course__action"
        />
        <div className="course__description">
          <label>Course Description</label>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(Course);
