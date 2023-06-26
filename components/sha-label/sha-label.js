import { Label, Tooltip } from '@patternfly/react-core';
import React from 'react';
import { truncateSha } from 'src/utilities';
export var ShaLabel = function (_a) {
    var digest = _a.digest, grey = _a.grey, long = _a.long;
    return (React.createElement(Tooltip, { content: digest },
        React.createElement(Label, { color: grey ? 'grey' : 'blue' }, long ? digest : truncateSha(digest))));
};
//# sourceMappingURL=sha-label.js.map