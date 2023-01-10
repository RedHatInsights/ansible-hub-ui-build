var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { t, defineMessage } from '@lingui/macro';
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.SEARCH_VIEW_TYPE_LOCAL_KEY = 'search_view_type';
    Constants.DEFAULT_PAGE_SIZE = 10;
    Constants.DEFAULT_PAGINATION_OPTIONS = [10, 20, 50, 100];
    Constants.CARD_DEFAULT_PAGE_SIZE = 10;
    Constants.CARD_DEFAULT_PAGINATION_OPTIONS = [10, 20, 50, 100];
    Constants.INSIGHTS_DEPLOYMENT_MODE = 'insights';
    Constants.STANDALONE_DEPLOYMENT_MODE = 'standalone';
    Constants.ADMIN_GROUP = 'system:partner-engineers';
    Constants.PUBLISHED = 'published';
    Constants.CERTIFIED_REPO = DEPLOYMENT_MODE === Constants.INSIGHTS_DEPLOYMENT_MODE
        ? 'published'
        : 'rh-certified';
    Constants.NOTCERTIFIED = 'rejected';
    Constants.NEEDSREVIEW = 'staging';
    Constants.USER_GROUP_MGMT_PERMISSIONS = [
        'galaxy.delete_user',
        'galaxy.add_user',
        'galaxy.change_user',
        'galaxy.delete_group',
        'galaxy.add_group',
    ];
    Constants.UPSTREAM_HOSTS = [
        'galaxy.ansible.com',
        'galaxy-dev.ansible.com',
        'galaxy-qa.ansible.com',
    ];
    Constants.DOWNSTREAM_HOSTS = [
        // FIXME 2021-09: remove obsolete cloud* references
        'cloud.redhat.com',
        'cloud.stage.redhat.com',
        'ci.cloud.redhat.com',
        'qa.cloud.redhat.com',
        'console.redhat.com',
        'console.stage.redhat.com',
        'ci.console.redhat.com',
        'qa.console.redhat.com',
    ];
    Constants.REPOSITORYNAMES = {
        published: defineMessage({ message: "Published" }),
        'rh-certified': defineMessage({ message: "Red Hat Certified" }),
        community: defineMessage({ message: "Community" }),
        validated: defineMessage({ message: "Validated" }),
    };
    Constants.ALLOWEDREPOS = ['community', 'published', 'rh-certified', 'validated'];
    Constants.COLLECTION_FILTER_TAGS = [
        'application',
        'cloud',
        'database',
        'infrastructure',
        'linux',
        'monitoring',
        'networking',
        'security',
        'storage',
        'tools',
        'windows',
    ];
    Constants.TASK_NAMES = {
        'galaxy_ng.app.tasks.promotion._remove_content_from_repository': defineMessage({ message: "Remove content from repository" }),
        'galaxy_ng.app.tasks.publishing.import_and_auto_approve': defineMessage({
            message: "Import and auto approve",
        }),
        'galaxy_ng.app.tasks.curate_synclist_repository': defineMessage({
            message: "Curate synclist repository",
        }),
        'galaxy_ng.app.tasks.import_and_move_to_staging': defineMessage({
            message: "Import and move to staging",
        }),
        'galaxy_ng.app.tasks.import_and_auto_approve': defineMessage({
            message: "Import and auto approve",
        }),
        'galaxy_ng.app.tasks.curate_all_synclist_repository': defineMessage({
            message: "Curate all synclist repository",
        }),
        'galaxy_ng.app.tasks.synclist.curate_synclist_repository_batch': defineMessage({ message: "Curate synclist repository batch" }),
        'pulp_ansible.app.tasks.collections.sync': defineMessage({
            message: "Pulp Ansible: Collections sync",
        }),
        'pulp_ansible.app.tasks.copy.copy_content': defineMessage({
            message: "Pulp ansible: Copy content",
        }),
        'pulp_ansible.app.tasks.collections.collection_sync': defineMessage({
            message: "Pulp ansible: collection sync",
        }),
        'pulp_ansible.app.tasks.roles.synchronize': defineMessage({
            message: "Pulp Ansible: Roles synchronize",
        }),
        'pulp_ansible.app.tasks.collections.update_collection_remote': defineMessage({ message: "Pulp ansible: Update collection remote" }),
        'pulp_ansible.app.tasks.collections.import_collection': defineMessage({
            message: "Pulp ansible: Import collection",
        }),
        'pulp_container.app.tasks.tag_image': defineMessage({
            message: "Pulp container: Tag image",
        }),
        'pulp_container.app.tasks.untag_image': defineMessage({
            message: "Pulp container: Untage image",
        }),
        'pulp_container.app.tasks.synchronize': defineMessage({
            message: "Pulp container: Tasks synchronize",
        }),
        'pulp_container.app.tasks.recursive_add_content': defineMessage({
            message: "Pulp container: Recursive add content",
        }),
        'pulp_container.app.tasks.recursive_remove_content': defineMessage({
            message: "Pulp container: Recursive remove content",
        }),
        'pulp_container.app.tasks.build_image_from_containerfile': defineMessage({
            message: "Pulp container: Build image from containerfile",
        }),
        'pulp_container.app.tasks.general_multi_delete': defineMessage({
            message: "Pulp container: General multi delete",
        }),
        'pulpcore.tasking.tasks.import_repository_version': defineMessage({
            message: "Pulpcore: Import repository version",
        }),
        'pulpcore.tasking.tasks.orphan_cleanup': defineMessage({
            message: "Pulpcore: Orphan cleanup",
        }),
        'pulpcore.tasking.tasks.repair_all_artifacts': defineMessage({
            message: "Pulpcore: Repair all artifacts",
        }),
        'pulpcore.tasking.tasks.base.general_create': defineMessage({
            message: "Pulpcore: General create",
        }),
        'pulpcore.tasking.tasks.base.general_update': defineMessage({
            message: "Pulpcore: General update",
        }),
        'pulpcore.tasking.tasks.base.general_delete': defineMessage({
            message: "Pulpcore: General delete",
        }),
        'pulpcore.app.tasks.export.pulp_export': defineMessage({
            message: "Pulpcore: Pulp export",
        }),
        'pulpcore.app.tasks.pulp_import': defineMessage({
            message: "Pulpcore: Pulp import",
        }),
        'pulpcore.app.tasks.repository.delete_version': defineMessage({
            message: "Pulpcore: Delete version",
        }),
        'pulpcore.app.tasks.repository.repair_version': defineMessage({
            message: "Pulpcore: Repair version",
        }),
        'pulpcore.app.tasks.upload.commit': defineMessage({
            message: "Pulpcore: Upload commit",
        }),
        'pulpcore.app.tasks.repository.add_and_remove': defineMessage({
            message: "Pulpcore: Add and remove",
        }),
        'pulpcore.plugin.tasking.add_and_remove': defineMessage({
            message: "Pulpcore: Add or remove",
        }),
    };
    Constants.HUMAN_STATUS = {
        completed: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Completed"], ["Completed"]))),
        failed: t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Failed"], ["Failed"]))),
        running: t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Running"], ["Running"]))),
        waiting: t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Waiting"], ["Waiting"]))),
    };
    Constants.LOCKED_ROLES_WITH_DESCRIPTION = {
        // galaxy roles
        'galaxy.content_admin': t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Manage all content types."], ["Manage all content types."]))),
        'galaxy.collection_admin': t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Create, delete and change collection namespaces. Upload and delete collections. Sync collections from remotes. Approve and reject collections."], ["Create, delete and change collection namespaces. Upload and delete collections. Sync collections from remotes. Approve and reject collections."]))),
        'galaxy.collection_publisher': t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Upload and modify collections."], ["Upload and modify collections."]))),
        'galaxy.collection_curator': t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Approve, reject and sync collections from remotes."], ["Approve, reject and sync collections from remotes."]))),
        'galaxy.collection_namespace_owner': t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Change and upload collections to namespaces."], ["Change and upload collections to namespaces."]))),
        'galaxy.execution_environment_admin': t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["Push, delete, and change execution environments. Create, delete and change remote registries."], ["Push, delete, and change execution environments. Create, delete and change remote registries."]))),
        'galaxy.execution_environment_publisher': t(templateObject_11 || (templateObject_11 = __makeTemplateObject(["Push, and change execution environments."], ["Push, and change execution environments."]))),
        'galaxy.execution_environment_namespace_owner': t(templateObject_12 || (templateObject_12 = __makeTemplateObject(["Create and update execution environments under existing container namespaces."], ["Create and update execution environments under existing container namespaces."]))),
        'galaxy.execution_environment_collaborator': t(templateObject_13 || (templateObject_13 = __makeTemplateObject(["Change existing execution environments."], ["Change existing execution environments."]))),
        'galaxy.group_admin': t(templateObject_14 || (templateObject_14 = __makeTemplateObject(["View, add, remove and change groups."], ["View, add, remove and change groups."]))),
        'galaxy.user_admin': t(templateObject_15 || (templateObject_15 = __makeTemplateObject(["View, add, remove and change users."], ["View, add, remove and change users."]))),
        'galaxy.synclist_owner': t(templateObject_16 || (templateObject_16 = __makeTemplateObject(["View, add, remove and change synclists."], ["View, add, remove and change synclists."]))),
        'galaxy.task_admin': t(templateObject_17 || (templateObject_17 = __makeTemplateObject(["View, and cancel any task."], ["View, and cancel any task."]))),
        // core roles
        'core.task_owner': t(templateObject_18 || (templateObject_18 = __makeTemplateObject(["Allow all actions on a task."], ["Allow all actions on a task."]))),
        'core.taskschedule_owner': t(templateObject_19 || (templateObject_19 = __makeTemplateObject(["Allow all actions on a taskschedule."], ["Allow all actions on a taskschedule."]))),
    };
    return Constants;
}());
export { Constants };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19;
//# sourceMappingURL=constants.js.map