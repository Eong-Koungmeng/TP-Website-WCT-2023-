import React from "react";
import "./AboutUsPage.scss";
import image from "../../asset/minion.jpg";

function AboutUsPage() {
  return (
    <div className="about-us-container">
      <h2>About Us</h2>
      <div className="content-wrapper">
        <div className="image-container">
          <img
            src={image}
            alt="Welcome to our About Us page! Learn more about our company and mission."
            className="about-us-image"
          />
        </div>
        <div className="content-container">
          <p>
            A ticket purchasing website is an online platform that allows users
            to browse, select, and purchase tickets for various events,
            activities, transportation services. Visit our{" "}
            {/* <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              website
            </a>{" "}
            for more information. */}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
