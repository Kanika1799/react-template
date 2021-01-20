/**
 *
 * Progresschart
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types'
import styled from 'styled-components';
import { FormattedMessage as T } from 'react-intl';
import 'antd/dist/antd.css';
import { Card, Progress, Row, Col } from 'antd';
const PieCard = styled(Card)`
  .DonutPie {
    width: 200px;
    height: 50px;
  }
  width: 540px;
  margin-left: 20px;
  height: 320px;
  padding: 3px 16px 28px 17px;
  border-radius: 8px;
  margin-top: 90px;
  .HeadingDiv {
    width: 150px;
    .expense {
      width: 89px;
      height: 40px;
      margin: 1px 80px 3px 0;
      font-family: Inter;
      font-size: 12px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.25;
      letter-spacing: 0.96px;
      text-align: left;
      color: #1a2940;
    }
    .category {
      width: 83px;
      height: 20px;
      margin: 3px 86px 23px 0;
      font-family: Inter;
      font-size: 12px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.25;
      letter-spacing: normal;
      text-align: left;
      color: #3164c6;
    }
  }
  .Payroll {
    height: 20px;
    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: left;
    color: #222222;
  }
  .PieCol {
    margin-top: 90px;
  }
`;
const ColorSpan = styled.div`
  width: 20px;
  height: 0;
  margin: 10px 10px 0 0;
  border: solid 1px #0a36cc;
  background-color: #0a36cc;
`;
const PieDiv = styled.div`
  margin-top: 30px;
  margin-left: 30px;
`;
function Progresschart() {
  return (
    <div data-testid="progresschart">
      <PieDiv>
        <PieCard>
          <Row>
            <Col>
              <div className="HeadingDiv">
                <span className="expense">
                  <T id="my_expenses" />
                </span>
                <span className="category">
                  <T id="category" />
                </span>
              </div>
            </Col>
            <Col className="PieCol">
              <Progress
                className="DonutPie"
                type="circle"
                strokeColor={{
                  '0%': '#0a36cc',
                  '75%': '#46beee'
                }}
                percent={'1496.86'}
              />
            </Col>
            <Col className="PieCol">
              <Row>
                <ColorSpan></ColorSpan>
                <span className="Payroll"></span>
                <T id="payroll" />
              </Row>
              <Row>
                <ColorSpan></ColorSpan>
                <span className="Payroll"></span>
                <T id="leisure" />
              </Row>
              <Row>
                <ColorSpan></ColorSpan>
                <span className="Payroll"></span>
                <T id="monthly" />
              </Row>
              <Row>
                <ColorSpan></ColorSpan>
                <span className="Payroll"></span>
                <T id="uncategorized" />
              </Row>
            </Col>
          </Row>
        </PieCard>
      </PieDiv>
    </div>
  );
}

Progresschart.propTypes = {};

export default memo(Progresschart);
