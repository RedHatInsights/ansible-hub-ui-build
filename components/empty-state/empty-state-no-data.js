import CubesIcon from '@patternfly/react-icons/dist/esm/icons/cubes-icon';
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';
import React from 'react';
import { EmptyStateCustom } from './empty-state-custom';
export var EmptyStateNoData = function (props) {
    return (React.createElement(EmptyStateCustom, { icon: props.button ? PlusCircleIcon : CubesIcon, title: props.title, description: props.description, button: props.button }));
};
//# sourceMappingURL=empty-state-no-data.js.map