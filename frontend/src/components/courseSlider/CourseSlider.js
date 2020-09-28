import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { courses, sale } from "../../dummyData/courses";
import useWindowDimensions from "../../customHooks/useWindowDimensions";

const CourseSlider = () => {
  const [courseCount, setCourseCount] = useState(0);
  const { width } = useWindowDimensions(true);
  let showCourses = 3;
  if (width <= 596) showCourses = 2;
  // if (width <= 380) showCourses = 1;
  const [courseSliderAnimate, setcourseSliderAnimate] = useState(
    "course-slider__courses"
  );

  let courseCopy = [...courses];
  courseCopy.push({
    title: "See More Courses",
    price: "varies",
    author: "our authors",
    img: require("../../imgs/books.jpg"),
    position: 9999999999999,
    id: 99999999999,
  });

  const testFunc = (e, el) => {
    e.stopPropagation();
    console.log(el.name);
  };

  const changeCourseCount = (e, forward) => {
    e.stopPropagation();

    forward
      ? setcourseSliderAnimate("course-slider__courses course-slider__slideout")
      : setcourseSliderAnimate(
          "course-slider__courses course-slider__slideout--right"
        );
    setTimeout(() => {
      if (forward) {
        setCourseCount(courseCount + showCourses);
        setcourseSliderAnimate("course-slider__courses course-slider__slidein");
      } else {
        if (courseCount - showCourses < 0) setCourseCount(0);
        else setCourseCount(courseCount - showCourses);
        setcourseSliderAnimate(
          "course-slider__courses course-slider__slidein--right"
        );
      }
    }, 150);
  };

  const courseList = courseCopy.map((el, i) => (
    <div key={el.position} onClick={() => console.log("oops")}>
      <div className="course-slider__course">
        <img
          className="course-slider__course--img"
          src={el.img}
          alt={el.name}
        />
        <div className="course-slider__course--bottom">
          <div className="course-slider__course--bottom--title">{el.title}</div>
          <div className="course-slider__course--bottom--author">
            by: {el.author}
          </div>
          {el.saleOptIn ? (
            <div className="course-slider__course--bottom--price">
              <span className="course-slider__course--bottom--strike">
                ${el.price}
              </span>{" "}
              Sale ${el.price * sale}
            </div>
          ) : (
            <div className="course-slider__course--bottom--price">
              ${el.price}
            </div>
          )}
          {el.position !== 9999999999999 ? (
            <input
              className="course-slider__course--bottom--button"
              type="submit"
              value="add to cart"
              onClick={(e) => testFunc(e, el)}
            />
          ) : null}
        </div>
      </div>
    </div>
  ));

  let activeList = [];
  switch (showCourses) {
    case 3:
      activeList = [
        courseList[courseCount],
        courseList[courseCount + 1],
        courseList[courseCount + 2],
      ];
      break;
    case 2:
      activeList = [courseList[courseCount], courseList[courseCount + 1]];
      break;
    default:
      break;
  }

  return (
    <div className="course-slider">
      <div className="course-slider__title">Top Courses</div>
      <div className="course-slider__underline" />
      <div className="course-slider__container">
        {courseCount === 0 ? (
          <div />
        ) : (
          <div
            className="course-slider__course--back"
            onClick={(e) => changeCourseCount(e)}
          >
            <FaArrowLeft />
          </div>
        )}
        <div className={courseSliderAnimate}>{activeList}</div>
        {courseCount + showCourses >= courseCopy.length ? null : (
          <div
            className="course-slider__course--forward"
            onClick={(e) => changeCourseCount(e, true)}
          >
            <FaArrowRight />
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseSlider;
