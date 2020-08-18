import React from "react";
function HomePage() {
  return (
    <div className="body">
      <header>
        <div className="hero-text-box">
          <h1>
            Understand your audience feelings.
            <br />
            Sentimental Analysis.
          </h1>
          <a className="btn btn-full js--scroll-to-plans" href="/login">
            Get Started
          </a>
          <a
            className="btn btn-ghost js--scroll-to-start"
            target="_blank"
            href="https://towardsdatascience.com/sentiment-analysis-concept-analysis-and-applications-6c94d6f58c17"
          >
            Learn More
          </a>
        </div>
      </header>
    </div>
  );
}
export default HomePage;
