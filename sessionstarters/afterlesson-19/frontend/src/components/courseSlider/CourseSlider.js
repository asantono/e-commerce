import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { courses, sale } from "../../dummyData/courses";
import useWindowSize from "../../customHooks/useWindowSize";
import { useDispatch } from "react-redux";
import { setAlert } from "../../redux/actions/alertActions";

const CourseSlider = () => {
  const [courseCount, setCourseCount] = useState(0);
  const [courseSliderAnimate, setCourseSliderAnimate] = useState(
    "course-slider__courses"
  );
  const { width } = useWindowSize();

  let showCourses = 3;
  if (width <= 596) showCourses = 2;

  let courseCopy = [...courses];

  const dispatch = useDispatch();

  const makeAlert = (el) => {
    dispatch(setAlert(el.title));
  };

  courseCopy.push({
    title: "See More Courses",
    price: " varies",
    author: "our authors",
    img: require("../../imgs/books.jpg"),
    position: 999999999999,
    id: 999999999999,
  });

  const changeCourseCountBack = (e) => {
    e.stopPropagation();
    setCourseSliderAnimate(
      "course-slider__courses course-slider__slideout-right"
    );
    setTimeout(() => {
      setCourseCount(courseCount - showCourses);
      setCourseSliderAnimate(
        "course-slider__courses course-slider__slidein-right"
      );
    }, 150);
  };

  const changeCourseCountForward = (e) => {
    e.stopPropagation();
    setCourseSliderAnimate("course-slider__courses course-slider__slideout");
    setTimeout(() => {
      setCourseCount(courseCount + showCourses);
      setCourseSliderAnimate("course-slider__courses course-slider__slidein");
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

        {el.saleOptIn && sale ? (
          <div className="course-slider__course--bottom--price">
            <span className="course-slider__course--bottom--strike">
              ${el.price}
            </span>
            Sale ${el.price * sale}
          </div>
        ) : (
          <div className="course-slider__course--bottom--price">
            ${el.price}
          </div>
        )}
        {el.position === 999999999999 ? (
          <div />
        ) : (
          <input
            className="course-slider__course--bottom--button"
            type="submit"
            value="add to cart"
            onClick={() => makeAlert(el)}
          />
        )}
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
        {courseCount === 0 ? (
          <div />
        ) : (
          <div
            className="course-slider__course--back"
            onClick={(e) => changeCourseCountBack(e)}
          >
            <FaArrowLeft />
          </div>
        )}
        <div className={courseSliderAnimate}>{activeList}</div>
        {courseCount + showCourses >= courseCopy.length ? (
          <div />
        ) : (
          <div
            className="course-slider__course--forward"
            onClick={(e) => changeCourseCountForward(e)}
          >
            <FaArrowRight />
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseSlider;
