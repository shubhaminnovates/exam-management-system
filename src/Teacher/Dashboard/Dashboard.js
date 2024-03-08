import React from "react";
import { Row, Col } from "antd";
import AssignedTests from "./AssignedTests";
import "./Dashboard.css";

function Dashboard(props) {
  const trimLength = 8;

  return (
    <>
      <div className="container dashboard">
        <Row gutter={[48, 10]} justify="center">
          <Col className="gutter-row" xs={24} sm={24} md={9} xl={9}>
            <AssignedTests trimLength={trimLength} />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
