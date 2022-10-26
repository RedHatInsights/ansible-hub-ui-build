import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { I18nProvider } from '@lingui/react';
import { i18n } from '@lingui/core';
import { init } from './store';
import App from './loaders/insights/insights-loader';
import 'src/l10n';
// Entrypoint for compiling the app to run in insights production mode.
var AnsibleHub = function () { return (React.createElement(Provider, { store: init().getStore() },
    React.createElement(Router, { basename: UI_BASE_PATH },
        React.createElement(I18nProvider, { i18n: i18n },
            React.createElement(App, { basename: UI_BASE_PATH }))))); };
export default AnsibleHub;
//# sourceMappingURL=app-entry.js.map