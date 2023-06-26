import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import React from 'react';
import 'src/l10n';
import App from './loaders/insights/loader';
// Entrypoint for compiling the app to run in insights mode.
var AnsibleHub = function () { return (React.createElement(React.StrictMode, null,
    React.createElement(I18nProvider, { i18n: i18n },
        React.createElement(App, null)))); };
// ignore unused exports default
export default AnsibleHub;
//# sourceMappingURL=entry-insights.js.map