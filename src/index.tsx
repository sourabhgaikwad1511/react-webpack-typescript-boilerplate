import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import './style.scss';

const ROOT = document.getElementById('container');
ReactDOM.render(<App name='Web Star'/>, ROOT);