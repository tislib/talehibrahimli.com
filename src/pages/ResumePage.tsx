import React from "react";
import { WebsiteBody } from "../components/WebsiteBody";

export const ResumePage = () => {
  const downloadResume = () => {
    const windowFrame = window.open("/resume-frame");
    windowFrame?.print();
  };

  return (
    <WebsiteBody>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="content center">
                <a
                  href="javascript:;"
                  onClick={downloadResume}
                  className="btn btn--dark btn--rounded btn--w-icon"
                >
                  Download resume
                </a>
                <iframe className="resumeFrameContainer" src="/resume-frame" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </WebsiteBody>
  );
};
