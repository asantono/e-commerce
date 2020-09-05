import React from "react";

const CtaTop = () => {
  return (
    <div className="cta-top">
      <div className="cta-top__img" />
      <div className="cta-top__textbox">
        <div className="cta-top__textbox--headline">Automate Your Future</div>
        <div className="cta-top__textbox--story">
          Did you know, 25% of business owners work over 60 hours per week?
          Learn to work smarter, by leveraging technology.
        </div>
        <div className="cta-top__textbox--story">
          In this two week course, you will focus on the bigger picture while
          you implement the most powerful automated sales system ever created.
        </div>
        <input
          className="cta-top__textbox--button"
          type="submit"
          value="Learn The Alchemy of Automation"
        />
      </div>
    </div>
  );
};

export default CtaTop;
