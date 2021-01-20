/**
 *
 * Stories for Amountcard
 *
 * @see https://github.com/storybookjs/storybook
 *
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import Amountcard from '../index';

storiesOf('Amountcard').add('simple', () => <Amountcard id={text('id', 'Amountcard')} />);
