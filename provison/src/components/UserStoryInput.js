import React from "react";
import Images from "./images/imagejson";
import { Form } from "react-bootstrap";

export default function UserStoryInput() {
  return (
    <>
      <div className="container webformcontainer">
        <h2 className="h2headingplan text-center">
          <span className="fontblue">Digital is new Default.</span> Every thing
          happens on screen
        </h2>
        <div className="inner text-left">
          <div className="row">
            <div className="col-md-2">
              <div className="flex">
                <img src={Images.home.leftimage} alt="" />
              </div>
            </div>
            <div className="col-md-7">
              <div className="textbox">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    as="textarea"
                    rows={14}
                    placeholder="Type User Story Here ...."
                  />
                </Form.Group>
                <div className="part2">
                  <div class="mb-3 px-10">
                   <button class="btn btn-primary" type="file">file</button>
                  </div>
                </div>
              </div>
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
