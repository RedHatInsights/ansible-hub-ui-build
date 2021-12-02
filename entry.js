import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { I18nProvider } from '@lingui/react';
import { i18n } from '@lingui/core';
import { init } from './store';
import App from './loaders/insights/insights-loader';
import getBaseName from './utilities/getBaseName';
import 'src/l10n';
// Entrypoint for compiling the app to run in insights production mode.
var basename = getBaseName(window.location.pathname);
ReactDOM.render(React.createElement(Provider, { store: init().getStore() },
    React.createElement(Router, { basename: basename },
        React.createElement(I18nProvider, { i18n: i18n },
            React.createElement(App, { basename: basename })))), document.getElementById('root'));
//# sourceMappingURL=entry.js.map