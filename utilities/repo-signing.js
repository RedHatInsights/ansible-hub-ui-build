var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { SignContainersAPI } from 'src/api';
import { waitForTaskUrl } from 'src/utilities';
import { t } from '@lingui/macro';
var RepoSigningUtils = /** @class */ (function () {
    function RepoSigningUtils() {
    }
    RepoSigningUtils.getContainerPulpType = function (item) {
        var pulp_types = item.pulp.repository.pulp_type.split('.');
        if (pulp_types.length > 1) {
            return pulp_types[1];
        }
        else {
            return '';
        }
    };
    RepoSigningUtils.sign = function (item, context, addAlert, reload) {
        if (item.pulp.repository.remote &&
            Object.keys(item.pulp.repository.remote.last_sync_task || {}).length == 0) {
            addAlert({
                variant: 'danger',
                description: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Container must be synchronized with remote repository first."], ["Container must be synchronized with remote repository first."]))),
                title: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Failed to sign the container version."], ["Failed to sign the container version."]))),
            });
            return;
        }
        var service = context.settings.GALAXY_CONTAINER_SIGNING_SERVICE;
        SignContainersAPI.getSigningService(service)
            .then(function (result) {
            var pulp_href = result.data.results[0]['pulp_href'];
            return SignContainersAPI.sign(item.pulp.repository.pulp_id, RepoSigningUtils.getContainerPulpType(item), pulp_href, item.pulp.distribution.base_path).then(function (result) {
                addAlert({
                    variant: 'success',
                    title: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Signing started for container \"", "\"."], ["Signing started for container \"", "\"."])), item.name),
                });
                return waitForTaskUrl(result.data.task).then(function () {
                    if (reload) {
                        reload();
                    }
                });
            });
        })
            .catch(function (ex) {
            addAlert({
                variant: 'danger',
                description: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["API Error: ", ""], ["API Error: ", ""])), ex),
                title: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Failed to sign the container version."], ["Failed to sign the container version."]))),
            });
        });
    };
    return RepoSigningUtils;
}());
export { RepoSigningUtils };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=repo-signing.js.map