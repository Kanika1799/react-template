/**
 *
 * Amountcard
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage as T } from 'react-intl';
import 'antd/dist/antd.css';
import { Card, Col, Row } from 'antd';
const Box = styled.div`
  width: 340px;
  height: 150px;
  border-radius: 4px;
  margin-top: -100px;
  background-color: transparent;
  border-color: transparent;
  box-shadow: 0 5px 6px 0 rgba(0, 0, 0, 0.06);
  margin-left: 10px;
  margin-bottom: 40px;
  .Invoice {
    width: 150px;
    height: 150px;
    background-image: linear-gradient(41deg, #3164c6 20%, #3576d8 101%);
    border-radius: 4px;
    box-shadow: 0 5px 6px 0 rgba(0, 0, 0, 0.06);
    .InvoiceToday {
      width: 90px;
      margin-top: 70px;
      margin-left: 35px;
      text-align: center;
      .Today {
        width: 60px;
        font-family: Inter;
        font-size: 40px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 0.9;
        letter-spacing: normal;
        color: white;
      }
      .Due {
        width: 50px;
        height: 60px;
        font-family: Inter;
        font-size: 12px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.29;
        letter-spacing: 0.84px;
        color: white;
      }
    }
  }
`;
const AmountCardContent = styled(Card)`
  width: 400px;
  height: 250px;
  padding: 30px;
  border-radius: 4px;
  margin-top: 80px;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.16);
  .Time {
    width: 90px;
    height: 17px;
    opacity: 0.5;
    font-family: Inter;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #222222;
    margin-top: 10px;
    margin-left: 20px;
  }
  .Fees {
    height: 17px;
    margin-left: 140px;
    margin-top: 10px;
    opacity: 1;
    font-family: Inter;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: center;
    color: #1a2940;
  }
  .TotalFees {
    height: 17px;
    margin-left: 140px;
    margin-top: 10px;
    opacity: 1;
    font-family: Inter;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: center;
    color: #1a2940;
  }
`;
const AmountCol = styled(Col)`
  margin-top: 100px;
  margin-left: 30px;
`;
function Amountcard({ dashData }) {
  return (
    <div data-testid="amountcard">
      <Row>
        <AmountCol>
          <AmountCardContent>
            <Box>
              <Row>
                <div className="Invoice">
                  <div className="InvoiceToday" style={{ marginTop: 30 }}>
                    <span className="Today">
                      <T id="today" values={{ today: dashData.today }} />
                    </span>
                    <br />
                    <span className="Due">
                      <T id="invoice_due" />
                    </span>
                  </div>
                </div>
                <div style={{ marginLeft: 25 }} className="Invoice">
                  <div className="InvoiceToday" style={{ marginTop: 30 }}>
                    <span className="Today">
                      <T id="overdue_invoice" values={{ overdue: dashData.overdue }} />
                    </span>
                    <br />
                    <span className="Due">
                      <T id="invoice_overdue" />
                    </span>
                  </div>
                </div>
              </Row>
            </Box>
            <Row>
              <span className="Time">
                <T id="in_time" />
              </span>
              <span className="Fees">
                <T id="in_time_amount" values={{ time: dashData.time }} />
              </span>
            </Row>
            <Row>
              <span className="Time">
                <T id="overdue" />
              </span>
              <span className="Fees">
                <T id="over_amount" values={{ over: dashData.over }} />
              </span>
            </Row>{' '}
            <Row>
              <span className="Time">
                <T id="late_fee" />
              </span>
              <span className="Fees">
                <T id="late_amount" values={{ late: dashData.late }} />
              </span>
              <Row>
                <span className="Time">
                  <T id="total_time" />
                </span>
                <span className="TotalFees">
                  <T id="total_fee" values={{ fee: dashData.fee }} />
                </span>
              </Row>
            </Row>
          </AmountCardContent>
        </AmountCol>
        <AmountCol>
          <AmountCardContent>
            <Box>
              <Row>
                <div className="Invoice">
                  <div className="InvoiceToday" style={{ marginTop: 30 }}>
                    <span className="Today">
                      <T id="scheduled" values={{ scheduled: dashData.scheduled }} />
                    </span>
                    <br />
                    <span className="Due">
                      <T id="invoice_schedule" />
                    </span>
                  </div>
                </div>
                <div style={{ marginLeft: 25 }} className="Invoice">
                  <div className="InvoiceToday" style={{ marginTop: 30 }}>
                    <span className="Today">
                      <T id="paid" values={{ paid: dashData.paid }} />
                    </span>
                    <br />
                    <span className="Due">
                      <T id="invoice_paid" />
                    </span>
                  </div>
                </div>
              </Row>
            </Box>
            <Row>
              <span className="Time">
                <T id="in_time" />
              </span>
              <span className="Fees">
                <T id="in_time_amount" values={{ time: dashData.time }} />
              </span>
            </Row>
            <Row>
              <span className="Time">
                <T id="overdue" />
              </span>
              <span className="Fees">
                <T id="over_amount" values={{ over: dashData.over }} />
              </span>
            </Row>{' '}
            <Row>
              <span className="Time">
                <T id="late_fee" />
              </span>
              <span className="Fees">
                <T id="late_amount" values={{ late: dashData.late }} />
              </span>
              <Row>
                <span className="Time">
                  <T id="total_time" />
                </span>
                <span className="TotalFees">
                  <T id="total_fee" values={{ fee: dashData.fee }} />
                </span>
              </Row>
            </Row>
          </AmountCardContent>
        </AmountCol>{' '}
      </Row>
    </div>
  );
}

Amountcard.propTypes = {
  dashData: PropTypes.object
};

export default memo(Amountcard);
