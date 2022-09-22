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
    Constants.PERMISSIONS = [
        {
            name: 'namespaces',
            label: defineMessage({ message: "Collection Namespaces" }),
            object_permissions: [
                'galaxy.add_namespace',
                'galaxy.change_namespace',
                'galaxy.delete_namespace',
                'galaxy.upload_to_namespace', // (model_permissions.upload_to_namespace)
            ],
        },
        {
            name: 'collections',
            label: defineMessage({ message: "Collections" }),
            object_permissions: [
                'ansible.modify_ansible_repo_content',
                'ansible.delete_collection', // model_permissions.delete_collection
            ],
        },
        {
            name: 'users',
            label: defineMessage({ message: "Users" }),
            object_permissions: [
                'galaxy.view_user',
                'galaxy.delete_user',
                'galaxy.add_user',
                'galaxy.change_user', // model_permissions.change_user
            ],
        },
        {
            name: 'groups',
            label: defineMessage({ message: "Groups" }),
            object_permissions: [
                'galaxy.view_group',
                'galaxy.delete_group',
                'galaxy.add_group',
                'galaxy.change_group', // model_permissions.change_group
            ],
        },
        {
            name: 'remotes',
            label: defineMessage({ message: "Collection Remotes" }),
            object_permissions: [
                'ansible.change_collectionremote',
                'ansible.view_collectionremote',
                // 'ansible.add_collectionremote', // (model_permissions.add_remote)
                // 'ansible.delete_collectionremote', // (model_permissions.delete_remote)
            ],
        },
        {
            name: 'containers',
            label: defineMessage({ message: "Containers" }),
            object_permissions: [
                // Turning off private container permissions since they aren't supported yet
                // 'container.namespace_pull_containerdistribution',
                // 'container.namespace_view_containerdistribution',
                // 'container.add_containerrepository', // (model_permissions.add_containerrepository)
                // 'container.change_containerrepository', // (model_permissions.change_containerrepository)
                'container.delete_containerrepository',
                'container.namespace_change_containerdistribution',
                'container.namespace_modify_content_containerpushrepository',
                'container.namespace_push_containerdistribution',
                'container.add_containernamespace',
                'container.change_containernamespace', // (model_permissions.change_containernamespace)
                // 'container.delete_containernamespace', // (model_permissions.delete_containernamespace)
            ],
        },
        {
            name: 'registries',
            label: defineMessage({ message: "Remote Registries" }),
            object_permissions: [
                'galaxy.add_containerregistryremote',
                'galaxy.change_containerregistryremote',
                'galaxy.delete_containerregistryremote', // model_permissions.delete_containerregistry
            ],
        },
        {
            name: 'task_management',
            label: defineMessage({ message: "Task Management" }),
            object_permissions: [
                'core.change_task',
                'core.delete_task',
                'core.view_task',
            ],
        },
        // These aren't currently used. Removing them to reduce confusion in the UI
        // {
        //   name: 'distribution',
        //   label: '...',
        //   object_permissions: [
        //     'ansible.view_ansibledistribution', // (model_permissions.view_distribution)
        //     'ansible.add_ansibledistribution', // (model_permissions.add_distribution)
        //     'ansible.change_ansibledistribution', // (model_permissions.change_distribution)
        //     'ansible.delete_ansibledistribution', // (model_permissions.delete_distribution)
        //   ],
        // },
        // {
        //   name: 'synclists',
        //   label: '...',
        //   object_permissions: [
        //     'galaxy.delete_synclist',
        //     'galaxy.change_synclist',
        //     'galaxy.view_synclist',
        //     'galaxy.add_synclist',
        //   ],
        // },
        // {
        //   name: 'container_distribution',
        //   label: '...',
        //   object_permissions: [
        //     'container.add_containerdistribution', // (model_permissions.add_containerdistribution)
        //     'container.change_containerdistribution', // (model_permissions.change_containerdistribution)
        //     'container.delete_containerdistribution', // (model_permissions.delete_containerdistribution)
        //   ],
        // },
    ];
    Constants.USER_GROUP_MGMT_PERMISSIONS = [
        'galaxy.delete_user',
        'galaxy.add_user',
        'galaxy.change_user',
        'galaxy.delete_group',
        'galaxy.add_group',
    ];
    Constants.HUMAN_PERMISSIONS = {
        'ansible.add_ansibledistribution': t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Add Ansible distribution"], ["Add Ansible distribution"]))),
        'ansible.add_collectionremote': t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Add collection remote"], ["Add collection remote"]))),
        'ansible.change_ansibledistribution': t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Change Ansible distribution"], ["Change Ansible distribution"]))),
        'ansible.change_collectionremote': t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Change collection remote"], ["Change collection remote"]))),
        'ansible.delete_ansibledistribution': t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Delete Ansible distribution"], ["Delete Ansible distribution"]))),
        'ansible.delete_collection': t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Delete collection"], ["Delete collection"]))),
        'ansible.delete_collectionremote': t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Delete collection remote"], ["Delete collection remote"]))),
        'ansible.modify_ansible_repo_content': t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Modify Ansible repo content"], ["Modify Ansible repo content"]))),
        'ansible.view_ansibledistribution': t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["View Ansible distribution"], ["View Ansible distribution"]))),
        'ansible.view_collectionremote': t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["View collection remote"], ["View collection remote"]))),
        'container.add_containerdistribution': t(templateObject_11 || (templateObject_11 = __makeTemplateObject(["Add container distribution"], ["Add container distribution"]))),
        'container.add_containernamespace': t(templateObject_12 || (templateObject_12 = __makeTemplateObject(["Create new containers"], ["Create new containers"]))),
        'container.add_containerrepository': t(templateObject_13 || (templateObject_13 = __makeTemplateObject(["Add container repository"], ["Add container repository"]))),
        'container.change_containerdistribution': t(templateObject_14 || (templateObject_14 = __makeTemplateObject(["Change container distribution"], ["Change container distribution"]))),
        'container.change_containernamespace': t(templateObject_15 || (templateObject_15 = __makeTemplateObject(["Change container namespace permissions"], ["Change container namespace permissions"]))),
        'container.change_containerrepository': t(templateObject_16 || (templateObject_16 = __makeTemplateObject(["Change container repository"], ["Change container repository"]))),
        'container.delete_containerdistribution': t(templateObject_17 || (templateObject_17 = __makeTemplateObject(["Delete container distribution"], ["Delete container distribution"]))),
        'container.delete_containernamespace': t(templateObject_18 || (templateObject_18 = __makeTemplateObject(["Delete container namespace"], ["Delete container namespace"]))),
        'container.delete_containerrepository': t(templateObject_19 || (templateObject_19 = __makeTemplateObject(["Delete container repository"], ["Delete container repository"]))),
        'container.namespace_change_containerdistribution': t(templateObject_20 || (templateObject_20 = __makeTemplateObject(["Change containers"], ["Change containers"]))),
        'container.namespace_modify_content_containerpushrepository': t(templateObject_21 || (templateObject_21 = __makeTemplateObject(["Change image tags"], ["Change image tags"]))),
        'container.namespace_pull_containerdistribution': t(templateObject_22 || (templateObject_22 = __makeTemplateObject(["Pull private containers"], ["Pull private containers"]))),
        'container.namespace_push_containerdistribution': t(templateObject_23 || (templateObject_23 = __makeTemplateObject(["Push to existing containers"], ["Push to existing containers"]))),
        'container.namespace_view_containerdistribution': t(templateObject_24 || (templateObject_24 = __makeTemplateObject(["View private containers"], ["View private containers"]))),
        'core.change_task': t(templateObject_25 || (templateObject_25 = __makeTemplateObject(["Change task"], ["Change task"]))),
        'core.delete_task': t(templateObject_26 || (templateObject_26 = __makeTemplateObject(["Delete task"], ["Delete task"]))),
        'core.view_task': t(templateObject_27 || (templateObject_27 = __makeTemplateObject(["View all tasks"], ["View all tasks"]))),
        'galaxy.add_containerregistryremote': t(templateObject_28 || (templateObject_28 = __makeTemplateObject(["Add remote registry"], ["Add remote registry"]))),
        'galaxy.add_group': t(templateObject_29 || (templateObject_29 = __makeTemplateObject(["Add group"], ["Add group"]))),
        'galaxy.add_namespace': t(templateObject_30 || (templateObject_30 = __makeTemplateObject(["Add namespace"], ["Add namespace"]))),
        'galaxy.add_synclist': t(templateObject_31 || (templateObject_31 = __makeTemplateObject(["Add synclist"], ["Add synclist"]))),
        'galaxy.add_user': t(templateObject_32 || (templateObject_32 = __makeTemplateObject(["Add user"], ["Add user"]))),
        'galaxy.change_containerregistryremote': t(templateObject_33 || (templateObject_33 = __makeTemplateObject(["Change remote registry"], ["Change remote registry"]))),
        'galaxy.change_group': t(templateObject_34 || (templateObject_34 = __makeTemplateObject(["Change group"], ["Change group"]))),
        'galaxy.change_namespace': t(templateObject_35 || (templateObject_35 = __makeTemplateObject(["Change namespace"], ["Change namespace"]))),
        'galaxy.change_synclist': t(templateObject_36 || (templateObject_36 = __makeTemplateObject(["Change synclist"], ["Change synclist"]))),
        'galaxy.change_user': t(templateObject_37 || (templateObject_37 = __makeTemplateObject(["Change user"], ["Change user"]))),
        'galaxy.delete_containerregistryremote': t(templateObject_38 || (templateObject_38 = __makeTemplateObject(["Delete remote registry"], ["Delete remote registry"]))),
        'galaxy.delete_group': t(templateObject_39 || (templateObject_39 = __makeTemplateObject(["Delete group"], ["Delete group"]))),
        'galaxy.delete_namespace': t(templateObject_40 || (templateObject_40 = __makeTemplateObject(["Delete namespace"], ["Delete namespace"]))),
        'galaxy.delete_synclist': t(templateObject_41 || (templateObject_41 = __makeTemplateObject(["Delete synclist"], ["Delete synclist"]))),
        'galaxy.delete_user': t(templateObject_42 || (templateObject_42 = __makeTemplateObject(["Delete user"], ["Delete user"]))),
        'galaxy.upload_to_namespace': t(templateObject_43 || (templateObject_43 = __makeTemplateObject(["Upload to namespace"], ["Upload to namespace"]))),
        'galaxy.view_group': t(templateObject_44 || (templateObject_44 = __makeTemplateObject(["View group"], ["View group"]))),
        'galaxy.view_synclist': t(templateObject_45 || (templateObject_45 = __makeTemplateObject(["View synclist"], ["View synclist"]))),
        'galaxy.view_user': t(templateObject_46 || (templateObject_46 = __makeTemplateObject(["View user"], ["View user"]))),
    };
    Constants.GROUP_HUMAN_PERMISSIONS = {
        change_namespace: t(templateObject_47 || (templateObject_47 = __makeTemplateObject(["Change namespace"], ["Change namespace"]))),
        upload_to_namespace: t(templateObject_48 || (templateObject_48 = __makeTemplateObject(["Upload to namespace"], ["Upload to namespace"]))),
        add_containernamespace: t(templateObject_49 || (templateObject_49 = __makeTemplateObject(["Create new containers"], ["Create new containers"]))),
        namespace_pull_containerdistribution: t(templateObject_50 || (templateObject_50 = __makeTemplateObject(["Pull private containers"], ["Pull private containers"]))),
        namespace_change_containerdistribution: t(templateObject_51 || (templateObject_51 = __makeTemplateObject(["Update container information"], ["Update container information"]))),
        namespace_view_containerdistribution: t(templateObject_52 || (templateObject_52 = __makeTemplateObject(["View private containers"], ["View private containers"]))),
        namespace_modify_content_containerpushrepository: t(templateObject_53 || (templateObject_53 = __makeTemplateObject(["Change image tags"], ["Change image tags"]))),
        change_containernamespace: t(templateObject_54 || (templateObject_54 = __makeTemplateObject(["Change container namespace permissions"], ["Change container namespace permissions"]))),
        namespace_push_containerdistribution: t(templateObject_55 || (templateObject_55 = __makeTemplateObject(["Push images to existing containers"], ["Push images to existing containers"]))),
        view_containernamespace: t(templateObject_56 || (templateObject_56 = __makeTemplateObject(["View container's namespace"], ["View container's namespace"]))),
        delete_containernamespace: t(templateObject_57 || (templateObject_57 = __makeTemplateObject(["Delete container's namespace"], ["Delete container's namespace"]))),
        namespace_delete_containerdistribution: t(templateObject_58 || (templateObject_58 = __makeTemplateObject(["Delete container's distribution"], ["Delete container's distribution"]))),
        namespace_view_containerpushrepository: t(templateObject_59 || (templateObject_59 = __makeTemplateObject(["View container's repository"], ["View container's repository"]))),
        namespace_add_containerdistribution: t(templateObject_60 || (templateObject_60 = __makeTemplateObject(["Push new containers"], ["Push new containers"]))),
        change_containerdistribution: t(templateObject_61 || (templateObject_61 = __makeTemplateObject(["Change distribution"], ["Change distribution"]))),
        delete_containerdistribution: t(templateObject_62 || (templateObject_62 = __makeTemplateObject(["Delete distribution"], ["Delete distribution"]))),
        push_containerdistribution: t(templateObject_63 || (templateObject_63 = __makeTemplateObject(["Push distribution"], ["Push distribution"]))),
        pull_containerdistribution: t(templateObject_64 || (templateObject_64 = __makeTemplateObject(["Pull distribution"], ["Pull distribution"]))),
        view_containerdistribution: t(templateObject_65 || (templateObject_65 = __makeTemplateObject(["View distribution"], ["View distribution"]))),
    };
    Constants.CONTAINER_NAMESPACE_PERMISSIONS = [
        'change_containernamespace',
        'namespace_push_containerdistribution',
        'namespace_change_containerdistribution',
        'namespace_modify_content_containerpushrepository',
        'namespace_add_containerdistribution',
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
        completed: t(templateObject_66 || (templateObject_66 = __makeTemplateObject(["Completed"], ["Completed"]))),
        failed: t(templateObject_67 || (templateObject_67 = __makeTemplateObject(["Failed"], ["Failed"]))),
        running: t(templateObject_68 || (templateObject_68 = __makeTemplateObject(["Running"], ["Running"]))),
        waiting: t(templateObject_69 || (templateObject_69 = __makeTemplateObject(["Waiting"], ["Waiting"]))),
    };
    Constants.LOCKED_ROLES_WITH_DESCRIPTION = {
        // galaxy roles
        'galaxy.content_admin': t(templateObject_70 || (templateObject_70 = __makeTemplateObject(["Manage all content types."], ["Manage all content types."]))),
        'galaxy.collection_admin': t(templateObject_71 || (templateObject_71 = __makeTemplateObject(["Create, delete and change collection namespaces. Upload and delete collections. Sync collections from remotes. Approve and reject collections."], ["Create, delete and change collection namespaces. Upload and delete collections. Sync collections from remotes. Approve and reject collections."]))),
        'galaxy.collection_publisher': t(templateObject_72 || (templateObject_72 = __makeTemplateObject(["Upload and modify collections."], ["Upload and modify collections."]))),
        'galaxy.collection_curator': t(templateObject_73 || (templateObject_73 = __makeTemplateObject(["Approve, reject and sync collections from remotes."], ["Approve, reject and sync collections from remotes."]))),
        'galaxy.collection_namespace_owner': t(templateObject_74 || (templateObject_74 = __makeTemplateObject(["Change and upload collections to namespaces."], ["Change and upload collections to namespaces."]))),
        'galaxy.execution_environment_admin': t(templateObject_75 || (templateObject_75 = __makeTemplateObject(["Push, delete, and change execution environments. Create, delete and change remote registries."], ["Push, delete, and change execution environments. Create, delete and change remote registries."]))),
        'galaxy.execution_environment_publisher': t(templateObject_76 || (templateObject_76 = __makeTemplateObject(["Push, and change execution environments."], ["Push, and change execution environments."]))),
        'galaxy.execution_environment_namespace_owner': t(templateObject_77 || (templateObject_77 = __makeTemplateObject(["Create and update execution environments under existing container namespaces."], ["Create and update execution environments under existing container namespaces."]))),
        'galaxy.execution_environment_collaborator': t(templateObject_78 || (templateObject_78 = __makeTemplateObject(["Change existing execution environments."], ["Change existing execution environments."]))),
        'galaxy.group_admin': t(templateObject_79 || (templateObject_79 = __makeTemplateObject(["View, add, remove and change groups."], ["View, add, remove and change groups."]))),
        'galaxy.user_admin': t(templateObject_80 || (templateObject_80 = __makeTemplateObject(["View, add, remove and change users."], ["View, add, remove and change users."]))),
        'galaxy.synclist_owner': t(templateObject_81 || (templateObject_81 = __makeTemplateObject(["View, add, remove and change synclists."], ["View, add, remove and change synclists."]))),
        'galaxy.task_admin': t(templateObject_82 || (templateObject_82 = __makeTemplateObject(["View, and cancel any task."], ["View, and cancel any task."]))),
        // core roles
        'core.task_owner': t(templateObject_83 || (templateObject_83 = __makeTemplateObject(["Allow all actions on a task."], ["Allow all actions on a task."]))),
        'core.taskschedule_owner': t(templateObject_84 || (templateObject_84 = __makeTemplateObject(["Allow all actions on a taskschedule."], ["Allow all actions on a taskschedule."]))),
    };
    return Constants;
}());
export { Constants };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25, templateObject_26, templateObject_27, templateObject_28, templateObject_29, templateObject_30, templateObject_31, templateObject_32, templateObject_33, templateObject_34, templateObject_35, templateObject_36, templateObject_37, templateObject_38, templateObject_39, templateObject_40, templateObject_41, templateObject_42, templateObject_43, templateObject_44, templateObject_45, templateObject_46, templateObject_47, templateObject_48, templateObject_49, templateObject_50, templateObject_51, templateObject_52, templateObject_53, templateObject_54, templateObject_55, templateObject_56, templateObject_57, templateObject_58, templateObject_59, templateObject_60, templateObject_61, templateObject_62, templateObject_63, templateObject_64, templateObject_65, templateObject_66, templateObject_67, templateObject_68, templateObject_69, templateObject_70, templateObject_71, templateObject_72, templateObject_73, templateObject_74, templateObject_75, templateObject_76, templateObject_77, templateObject_78, templateObject_79, templateObject_80, templateObject_81, templateObject_82, templateObject_83, templateObject_84;
//# sourceMappingURL=constants.js.map