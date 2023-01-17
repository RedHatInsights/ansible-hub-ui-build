import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'src/l10n';
import App from './loaders/standalone/loader';
// Entrypoint for compiling the app to run in standalone mode
if (!window.location.pathname.includes(UI_BASE_PATH)) {
    // react-router v6 won't redirect to base path by default
    window.history.pushState(null, null, UI_BASE_PATH);
}
ReactDOM.render(React.createElement(React.StrictMode, null,
    React.createElement(Router, { basename: UI_BASE_PATH },
        React.createElement(I18nProvider, { i18n: i18n },
            React.createElement(App, null)))), document.getElementById('root'));
//# sourceMappingURL=entry-standalone.js.map