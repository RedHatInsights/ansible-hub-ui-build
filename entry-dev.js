import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { init } from './store';
import App from './loaders/insights/insights-loader';
import logger from 'redux-logger';
import getBaseName from './utilities/getBaseName';
// Entrypoint for compiling the app to run in insights dev mode.
var basename = getBaseName(window.location.pathname);
ReactDOM.render(React.createElement(Provider, { store: init(logger).getStore() },
    React.createElement(Router, { basename: basename },
        React.createElement(App, { basename: basename }))), document.getElementById('root'));
//# sourceMappingURL=entry-dev.js.map