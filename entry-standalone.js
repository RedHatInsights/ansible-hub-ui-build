import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { I18nProvider } from '@lingui/react';
import { i18n } from '@lingui/core';
import App from './loaders/standalone/standalone-loader';
import 'src/l10n';
// Entrypoint for compiling the app to run in standalone mode
ReactDOM.render(React.createElement(React.StrictMode, null,
    React.createElement(Router, { basename: UI_BASE_PATH },
        React.createElement(I18nProvider, { i18n: i18n },
            React.createElement(App, null)))), document.getElementById('root'));
//# sourceMappingURL=entry-standalone.js.map