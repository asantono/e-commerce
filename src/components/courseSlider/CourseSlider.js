import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import useWindowDimensions from "../../customHooks/useWindowDimensions";

const CourseSlider = () => {
  const [courseCount, setCourseCount] = useState(0);
  const { width } = useWindowDimensions(true);
  let showCourses = width < 596 ? 2 : 3;
  const [courseSliderAnimate, setcourseSliderAnimate] = useState(
    "course-slider__courses"
  );
  let pointerBackClass =
    courseSliderAnimate === "course-slider__courses"
      ? "course-slider__course--back"
      : "course-slider__course--back course-slider__opacity";

  let pointerForwardClass =
    courseSliderAnimate === "course-slider__courses"
      ? "course-slider__course--forward"
      : "course-slider__course--forward course-slider__opacity";

  const sale = 0.1;

  const courses = [
    {
      name: "The Alchemy of Automation",
      img: require("../../imgs/alchemy.jpg"),
      author: "Doug Funny",
      price: 3900,
      saleOptIn: true,
      position: 0,
      id: 0,
    },
    {
      name: "Small Business Accelerator",
      img: require("../../imgs/accelerator.jpg"),
      author: "Corey Matthews",
      price: 2300,
      sale: 90,
      position: 1,
      id: 1,
    },
    {
      name: "The Digital Nomads Guide To The Galaxy",
      img: require("../../imgs/airport.jpg"),
      author: "Aubrey Plaza",
      price: 2900,
      saleOptIn: true,
      position: 2,
      id: 2,
    },
    {
      name: "The Employees Guide To Firing Your Boss",
      img: require("../../imgs/laptop.jpg"),
      author: "Adam Demamp",
      saleOptIn: true,
      price: 1200,
      position: 3,
      id: 3,
    },
  ];

  courses.push({
    name: "See More Courses",
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
        setCourseCount(courseCount - showCourses);
        setcourseSliderAnimate(
          "course-slider__courses course-slider__slidein--right"
        );
      }
    }, 150);
  };

  const courseList = courses.map((el, i) => (
    <div key={el.position} onClick={() => console.log("oops")}>
      <div className="course-slider__course">
        <img
          className="course-slider__course--img"
          src={el.img}
          alt={el.name}
        />
        <div className="course-slider__course--bottom">
          <div className="course-slider__course--bottom--title">{el.name}</div>
          <div className="course-slider__course--bottom--author">
            by: {el.author}
          </div>
          {el.saleOptIn ? (
            <div className="course-slider__course--bottom--price">
              <span className="course-slider__course--bottom--strike">
                ${el.price}
              </span>
              {"   "}Sale: ${el.price * sale}
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
      {i === courseCount && i ? (
        <div className={pointerBackClass} onClick={(e) => changeCourseCount(e)}>
          <FaArrowLeft />
        </div>
      ) : null}
      {i === courseCount + showCourses - 1 && courses[i] ? (
        <div
          className={pointerForwardClass}
          onClick={(e) => changeCourseCount(e, true)}
        >
          <FaArrowRight />
        </div>
      ) : null}
    </div>
  ));

  const activeList =
    showCourses === 3
      ? [
          courseList[courseCount],
          courseList[courseCount + 1],
          courseList[courseCount + 2],
        ]
      : [courseList[courseCount], courseList[courseCount + 1]];

  return (
    <div className="course-slider">
      <div className="course-slider__title">Top Courses</div>
      <div className="course-slider__underline" />
      <div className={courseSliderAnimate}>{activeList}</div>
    </div>
  );
};

export default CourseSlider;
