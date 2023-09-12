import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiLinux,
  SiDocker,
  SiFigma,
  SiAdobexd,
  SiJenkins
} from "react-icons/si";
import ProgressBar from "@ramonak/react-progress-bar";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <ProgressBar completed = {100} bgColor = "#5D76DF" animateOnRender = {true} isLabelVisible = {false}  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <ProgressBar completed = {60} bgColor = "#5D76DF" animateOnRender = {true} isLabelVisible = {false}  />
      </Col>
     <Col xs={4} md={2} className="tech-icons">
        <SiLinux/>
        <ProgressBar completed = {80} bgColor = "#5D76DF" animateOnRender = {true} isLabelVisible = {false}  />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
        <SiDocker/>
        <ProgressBar completed = {60} bgColor = "#5D76DF" animateOnRender = {true} isLabelVisible = {false}  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma/>
        <ProgressBar completed = {60} bgColor = "#5D76DF" animateOnRender = {true} isLabelVisible = {false}  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobexd/>
        <ProgressBar completed = {60} bgColor = "#5D76DF" animateOnRender = {true} isLabelVisible = {false}  />
      </Col>
       <Col xs={4} md={2} className="tech-icons">
        <SiJenkins/>
        <ProgressBar completed = {40} bgColor = "#5D76DF" animateOnRender = {true} isLabelVisible = {false}  />
      </Col>
    </Row>
  );
}

export default Toolstack;
