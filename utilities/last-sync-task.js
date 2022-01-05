import * as React from 'react';
import { DateComponent, HelperText, StatusIndicator } from 'src/components';
export function lastSynced(entity) {
    if (!entity.last_sync_task || !entity.last_sync_task.finished_at) {
        return null;
    }
    return (React.createElement(React.Fragment, null,
        React.createElement(DateComponent, { date: entity.last_sync_task.finished_at })));
}
export function lastSyncStatus(entity) {
    if (!entity.last_sync_task) {
        return null;
    }
    var errorMessage = null;
    if (entity.last_sync_task.error) {
        errorMessage = (React.createElement(HelperText, { content: entity.last_sync_task.error['description'] }));
    }
    return (React.createElement(React.Fragment, null,
        React.createElement(StatusIndicator, { status: entity.last_sync_task.state }),
        " ",
        errorMessage));
}
//# sourceMappingURL=last-sync-task.js.map