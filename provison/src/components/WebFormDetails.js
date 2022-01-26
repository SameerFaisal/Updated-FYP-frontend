import React from "react";
import Images from "./images/imagejson";
import { Component } from "material";
import Dropdown from "react-bootstrap/Dropdown";

export default function WebFormDetails() {
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
                    <div className="innerformcomp1 tilescreen">
                      <h5 className="h5form1 scrtitlehead">Screen Title 1</h5>
                      <input
                        className="shadow p-3 form-control scrititle"
                        type="text"
                        placeholder="Default input"
                      />
                    </div>
                    <div className="innerformcomp1">
                      <div className="controlsection">
                        <div className="row">
                          <div className="col-md-6">
                            <Dropdown>
                              <Dropdown.Toggle
                                variant="success"
                                id="dropdown-basic"
                              >
                                TextBoxes
                              </Dropdown.Toggle>

                              <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">
                                <input class="form-control form-control-sm" type="text" placeholder="txtbox1"/>
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-2">
                                <input class="form-control form-control-sm" type="text" placeholder="txtbox2"/>
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-3">
                                <input class="form-control form-control-sm" type="text" placeholder="txtbox2"/>
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>

                            <div className="number text-right controlnumberconter">
                              <span className="minus controlcc">-</span>
                              <input
                                className="counterinput cnterblue"
                                type="text"
                                value="1"
                              />
                              <span className="plus controlcc">+</span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <Dropdown>
                              <Dropdown.Toggle
                                variant="success"
                                id="dropdown-basic"
                              >
                                ComboBoxes
                              </Dropdown.Toggle>

                              <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">
                                <input class="form-control form-control-sm" type="text" placeholder="txtbox2"/>
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-2">
                                <input class="form-control form-control-sm" type="text" placeholder="txtbox2"/>
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-3">
                                  <input class="form-control form-control-sm" type="text" placeholder="txtbox2"/>
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>

                            <div className="number text-right controlnumberconter">
                              <span className="minus controlcc">-</span>
                              <input
                                className="counterinput cnterblue"
                                type="text"
                                value="1"
                              />
                              <span className="plus controlcc">+</span>
                            </div>
                          </div>
                        </div>
                        <div className="space">

                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <Dropdown>
                              <Dropdown.Toggle
                                variant="success"
                                id="dropdown-basic"
                              >
                                CheckBoxes
                              </Dropdown.Toggle>

                              <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">
                                <input class="form-control form-control-sm" type="text" placeholder="txtbox2"/>
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-2">
                                <input class="form-control form-control-sm" type="text" placeholder="txtbox2"/>
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-3">
                                <input class="form-control form-control-sm" type="text" placeholder="txtbox2"/>
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>

                            <div className="number text-right controlnumberconter">
                              <span className="minus controlcc">-</span>
                              <input
                                className="counterinput cnterblue"
                                type="text"
                                value="1"
                              />
                              <span className="plus controlcc">+</span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <Dropdown>
                              <Dropdown.Toggle
                                variant="success"
                                id="dropdown-basic"
                              >
                                RadioButtons
                              </Dropdown.Toggle>

                              <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">
                                <input class="form-control form-control-sm" type="text" placeholder="txtbox2"/>
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-2">
                                <input class="form-control form-control-sm" type="text" placeholder="txtbox2"/>
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-3">
                                <input class="form-control form-control-sm" type="text" placeholder="txtbox2"/>
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>

                            <div className="number text-right controlnumberconter">
                              <span className="minus controlcc">-</span>
                              <input
                                className="counterinput cnterblue"
                                type="text"
                                value="1"
                              />
                              <span className="plus controlcc">+</span>
                            </div>
                          </div>
                        </div>
                        <div className="space">
                            
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <Dropdown>
                              <Dropdown.Toggle
                                variant="success"
                                id="dropdown-basic"
                              >
                                Buttons
                              </Dropdown.Toggle>

                              <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">
                                <input class="form-control form-control-sm" type="text" placeholder="txtbox2"/>
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-2">
                                <input class="form-control form-control-sm" type="text" placeholder="txtbox2"/>
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-3">
                                <input class="form-control form-control-sm" type="text" placeholder="txtbox2"/>
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>

                            <div className="number text-right controlnumberconter">
                              <span className="minus controlcc">-</span>
                              <input
                                className="counterinput cnterblue"
                                type="text"
                                value="1"
                              />
                              <span className="plus controlcc">+</span>
                            </div>
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
            <div className="col-md-6"></div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6">
                  <button type="button" class="btn btn-outline-primary">
                    Back
                  </button>
                </div>

                <div className="col-md-6">
                  <button type="button" class="btn btn-primary">
                    Proceed
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
