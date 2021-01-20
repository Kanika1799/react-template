/**
 *
 * Tests for Progresschart
 *
 */

import React from 'react';
// import { fireEvent } from '@testing-library/dom'
import { renderWithIntl } from '@utils/testUtils';
import Progresschart from '../index';

describe('<Progresschart />', () => {
  it('should render and match the snapshot', () => {
    const { baseElement } = renderWithIntl(<Progresschart />);
    expect(baseElement).toMatchSnapshot();
  });

  it('should contain 1 Progresschart component', () => {
    const { getAllByTestId } = renderWithIntl(<Progresschart />);
    expect(getAllByTestId('progresschart').length).toBe(1);
  });
});
