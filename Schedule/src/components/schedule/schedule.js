import React, { Component } from 'react';
import Gradient from '../gradient';
import ScheduleCourse from './scheduleCourse';
import ProgressTracker from './progressTracker';
import { connect } from 'react-redux';

class Schedule extends Component {
  renderCourses() {
    const data = this.props.courses;

    return data.map((course, index) => {
      if (course.enrolled) {
        return <ScheduleCourse {...course} key={index} />;
      }
    });
  }

  render() {
    return (
      <div className="schedule">
        <h1 className="schdule__title">My Schedule</h1>
        {this.renderCourses()}
        <ProgressTracker />
        <Gradient />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    courses: state.courses
  };
}

export default connect(mapStateToProps)(Schedule);
