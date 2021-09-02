// Checks that at least one filter is set
import { some } from 'lodash';
export function filterIsSet(params, filters) {
    return some(filters, function (filter) { return filter in params; });
}
//# sourceMappingURL=filter-is-set.js.map