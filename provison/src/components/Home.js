import React from "react";
import Images from "./images/imagejson";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faHistory } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default function Home() {
  return (
<>
<div className="bodyHome">
      <div className="container contianercenter">
        <div className="card shadow-lg row align-items-center text-center">
          <h2 className="h2headingplan">Choose the plan that works for you!</h2>
          <h3 className="subheadplan">
            Wheter it is visualizing your UI ideas or designing entire products
            with your team, <br /> ProVision covers it all
          </h3>

          <div className="parentnmain">
            <div className="row">
              <div className="col-md-6 cardcol">
                <div className="card shadow parentcards align-items-center">
                <Link to="/newform">
                  <div className="rectanglecreatenew">
                    <FontAwesomeIcon
                      className="createnewicon"
                      icon={faPlusCircle}
                    />
                  </div>
                  </Link>
                  <img
                    className="subtractionimages"
                    src={Images.home.subtraction}
                  />
                </div>
                <h4 className="h4headingcu">Create New</h4>
              </div>
              <div className="col-md-6 cardcol">
                <div className="card shadow parentcards align-items-center">
                    
                  <div className="rectangleupdate">
                    <FontAwesomeIcon className="historyicon" icon={faHistory} />
                  </div>
                  
                  <img
                    className="subtractionimages"
                    src={Images.home.subtraction}
                  />
                </div>
                <h4 className="h4headingcu">Update Existing</h4>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <img className="ovalimage" src={Images.home.oval} alt="" />
    </div>
    
    </>
  );
}
