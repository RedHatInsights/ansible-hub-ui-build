import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'src/l10n';
import App from './loaders/standalone/loader';
// Entrypoint for compiling the app to run in standalone mode
if (!window.location.pathname.startsWith(UI_BASE_PATH)) {
    // react-router v6 won't redirect to base path by default
    // also support old-galaxy /namespace/name/ urls
    var originalPath = window.location.pathname;
    var newPath = originalPath.match(/^\/(\w+)\/(\w+)\/?$/)
        ? UI_BASE_PATH.replace(/\/$/, '/dispatch/?pathname=' + encodeURIComponent(originalPath))
        : UI_BASE_PATH;
    window.history.pushState(null, null, newPath);
}
ReactDOM.render(React.createElement(React.StrictMode, null,
    React.createElement(Router, { basename: UI_BASE_PATH },
        React.createElement(I18nProvider, { i18n: i18n },
            React.createElement(App, null)))), document.getElementById('root'));
//# sourceMappingURL=entry-standalone.js.map