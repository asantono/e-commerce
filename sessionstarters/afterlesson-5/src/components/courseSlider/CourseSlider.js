import React from "react";
import { courses } from "../../dummyData/courses";

const CourseSlider = () => {
  let courseCopy = [...courses];

  const courseList = courseCopy.map((el) => (
    <div key={el.position} className="course-slider__course">
      <img className="course-slider__course--img" src={el.img} alt={el.name} />
      <div className="course-slider__course--bottom">
        <div className="course-slider__course--bottom--title">{el.title}</div>
        <div className="course-slider__course--bottom--author">
          by: {el.author}
        </div>
        <div className="course-slider__course--bottom--price">{el.price}</div>
      </div>
    </div>
  ));
  return (
    <div className="course-slider">
      <div className="course-slider__title">Top Courses</div>
      <div className="course-slider__underline" />
      <div className="course-slider__container">
        <div className="course-slider__course--back">Back</div>
        <div className="course-slider__courses">{courseList} </div>
        <div className="course-slider__course--forward">Forward</div>
      </div>
    </div>
  );
};

export default CourseSlider;
