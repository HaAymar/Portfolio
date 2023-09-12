import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {FaVuejs } from "react-icons/fa";
import {
  SiTypescript,
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiNestjs,
  SiLinux,
  SiDocker,
  SiMysql
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
 import ProgressBar from "@ramonak/react-progress-bar";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
          <DiJavascript1 />
          <ProgressBar completed = {75} bgColor = "#5D76DF" animateOnRender = {true} isLabelVisible = {false}  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <ProgressBar completed = {75} bgColor = "#5D76DF" animateOnRender = {true} isLabelVisible = {false} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <ProgressBar completed = {75} bgColor = "#5D76DF" animateOnRender = {true} isLabelVisible = {false} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <ProgressBar completed = {75} bgColor = "#5D76DF" animateOnRender = {true} isLabelVisible = {false} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <ProgressBar completed = {75} bgColor = "#5D76DF" animateOnRender = {true} isLabelVisible = {false} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <ProgressBar completed = {50} bgColor = "#5D76DF" animateOnRender = {true} isLabelVisible = {false} />
      </Col>
          <Col xs={4} md={2} className="tech-icons">
        <SiTypescript/>
        <ProgressBar completed = {75} bgColor = "#5D76DF" animateOnRender = {true} isLabelVisible = {false} />
      </Col>
          <Col xs={4} md={2} className="tech-icons">
        <SiNestjs/>
        <ProgressBar completed = {75} bgColor = "#5D76DF" animateOnRender = {true} isLabelVisible = {false} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql/>
        <ProgressBar completed = {75} bgColor = "#5D76DF" animateOnRender = {true} isLabelVisible = {false} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaVuejs/>
        <ProgressBar completed = {50} bgColor = "#5D76DF" animateOnRender = {true} isLabelVisible = {false} />
      </Col>
    </Row>
  );
}

export default Techstack;
