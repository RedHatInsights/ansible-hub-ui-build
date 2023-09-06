var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { t } from '@lingui/macro';
import { Button } from '@patternfly/react-core';
import SearchIcon from '@patternfly/react-icons/dist/esm/icons/search-icon';
import React from 'react';
import { EmptyStateCustom } from './empty-state-custom';
export var EmptyStateFilter = function (props) {
    return (React.createElement(EmptyStateCustom, { title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["No results found"], ["No results found"]))), description: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["No results match the filter criteria. Try changing your filter settings."], ["No results match the filter criteria. Try changing your filter settings."]))), icon: SearchIcon, button: props.clearAllFilters ? (React.createElement(Button, { onClick: props.clearAllFilters, variant: 'link' }, t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Clear all filters"], ["Clear all filters"]))))) : null }));
};
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=empty-state-filter.js.map