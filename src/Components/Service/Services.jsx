import React, { useState } from "react";
import "./service.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="service" id="services">
      <div className="title">
        <h2>Our Services</h2>
      </div>

      <div className="box">
        <div className="card">
          <div>
            <i className="fas fa-bars"></i>
            <h5>Social Management</h5>
            <div className="pra">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident, aspernatur.
              </p>
              <span className="button btn_read" onClick={() => toggleTab(1)}>
                {" "}
                Read More
              </span>
            </div>
          </div>
          <div
            className={
              toggleState === 1
                ? "services_model active-model"
                : "services_model"
            }
          >
            <div className="services_model-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services_model-close"
              ></i>
              <h3 className="services_model-title">Web Developer</h3>
              <p className="services_model-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                consequat.
              </p>

              <ul className="services_model-services grid">
                <li className="services_model-service">
                  <i className="uil uil-check-circle services_model-icon"></i>
                  <p className="services_model-info">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    consequat.
                  </p>
                </li>
                <li className="services_model-service">
                  <i className="uil uil-check-circle services_model-icon"></i>
                  <p className="services_model-info">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    consequat.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card">
          <div>
            <i className="fas fa-bars"></i>
            <h5>Social Management</h5>
            <div className="pra">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident, aspernatur.
              </p>
              <span className="button btn_read" onClick={() => toggleTab(2)}>
                {" "}
                Read More
              </span>
            </div>
          </div>
          <div
            className={
              toggleState === 2
                ? "services_model active-model"
                : "services_model"
            }
          >
            <div className="services_model-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services_model-close"
              ></i>
              <h3 className="services_model-title">Web Developer</h3>
              <p className="services_model-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident, aspernatur.
              </p>

              <ul className="services_model-services grid">
                <li className="services_model-service">
                  <i className="uil uil-check-circle services_model-icon"></i>
                  <p className="services_model-info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Provident, aspernatur.
                  </p>
                </li>
                <li className="services_model-service">
                  <i className="uil uil-check-circle services_model-icon"></i>
                  <p className="services_model-info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Provident, aspernatur.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card">
          <div>
            <i className="fas fa-bars"></i>
            <h5>Social Management</h5>
            <div className="pra">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident, aspernatur.
              </p>
              <span className="button btn_read" onClick={() => toggleTab(3)}>
                {" "}
                Read More
              </span>
            </div>
          </div>
          <div
            className={
              toggleState === 3
                ? "services_model active-model"
                : "services_model"
            }
          >
            <div className="services_model-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services_model-close"
              ></i>
              <h3 className="services_model-title">Web Developer</h3>
              <p className="services_model-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                consequat.
              </p>

              <ul className="services_model-services grid">
                <li className="services_model-service">
                  <i className="uil uil-check-circle services_model-icon"></i>
                  <p className="services_model-info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Provident, aspernatur.
                  </p>
                </li>
                <li className="services_model-service">
                  <i className="uil uil-check-circle services_model-icon"></i>
                  <p className="services_model-info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Provident, aspernatur.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
