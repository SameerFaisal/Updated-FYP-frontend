import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import Images from "./images/imagejson";
import "./custom.js";

export default function WebForm() {
  return (
    <>
      <div className="container webformcontainer">
        <h2 className="h2headingplan text-center">
          <span className="fontblue">Digital is new Default.</span> Every thing
          happens on screen
        </h2>
        <div className="inner text-left">
          <div className="row">
            <div className="col-md-3">
              <div className="flex">
                <img src={Images.home.leftimage} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="relativerectangle">
                <div className="mainformcard rounded-left shadow-lg card px-0 pt-4 pb-0 mt-3 mb-3">
                  <div className="innerform">
                    {/* form start */}
                    <div className="innerformcomp1">
                      <div className="form-group">
                        <h5 className="h5form1">Project Title</h5>
                        <input
                          className="shadow p-3 form-control"
                          type="text"
                          placeholder="Default input"
                        />
                      </div>
                    </div>
                    <div className="innerformcomp2">
                      <div className="row">
                        <div className="col-md-6">
                          <h5 className="h5form1">No. of Screens</h5>
                        </div>
                        <div className="col-md-6 text-right">
                          <div className="number">
                            <span className="minus">-</span>
                            <input
                              className="counterinput"
                              type="text"
                              value="1"
                            />
                            <span className="plus">+</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="innerformcomp1">
                      <div className="screenvisual">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="screen"></div>
                            <input
                              className="shadow-sm mt-3 mb-1 form-control"
                              type="text"
                              placeholder="Title of Screen 1"
                            />
                          </div>

                          <div className="col-md-4">
                            <div className="screen"></div>
                            <input
                              className="shadow-sm mt-3 mb-1 form-control"
                              type="text"
                              placeholder="Title of Screen 2"
                            />
                          </div>
                          <div className="col-md-4">
                            <div className="screen"></div>
                            <input
                              className="shadow-sm mt-3 mb-1 form-control"
                              type="text"
                              placeholder="Title of Screen 3"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="screenvisual">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="screen"></div>
                            <input
                              className="shadow-sm mt-3 mb-1 form-control"
                              type="text"
                              placeholder="Title of Screen 1"
                            />
                          </div>

                          <div className="col-md-4">
                            <div className="screen"></div>
                            <input
                              className="shadow-sm mt-3 mb-1 form-control"
                              type="text"
                              placeholder="Title of Screen 2"
                            />
                          </div>
                          <div className="col-md-4">
                            <div className="screen"></div>
                            <input
                              className="shadow-sm mt-3 mb-1 form-control"
                              type="text"
                              placeholder="Title of Screen 3"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="rectangleimg">
                  <img src={Images.home.rectangle} alt="" />
                </div> */}
            </div>
            <div className="col-md-3">
              <div className="flex">
                <img src={Images.home.rightimage} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="buttongroups">
          <div className="row">
            <div className="col-md-6">
              
            </div>
            <div className="col-md-6">
            <div className="row">
            <div className="col-md-6">
            <button type="button" class="btn btn-outline-primary">
              Back
            </button>
            </div>
        
            <div className="col-md-6">
            <button type="button" class="btn btn-primary">
              Save and Continue
            </button>
            </div>
          </div>
          </div>
              
          </div>
          
        </div>
      </div>
      <img className="cloud" src={Images.home.cloud} alt="" />
    </>
  );
}
