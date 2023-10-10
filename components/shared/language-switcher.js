var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { Trans, t } from '@lingui/macro';
import { DropdownItem, DropdownSeparator } from '@patternfly/react-core';
import React from 'react';
import { StatefulDropdown } from 'src/components';
import { availableLanguages, language, languageNames } from 'src/l10n';
export function LanguageSwitcher(_props) {
    var currentLanguage = languageNames[language] || language;
    return (React.createElement(StatefulDropdown, { ariaLabel: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Select language"], ["Select language"]))), "data-cy": 'language-dropdown', defaultText: currentLanguage, toggleType: 'icon', items: __spreadArray(__spreadArray([
            React.createElement(DropdownItem, { isDisabled: true, key: 'current' }, window.localStorage.override_l10n ? (React.createElement(Trans, null,
                currentLanguage,
                " (current)")) : (React.createElement(Trans, null,
                currentLanguage,
                " (browser default)"))),
            React.createElement(DropdownSeparator, { key: 'separator1' })
        ], availableLanguages.map(function (lang) { return (React.createElement(DropdownItem, { key: lang, href: "?lang=".concat(lang), isDisabled: lang === language }, languageNames[lang] || lang)); }), true), [
            React.createElement(DropdownSeparator, { key: 'separator2' }),
            React.createElement(DropdownItem, { key: 'current', href: '?lang=', isDisabled: !window.localStorage.override_l10n },
                React.createElement(Trans, null, "Reset to browser defaults")),
        ], false) }));
}
var templateObject_1;
//# sourceMappingURL=language-switcher.js.map