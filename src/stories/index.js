import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import ProgressBar from '../components/progress-bar/progress-bar';
import '../components/progress-bar/progress-bar.css';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Atoms/Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('ProgressBar', module)
  .add('skills', () => (
    <ul id="skills">
      <li>
        <ProgressBar className="html">HTML</ProgressBar>
      </li>
    </ul>
  )
);
