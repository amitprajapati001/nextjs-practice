import React from "react";
import { images } from "../../constant/index";

const Login = () => {
  return (
    <div className="">
      <div class=" row">
        <div class="col-8 container-one">
          <div className="container-one-heading">
            <p>
              An educational platform in-line
              <br /> with the{" "}
              <span className="container-one-heading-span">
                New Education Policy.
              </span>
            </p>
          </div>

          <div className="container-one-heading-para"><p>The New Education Policy 2022 has put a strong emphasis on Early Childhood Care<br /> and Education (ECCE) and skill development. This phase, which spans from <br />conception up to eight years of age, is critical for a child's holistic development and<br /> lays the foundation for lifelong learning and well-being</p></div>
          <div className="container-one-heading-para"><p>The New Education Policy 2022 has put a strong emphasis on Early Childhood Care<br /> and Education (ECCE) and skill development. This phase, which spans from <br />conception up to eight years of age, is critical for a child's holistic development and<br /> lays the foundation for lifelong learning and well-being</p></div>
        </div>

        
        <div class="col-3 container-two ">
          <div className="image-container ">
            <img src={images.flag.default.src} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
