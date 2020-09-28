import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { courses } from "../../dummyData/courses";

const CourseSlider = () => {
  const [courseCount, setCourseCount] = useState(0);
  const [courseSliderAnimate, setCourseSliderAnimate] = useState(
    "course-slider__courses"
  );
  let showCourses = 3;
  let courseCopy = [...courses];

  const changeCourseCount = (e, forward) => {
    e.stopPropagation();
    forward
      ? setCourseSliderAnimate("course-slider__courses course-slider__slideout")
      : setCourseSliderAnimate(
          "course-slider__courses course-slider__slideout-right"
        );
    setTimeout(() => {
      if (forward) {
        setCourseCount(courseCount + showCourses);
        setCourseSliderAnimate("course-slider__courses course-slider__slidein");
      } else {
        setCourseCount(courseCount - showCourses);
        setCourseSliderAnimate(
          "course-slider__courses course-slider__slidein-right"
        );
      }
    }, 150);
  };

  const courseList = courseCopy.map((el) => (
    <div key={el.position} className="course-slider__course">
      <img className="course-slider__course--img" src={el.img} alt={el.name} />
      <div className="course-slider__course--bottom">
        <div className="course-slider__course--bottom--title">{el.title}</div>
        <div className="course-slider__course--bottom--author">
          by: {el.author}
        </div>
        <div className="course-slider__course--bottom--price">{el.price}</div>
        <input
          className="course-slider__course--bottom--button"
          type="submit"
          value="add to cart"
        />
      </div>
    </div>
  ));

  let activeList = [];
  showCourses === 3
    ? (activeList = [
        courseList[courseCount],
        courseList[courseCount + 1],
        courseList[courseCount + 2],
      ])
    : (activeList = [courseList[courseCount], courseList[courseCount + 1]]);

  return (
    <div className="course-slider">
      <div className="course-slider__title">Top Courses</div>
      <div className="course-slider__underline" />
      <div className="course-slider__container">
        <div
          className="course-slider__course--back"
          onClick={(e) => changeCourseCount(e)}
        >
          <FaArrowLeft />
        </div>
        <div className={courseSliderAnimate}>{activeList}</div>
        <div
          className="course-slider__course--forward"
          onClick={(e) => changeCourseCount(e, true)}
        >
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
};

export default CourseSlider;
