import { Trans } from '@lingui/macro';
import React from 'react';
import { Link } from 'react-router-dom';
import { Paths, formatPath } from 'src/paths';
import { parsePulpIDFromURL } from './parse-pulp-id';
// task can be { task: (pulp_href) } or "(pulp_href)" or "(uuid)"
export var taskAlert = function (task, title, variant) {
    if (variant === void 0) { variant = 'info'; }
    return ({
        title: title,
        variant: variant,
        description: (React.createElement("span", null,
            React.createElement(Trans, null,
                "See the task management",
                ' ',
                React.createElement(Link, { to: formatPath(Paths.taskDetail, {
                        task: parsePulpIDFromURL((task === null || task === void 0 ? void 0 : task.task) || task),
                    }) },
                    "detail page",
                    ' '),
                "for the status of this task."))),
    });
};
//# sourceMappingURL=task-alert.js.map