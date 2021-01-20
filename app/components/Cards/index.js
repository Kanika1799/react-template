/**
 *
 * Cards
 *
 */
import React, { memo } from 'react';
// import PropTypes from 'prop-types'
import { FormattedMessage as T } from 'react-intl';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Card, Col, Row } from 'antd';
import invoice from '@images/ic-invoices-added.svg';
import bank from '@images/bank-default.png';
import verified from '@images/ic-verified.png';
import error from '@images/ic-error.svg';
import payments from '@images/ic-upcoming-payments.svg';
const CardDiv = styled.div`
  .IconCard {
    width: 255px;
    height: 120px;
    padding: 0px;
    border-radius: 4px;
    margin-left: 32px;
    margin-top: 20px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.16);
    .Number {
      color: #1a2930;
      font-family: Inter;
      font-weight: 500;
      font-style: normal;
      font-size: 20px;
      margin-top: 5px;
    }
    .Heading {
      color: gray;
      width: 150px;
      font-size: 12px;
    }
    .Link {
      font-size: 9px;
      widht: 160px;
      text-decoration: underline;
      color: #519dd9;
    }
    .CardColumn {
      width: 120px;
    }
  }
`;

function Cards() {
  return (
    <CardDiv data-testid="cards" className="site-card-wrapper">
      <Row>
        <Card className="IconCard">
          <Row>
            <Col>
              <img src={invoice} />
            </Col>
            <Col className="CardColumn">
              <div className="Number">
                <T id="2345" />
              </div>
              <div className="Heading">
                <T id="Invoices" />
              </div>
              <div className="Link">
                <T id="Add_invoices" />{' '}
              </div>
            </Col>
          </Row>
        </Card>

        <Card className="IconCard">
          <Row>
            <Col>
              <img src={bank} />
            </Col>
            <Col className="CardColumn">
              <div className="Number">
                <T id="05" />
              </div>
              <div className="Heading">
                <T id="Bank" />
              </div>
              <div className="Link">
                <T id="Add_bank" />{' '}
              </div>
            </Col>
          </Row>
        </Card>

        <Card className="IconCard">
          <Row>
            <Col>
              <img src={verified} />
            </Col>
            <Col className="CardColumn">
              <div className="Number">
                <T id="15" />
              </div>
              <div className="Heading">
                <T id="Unverified" />
              </div>
              <div className="Link">
                <T id="Verify" />{' '}
              </div>
            </Col>
          </Row>
        </Card>

        <Card className="IconCard">
          <Row>
            <Col>
              <img src={error} />
            </Col>
            <Col className="CardColumn">
              <div className="Number">
                <T id="03" />
              </div>
              <div className="Heading">
                <T id="Transactions" />
              </div>
              <div className="Link">
                <T id="View" />{' '}
              </div>
            </Col>
          </Row>
        </Card>

        <Card className="IconCard">
          <Row>
            <Col>
              <img src={payments} />
            </Col>
            <Col className="CardColumn">
              <div className="Number">
                <T id="$2345" />
              </div>
              <div className="Heading">
                <T id="Upcoming" />
              </div>
              <div className="Link">
                <T id="View_invoice" />{' '}
              </div>
            </Col>
          </Row>
        </Card>
      </Row>
    </CardDiv>
  );
}

Cards.propTypes = {};

export default memo(Cards);
