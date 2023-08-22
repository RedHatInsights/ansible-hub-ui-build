var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { msg } from '@lingui/macro';
export var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.SEARCH_VIEW_TYPE_LOCAL_KEY = 'search_view_type';
    Constants.DEFAULT_PAGE_SIZE = 10;
    Constants.DEFAULT_PAGINATION_OPTIONS = [10, 20, 50, 100];
    Constants.CARD_DEFAULT_PAGE_SIZE = 10;
    Constants.CARD_DEFAULT_PAGINATION_OPTIONS = [10, 20, 50, 100];
    Constants.INSIGHTS_DEPLOYMENT_MODE = 'insights';
    Constants.STANDALONE_DEPLOYMENT_MODE = 'standalone';
    Constants.CERTIFIED_REPO = DEPLOYMENT_MODE === Constants.INSIGHTS_DEPLOYMENT_MODE
        ? 'published'
        : 'rh-certified';
    Constants.NOTCERTIFIED = 'rejected';
    Constants.NEEDSREVIEW = 'staging';
    Constants.APPROVED = 'approved';
    Constants.USER_GROUP_MGMT_PERMISSIONS = [
        'galaxy.delete_user',
        'galaxy.add_user',
        'galaxy.change_user',
        'galaxy.delete_group',
        'galaxy.add_group',
    ];
    Constants.PROTECTED_REPOSITORIES = [
        'rh-certified',
        'validated',
        'community',
        'published',
        'staging',
        'rejected',
    ];
    Constants.COLLECTION_FILTER_TAGS = [
        'application',
        'cloud',
        'database',
        'eda',
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
        'galaxy_ng.app.tasks.curate_all_synclist_repository': msg(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Curate all synclist repository"], ["Curate all synclist repository"]))),
        'galaxy_ng.app.tasks.curate_synclist_repository': msg(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Curate synclist repository"], ["Curate synclist repository"]))),
        'galaxy_ng.app.tasks.import_and_auto_approve': msg(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Import and auto approve"], ["Import and auto approve"]))),
        'galaxy_ng.app.tasks.import_and_move_to_staging': msg(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Import and move to staging"], ["Import and move to staging"]))),
        'galaxy_ng.app.tasks.promotion._remove_content_from_repository': msg(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Remove content from repository"], ["Remove content from repository"]))),
        'galaxy_ng.app.tasks.publishing.import_and_auto_approve': msg(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Import and auto approve"], ["Import and auto approve"]))),
        'galaxy_ng.app.tasks.synclist.curate_synclist_repository_batch': msg(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Curate synclist repository batch"], ["Curate synclist repository batch"]))),
        'pulp_ansible.app.tasks.collections.collection_sync': msg(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Pulp ansible: collection sync"], ["Pulp ansible: collection sync"]))),
        'pulp_ansible.app.tasks.collections.import_collection': msg(templateObject_9 || (templateObject_9 = __makeTemplateObject(["Pulp ansible: Import collection"], ["Pulp ansible: Import collection"]))),
        'pulp_ansible.app.tasks.collections.sync': msg(templateObject_10 || (templateObject_10 = __makeTemplateObject(["Pulp Ansible: Collections sync"], ["Pulp Ansible: Collections sync"]))),
        'pulp_ansible.app.tasks.collections.update_collection_remote': msg(templateObject_11 || (templateObject_11 = __makeTemplateObject(["Pulp ansible: Update collection remote"], ["Pulp ansible: Update collection remote"]))),
        'pulp_ansible.app.tasks.copy.copy_content': msg(templateObject_12 || (templateObject_12 = __makeTemplateObject(["Pulp ansible: Copy content"], ["Pulp ansible: Copy content"]))),
        'pulp_ansible.app.tasks.roles.synchronize': msg(templateObject_13 || (templateObject_13 = __makeTemplateObject(["Pulp Ansible: Roles synchronize"], ["Pulp Ansible: Roles synchronize"]))),
        'pulp_container.app.tasks.build_image_from_containerfile': msg(templateObject_14 || (templateObject_14 = __makeTemplateObject(["Pulp container: Build image from containerfile"], ["Pulp container: Build image from containerfile"]))),
        'pulp_container.app.tasks.general_multi_delete': msg(templateObject_15 || (templateObject_15 = __makeTemplateObject(["Pulp container: General multi delete"], ["Pulp container: General multi delete"]))),
        'pulp_container.app.tasks.recursive_add_content': msg(templateObject_16 || (templateObject_16 = __makeTemplateObject(["Pulp container: Recursive add content"], ["Pulp container: Recursive add content"]))),
        'pulp_container.app.tasks.recursive_remove_content': msg(templateObject_17 || (templateObject_17 = __makeTemplateObject(["Pulp container: Recursive remove content"], ["Pulp container: Recursive remove content"]))),
        'pulp_container.app.tasks.synchronize': msg(templateObject_18 || (templateObject_18 = __makeTemplateObject(["Pulp container: Tasks synchronize"], ["Pulp container: Tasks synchronize"]))),
        'pulp_container.app.tasks.tag_image': msg(templateObject_19 || (templateObject_19 = __makeTemplateObject(["Pulp container: Tag image"], ["Pulp container: Tag image"]))),
        'pulp_container.app.tasks.untag_image': msg(templateObject_20 || (templateObject_20 = __makeTemplateObject(["Pulp container: Untage image"], ["Pulp container: Untage image"]))),
        'pulpcore.app.tasks.export.pulp_export': msg(templateObject_21 || (templateObject_21 = __makeTemplateObject(["Pulpcore: Pulp export"], ["Pulpcore: Pulp export"]))),
        'pulpcore.app.tasks.pulp_import': msg(templateObject_22 || (templateObject_22 = __makeTemplateObject(["Pulpcore: Pulp import"], ["Pulpcore: Pulp import"]))),
        'pulpcore.app.tasks.repository.add_and_remove': msg(templateObject_23 || (templateObject_23 = __makeTemplateObject(["Pulpcore: Add and remove"], ["Pulpcore: Add and remove"]))),
        'pulpcore.app.tasks.repository.delete_version': msg(templateObject_24 || (templateObject_24 = __makeTemplateObject(["Pulpcore: Delete version"], ["Pulpcore: Delete version"]))),
        'pulpcore.app.tasks.repository.repair_version': msg(templateObject_25 || (templateObject_25 = __makeTemplateObject(["Pulpcore: Repair version"], ["Pulpcore: Repair version"]))),
        'pulpcore.app.tasks.upload.commit': msg(templateObject_26 || (templateObject_26 = __makeTemplateObject(["Pulpcore: Upload commit"], ["Pulpcore: Upload commit"]))),
        'pulpcore.plugin.tasking.add_and_remove': msg(templateObject_27 || (templateObject_27 = __makeTemplateObject(["Pulpcore: Add or remove"], ["Pulpcore: Add or remove"]))),
        'pulpcore.tasking.tasks.base.general_create': msg(templateObject_28 || (templateObject_28 = __makeTemplateObject(["Pulpcore: General create"], ["Pulpcore: General create"]))),
        'pulpcore.tasking.tasks.base.general_delete': msg(templateObject_29 || (templateObject_29 = __makeTemplateObject(["Pulpcore: General delete"], ["Pulpcore: General delete"]))),
        'pulpcore.tasking.tasks.base.general_update': msg(templateObject_30 || (templateObject_30 = __makeTemplateObject(["Pulpcore: General update"], ["Pulpcore: General update"]))),
        'pulpcore.tasking.tasks.import_repository_version': msg(templateObject_31 || (templateObject_31 = __makeTemplateObject(["Pulpcore: Import repository version"], ["Pulpcore: Import repository version"]))),
        'pulpcore.tasking.tasks.orphan_cleanup': msg(templateObject_32 || (templateObject_32 = __makeTemplateObject(["Pulpcore: Orphan cleanup"], ["Pulpcore: Orphan cleanup"]))),
        'pulpcore.tasking.tasks.repair_all_artifacts': msg(templateObject_33 || (templateObject_33 = __makeTemplateObject(["Pulpcore: Repair all artifacts"], ["Pulpcore: Repair all artifacts"]))),
    };
    Constants.LOCKED_ROLES_WITH_DESCRIPTION = {
        // galaxy roles
        'galaxy.ansible_repository_owner': msg(templateObject_34 || (templateObject_34 = __makeTemplateObject(["Manage ansible repositories."], ["Manage ansible repositories."]))),
        'galaxy.collection_admin': msg(templateObject_35 || (templateObject_35 = __makeTemplateObject(["Create, delete and change collection namespaces. Upload and delete collections. Sync collections from remotes. Approve and reject collections."], ["Create, delete and change collection namespaces. Upload and delete collections. Sync collections from remotes. Approve and reject collections."]))),
        'galaxy.collection_curator': msg(templateObject_36 || (templateObject_36 = __makeTemplateObject(["Approve, reject and sync collections from remotes."], ["Approve, reject and sync collections from remotes."]))),
        'galaxy.collection_namespace_owner': msg(templateObject_37 || (templateObject_37 = __makeTemplateObject(["Change and upload collections to namespaces."], ["Change and upload collections to namespaces."]))),
        'galaxy.collection_publisher': msg(templateObject_38 || (templateObject_38 = __makeTemplateObject(["Upload and modify collections."], ["Upload and modify collections."]))),
        'galaxy.collection_remote_owner': msg(templateObject_39 || (templateObject_39 = __makeTemplateObject(["Manage collection remotes."], ["Manage collection remotes."]))),
        'galaxy.content_admin': msg(templateObject_40 || (templateObject_40 = __makeTemplateObject(["Manage all content types."], ["Manage all content types."]))),
        'galaxy.execution_environment_admin': msg(templateObject_41 || (templateObject_41 = __makeTemplateObject(["Push, delete, and change execution environments. Create, delete and change remote registries."], ["Push, delete, and change execution environments. Create, delete and change remote registries."]))),
        'galaxy.execution_environment_collaborator': msg(templateObject_42 || (templateObject_42 = __makeTemplateObject(["Change existing execution environments."], ["Change existing execution environments."]))),
        'galaxy.execution_environment_namespace_owner': msg(templateObject_43 || (templateObject_43 = __makeTemplateObject(["Create and update execution environments under existing container namespaces."], ["Create and update execution environments under existing container namespaces."]))),
        'galaxy.execution_environment_publisher': msg(templateObject_44 || (templateObject_44 = __makeTemplateObject(["Push, and change execution environments."], ["Push, and change execution environments."]))),
        'galaxy.group_admin': msg(templateObject_45 || (templateObject_45 = __makeTemplateObject(["View, add, remove and change groups."], ["View, add, remove and change groups."]))),
        'galaxy.synclist_owner': msg(templateObject_46 || (templateObject_46 = __makeTemplateObject(["View, add, remove and change synclists."], ["View, add, remove and change synclists."]))),
        'galaxy.task_admin': msg(templateObject_47 || (templateObject_47 = __makeTemplateObject(["View, and cancel any task."], ["View, and cancel any task."]))),
        'galaxy.user_admin': msg(templateObject_48 || (templateObject_48 = __makeTemplateObject(["View, add, remove and change users."], ["View, add, remove and change users."]))),
        // core roles
        'core.task_owner': msg(templateObject_49 || (templateObject_49 = __makeTemplateObject(["Allow all actions on a task."], ["Allow all actions on a task."]))),
        'core.taskschedule_owner': msg(templateObject_50 || (templateObject_50 = __makeTemplateObject(["Allow all actions on a taskschedule."], ["Allow all actions on a taskschedule."]))),
    };
    return Constants;
}());
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25, templateObject_26, templateObject_27, templateObject_28, templateObject_29, templateObject_30, templateObject_31, templateObject_32, templateObject_33, templateObject_34, templateObject_35, templateObject_36, templateObject_37, templateObject_38, templateObject_39, templateObject_40, templateObject_41, templateObject_42, templateObject_43, templateObject_44, templateObject_45, templateObject_46, templateObject_47, templateObject_48, templateObject_49, templateObject_50;
//# sourceMappingURL=constants.js.map