var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { t } from '@lingui/macro';
import { Bullseye } from '@patternfly/react-core';
import React from 'react';
import NotFoundImage from 'src/../static/images/not_found.svg';
import { BaseHeader, Main } from 'src/components';
import { withRouter } from 'src/utilities';
import './not-found.scss';
export var NotFound = function (_props) { return (React.createElement(React.Fragment, null,
    React.createElement(BaseHeader, { title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["404 - Page not found"], ["404 - Page not found"]))) }),
    React.createElement(Main, null,
        React.createElement("section", { className: 'body' },
            React.createElement(Bullseye, { className: 'hub-c-bullseye' },
                React.createElement("div", { className: 'hub-c-bullseye__center' },
                    React.createElement("img", { src: NotFoundImage, alt: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Not found image"], ["Not found image"]))) }),
                    React.createElement("div", null, t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["We couldn't find the page you're looking for!"], ["We couldn't find the page you're looking for!"])))),
                    React.createElement("div", { className: 'pf-c-content' },
                        React.createElement("span", { className: 'hub-c-bullseye__404' }, "404")))))))); };
export default withRouter(NotFound);
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=not-found.js.map