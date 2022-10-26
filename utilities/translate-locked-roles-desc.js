import { Constants } from 'src/constants';
import { i18n } from '@lingui/core';
// Locked roles description can't be translated on the API
// To solve this problem, description for the locked roles
// must be hardcoded into the UI
export var translateLockedRolesDescription = function (name, desc) {
    return Constants.LOCKED_ROLES_WITH_DESCRIPTION[name]
        ? i18n._(Constants.LOCKED_ROLES_WITH_DESCRIPTION[name])
        : desc;
};
//# sourceMappingURL=translate-locked-roles-desc.js.map