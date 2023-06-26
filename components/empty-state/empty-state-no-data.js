import { CubesIcon, PlusCircleIcon } from '@patternfly/react-icons';
import React from 'react';
import { EmptyStateCustom } from './empty-state-custom';
export var EmptyStateNoData = function (props) {
    return (React.createElement(EmptyStateCustom, { icon: props.button ? PlusCircleIcon : CubesIcon, title: props.title, description: props.description, button: props.button }));
};
//# sourceMappingURL=empty-state-no-data.js.map