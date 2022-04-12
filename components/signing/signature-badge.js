var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { t } from '@lingui/macro';
import { Label } from '@patternfly/react-core';
import React from 'react';
import { CheckCircleIcon, ExclamationTriangleIcon, } from '@patternfly/react-icons';
import { useContext } from 'src/loaders/app-context';
export var SignatureBadge = function (_a) {
    var _b, _c;
    var _d = _a.signState, signState = _d === void 0 ? 'unsigned' : _d, _e = _a.isCompact, isCompact = _e === void 0 ? false : _e, props = __rest(_a, ["signState", "isCompact"]);
    var signingEnabled = ((_c = (_b = useContext()) === null || _b === void 0 ? void 0 : _b.featureFlags) === null || _c === void 0 ? void 0 : _c.collection_signing) === true;
    if (!signingEnabled) {
        return null;
    }
    var text = function () {
        switch (signState) {
            case 'signed':
                return t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Signed"], ["Signed"])));
            case 'unsigned':
                return t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Unsigned"], ["Unsigned"])));
            case 'partial':
                return t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Partially signed"], ["Partially signed"])));
        }
    };
    return (React.createElement(Label, __assign({ variant: 'outline', color: signState === 'signed' ? 'green' : 'orange', icon: signState === 'signed' ? (React.createElement(CheckCircleIcon, null)) : (React.createElement(ExclamationTriangleIcon, null)), isCompact: isCompact }, props), text()));
};
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=signature-badge.js.map