import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../components/Button';

storiesOf('Button2', module)
  .add('with primary', () => <Button
    onClick={action('click')}
    label="Primary Button"
  />)
  .add('with outline', () => <Button
    label="Outline Button"
    onClick={action('click')}
    style={{ background: 'transparent', border: '3px solid #fecd43' }}
  />)
  .add('with rounder corners', () => <Button
    label="Rounded Button"
    onClick={action('click')}
    style={{ borderRadius: '15px' }}
  />)
  .add('disabled', () => <Button disabled
    label="Disabled Button"
  
    style={{ background: 'gray' , border: 'gray', cursor: 'not-allowed' }}
  />)