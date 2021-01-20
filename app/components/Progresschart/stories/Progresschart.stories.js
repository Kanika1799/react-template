/**
 *
 * Stories for Progresschart
 *
 * @see https://github.com/storybookjs/storybook
 *
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import Progresschart from '../index';

storiesOf('Progresschart').add('simple', () => <Progresschart id={text('id', 'Progresschart')} />);
