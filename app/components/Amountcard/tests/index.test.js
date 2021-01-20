/**
 *
 * Tests for Amountcard
 *
 */

import React from 'react';
// import { fireEvent } from '@testing-library/dom'
import { renderWithIntl } from '@utils/testUtils';
import Amountcard from '../index';
import mockData from '@services/data.json';

describe('<Amountcard />', () => {
  it('should render and match the snapshot', () => {
    const { data } = mockData;

    const { baseElement } = renderWithIntl(<Amountcard dashData={data} />);
    expect(baseElement).toMatchSnapshot();
  });

  it('should contain 1 Amountcard component', () => {
    const { data } = mockData;
    const { getAllByTestId } = renderWithIntl(<Amountcard dashData={data} />);
    expect(getAllByTestId('amountcard').length).toBe(1);
  });
});
