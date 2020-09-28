import React from "react";
import { withRouter } from "react-router-dom";
import { courses } from "../../dummyData/courses";

const CtaTop = (props) => {
  const { tagline, adText } = courses[0];
  const pushToProduct = () => {
    props.history.push("./product");
  };
  return (
    <div className="cta-top">
      <div className="cta-top__img" />
      <div className="cta-top__textbox">
        <div className="cta-top__textbox--headline">Automate Your Future</div>
        <div className="cta-top__textbox--story">
          {adText}
          {/* Did you know, 25% of business owners work over 60 hours per week?
          Learn to work smarter, by leveraging technology. */}
        </div>
        <div className="cta-top__textbox--story">
          {tagline}
          {/* In this two week course, you will focus on the bigger picture while
          you implement the most powerful automated sales system ever created. */}
        </div>
        <input
          className="cta-top__textbox--button"
          type="submit"
          value="Learn The Alchemy of Automation"
          onClick={() => pushToProduct()}
        />
      </div>
    </div>
  );
};

export default withRouter(CtaTop);
