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
import { Button, ButtonVariant, ExpandableSection, Modal, Spinner, } from '@patternfly/react-core';
import { ExternalLinkAltIcon } from '@patternfly/react-icons';
import React, { useEffect, useState } from 'react';
import { WisdomDenyIndexAPI } from 'src/api';
import { AlertList, closeAlert } from 'src/components';
import { errorMessage } from 'src/utilities';
export var WisdomModal = function (props) {
    var _a = useState(null), isInDenyIndex = _a[0], setIsInDenyIndex = _a[1];
    var _b = useState(true), loading = _b[0], setLoading = _b[1];
    var _c = useState([]), alerts = _c[0], setAlerts = _c[1];
    var titleWillBeUsed = null;
    var titleWillNotBeUsed = null;
    var areYouSureToOptIn = null;
    var areYouSureToOptOut = null;
    var name = props.reference;
    if (props.scope == 'namespace') {
        titleWillBeUsed = (React.createElement(Trans, null,
            "Namespace ",
            React.createElement("b", null, name),
            " is opted in to Wisdom."));
        titleWillNotBeUsed = (React.createElement(Trans, null,
            "Namespace ",
            React.createElement("b", null, name),
            " is opted out of Wisdom."));
        areYouSureToOptIn = (React.createElement(Trans, null, "Are you sure you want to opt the following namespace in to Wisdom?"));
        areYouSureToOptOut = (React.createElement(Trans, null, "Are you sure you want to opt the following namespace out of Wisdom?"));
    }
    if (props.scope == 'legacy_namespace') {
        titleWillBeUsed = (React.createElement(Trans, null,
            "Legacy namespace ",
            React.createElement("b", null, name),
            " is opted in to Wisdom."));
        titleWillNotBeUsed = (React.createElement(Trans, null,
            "Legacy namespace ",
            React.createElement("b", null, name),
            " is opted out of Wisdom."));
        areYouSureToOptIn = (React.createElement(Trans, null, "Are you sure you want to opt the following legacy namespace in to Wisdom?"));
        areYouSureToOptOut = (React.createElement(Trans, null, "Are you sure you want to opt the following legacy namespace out of Wisdom?"));
    }
    useEffect(function () {
        setIsInDenyIndex(null);
        setLoading(true);
        WisdomDenyIndexAPI.isInDenyIndex(props.scope, props.reference)
            .then(function (result) {
            setIsInDenyIndex(result);
            setLoading(false);
        })
            .catch(function (_a) {
            var _b = _a.response, status = _b.status, statusText = _b.statusText;
            addAlert({
                title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Failed to load Wisdom information."], ["Failed to load Wisdom information."]))),
                variant: 'danger',
                description: errorMessage(status, statusText),
            });
        });
    }, [props.scope, props.reference]);
    var addAlert = function (alert) {
        setAlerts(__spreadArray(__spreadArray([], alerts, true), [alert], false));
    };
    var finishAction = function (isInDenyIndex) {
        props.closeAction();
        if (props.addAlert) {
            props.addAlert({
                title: isInDenyIndex ? titleWillNotBeUsed : titleWillBeUsed,
                variant: 'success',
            });
        }
    };
    var removeFromDenyIndex = function () {
        setLoading(true);
        WisdomDenyIndexAPI.removeFromDenyIndex(props.scope, props.reference)
            .then(function () {
            finishAction(false);
        })
            .catch(function (_a) {
            var _b = _a.response, status = _b.status, statusText = _b.statusText;
            addAlert({
                title: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Failed to opt in to Wisdom."], ["Failed to opt in to Wisdom."]))),
                variant: 'danger',
                description: errorMessage(status, statusText),
            });
            setLoading(false);
        });
    };
    var addToDenyIndex = function () {
        setLoading(true);
        WisdomDenyIndexAPI.addToDenyIndex(props.scope, props.reference)
            .then(function () {
            finishAction(true);
        })
            .catch(function (_a) {
            var _b = _a.response, status = _b.status, statusText = _b.statusText;
            addAlert({
                title: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Failed to opt out of Wisdom."], ["Failed to opt out of Wisdom."]))),
                variant: 'danger',
                description: errorMessage(status, statusText),
            });
            setLoading(false);
        });
    };
    var actions = [];
    if (!loading) {
        if (isInDenyIndex) {
            actions.push(React.createElement(Button, { key: 'remove', onClick: removeFromDenyIndex, variant: ButtonVariant.primary }, t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Opt in to Wisdom"], ["Opt in to Wisdom"])))));
        }
        else {
            actions.push(React.createElement(Button, { key: 'add', onClick: addToDenyIndex, variant: ButtonVariant.primary }, t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Opt out of Wisdom"], ["Opt out of Wisdom"])))));
        }
        actions.push(React.createElement(Button, { key: 'close', onClick: function () { return props.closeAction(); }, variant: 'link' }, t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Cancel"], ["Cancel"])))));
    }
    var expandableTitle = t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Learn more about Ansible Wisdom."], ["Learn more about Ansible Wisdom."])));
    return (React.createElement(Modal, { actions: actions, isOpen: true, onClose: props.closeAction, title: loading
            ? t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Wisdom settings"], ["Wisdom settings"]))) : isInDenyIndex
            ? t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Opt in to Wisdom"], ["Opt in to Wisdom"]))) : t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["Opt out of Wisdom"], ["Opt out of Wisdom"]))), variant: 'small' },
        React.createElement(AlertList, { alerts: alerts, closeAlert: function (i) { return closeAlert(i, { alerts: alerts, setAlerts: setAlerts }); } }),
        loading ? (React.createElement(Spinner, null)) : (React.createElement("div", null,
            React.createElement("div", null, !loading && isInDenyIndex ? areYouSureToOptIn : areYouSureToOptOut),
            React.createElement("br", null),
            React.createElement("div", null,
                React.createElement(ExpandableSection, { toggleTextExpanded: expandableTitle, toggleTextCollapsed: expandableTitle },
                    React.createElement("div", null,
                        React.createElement(Trans, null,
                            React.createElement("p", null,
                                "Red Hat is working on exciting new Ansible content development capabilities within the context of",
                                ' ',
                                React.createElement("a", { href: 'https://www.redhat.com/en/engage/project-wisdom', target: '_blank', rel: 'noreferrer' }, "Project Wisdom"),
                                ' ',
                                React.createElement(ExternalLinkAltIcon, null),
                                " to help other automators build Ansible content."),
                            React.createElement("p", null, "Your roles and collections may be used as training data for a machine learning model that provides Ansible automation content recommendations."),
                            React.createElement("p", null,
                                "If you have concerns, please contact the Ansible team at",
                                ' ',
                                React.createElement("a", { href: 'mailto:ansible-content-ai@redhat.com' }, "ansible-content-ai@redhat.com"),
                                ".")))))))));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;
//# sourceMappingURL=wisdom-modal.js.map