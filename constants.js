var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { t } from '@lingui/macro';
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
            object_permissions: [
                'galaxy.add_namespace',
                'galaxy.change_namespace',
                'galaxy.upload_to_namespace',
            ],
        },
        {
            name: 'collections',
            object_permissions: ['ansible.modify_ansible_repo_content'],
        },
        {
            name: 'users',
            object_permissions: [
                'galaxy.view_user',
                'galaxy.delete_user',
                'galaxy.add_user',
                'galaxy.change_user',
            ],
        },
        {
            name: 'groups',
            object_permissions: [
                'galaxy.view_group',
                'galaxy.delete_group',
                'galaxy.add_group',
                'galaxy.change_group',
            ],
        },
        {
            name: 'remotes',
            object_permissions: [
                'ansible.change_collectionremote',
                'ansible.view_collectionremote',
            ],
        },
        {
            name: 'containers',
            object_permissions: [
                // Turning off private container permissions since they aren't supported yet
                // 'container.namespace_pull_containerdistribution',
                // 'container.namespace_view_containerdistribution',
                'container.namespace_change_containerdistribution',
                'container.namespace_modify_content_containerpushrepository',
                'container.change_containernamespace',
                'container.namespace_push_containerdistribution',
                'container.add_containernamespace',
            ],
        },
        // These aren't currently used. Removing them to reduce confusion in the UI
        // {
        //   name: 'distribution',
        //   object_permissions: [
        //     'ansible.change_ansibledistribution',
        //     'ansible.view_ansibledistribution',
        //   ],
        // },
        // {
        //   name: 'synclists',
        //   object_permissions: [
        //     'galaxy.delete_synclist',
        //     'galaxy.change_synclist',
        //     'galaxy.view_synclist',
        //     'galaxy.add_synclist',
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
        'galaxy.add_namespace': t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Add namespace"], ["Add namespace"]))),
        'galaxy.change_namespace': t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Change namespace"], ["Change namespace"]))),
        'galaxy.upload_to_namespace': t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Upload to namespace"], ["Upload to namespace"]))),
        'ansible.modify_ansible_repo_content': t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Modify Ansible repo content"], ["Modify Ansible repo content"]))),
        'galaxy.view_user': t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["View user"], ["View user"]))),
        'galaxy.delete_user': t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Delete user"], ["Delete user"]))),
        'galaxy.add_user': t(templateObject_7 || (templateObject_7 = __makeTemplateObject(["Add user"], ["Add user"]))),
        'galaxy.change_user': t(templateObject_8 || (templateObject_8 = __makeTemplateObject(["Change user"], ["Change user"]))),
        'galaxy.view_group': t(templateObject_9 || (templateObject_9 = __makeTemplateObject(["View group"], ["View group"]))),
        'galaxy.delete_group': t(templateObject_10 || (templateObject_10 = __makeTemplateObject(["Delete group"], ["Delete group"]))),
        'galaxy.add_group': t(templateObject_11 || (templateObject_11 = __makeTemplateObject(["Add group"], ["Add group"]))),
        'galaxy.change_group': t(templateObject_12 || (templateObject_12 = __makeTemplateObject(["Change group"], ["Change group"]))),
        'ansible.change_collectionremote': t(templateObject_13 || (templateObject_13 = __makeTemplateObject(["Change collection remote"], ["Change collection remote"]))),
        'ansible.view_collectionremote': t(templateObject_14 || (templateObject_14 = __makeTemplateObject(["View collection remote"], ["View collection remote"]))),
        'ansible.change_ansibledistribution': t(templateObject_15 || (templateObject_15 = __makeTemplateObject(["Change Ansible distribution"], ["Change Ansible distribution"]))),
        'ansible.view_ansibledistribution': t(templateObject_16 || (templateObject_16 = __makeTemplateObject(["View Ansible distribution"], ["View Ansible distribution"]))),
        'galaxy.delete_synclist': t(templateObject_17 || (templateObject_17 = __makeTemplateObject(["Delete synclist"], ["Delete synclist"]))),
        'galaxy.change_synclist': t(templateObject_18 || (templateObject_18 = __makeTemplateObject(["Change synclist"], ["Change synclist"]))),
        'galaxy.view_synclist': t(templateObject_19 || (templateObject_19 = __makeTemplateObject(["View synclist"], ["View synclist"]))),
        'galaxy.add_synclist': t(templateObject_20 || (templateObject_20 = __makeTemplateObject(["Add synclist"], ["Add synclist"]))),
        'container.add_containernamespace': t(templateObject_21 || (templateObject_21 = __makeTemplateObject(["Create new containers"], ["Create new containers"]))),
        'container.namespace_pull_containerdistribution': t(templateObject_22 || (templateObject_22 = __makeTemplateObject(["Pull private containers"], ["Pull private containers"]))),
        'container.namespace_change_containerdistribution': t(templateObject_23 || (templateObject_23 = __makeTemplateObject(["Change containers"], ["Change containers"]))),
        'container.namespace_view_containerdistribution': t(templateObject_24 || (templateObject_24 = __makeTemplateObject(["View private containers"], ["View private containers"]))),
        'container.namespace_modify_content_containerpushrepository': t(templateObject_25 || (templateObject_25 = __makeTemplateObject(["Change image tags"], ["Change image tags"]))),
        'container.change_containernamespace': t(templateObject_26 || (templateObject_26 = __makeTemplateObject(["Change container namespace permissions"], ["Change container namespace permissions"]))),
        'container.namespace_push_containerdistribution': t(templateObject_27 || (templateObject_27 = __makeTemplateObject(["Push to existing containers"], ["Push to existing containers"]))),
    };
    Constants.GROUP_HUMAN_PERMISSIONS = {
        change_namespace: t(templateObject_28 || (templateObject_28 = __makeTemplateObject(["Change namespace"], ["Change namespace"]))),
        upload_to_namespace: t(templateObject_29 || (templateObject_29 = __makeTemplateObject(["Upload to namespace"], ["Upload to namespace"]))),
        add_containernamespace: t(templateObject_30 || (templateObject_30 = __makeTemplateObject(["Create new containers"], ["Create new containers"]))),
        namespace_pull_containerdistribution: t(templateObject_31 || (templateObject_31 = __makeTemplateObject(["Pull private containers"], ["Pull private containers"]))),
        namespace_change_containerdistribution: t(templateObject_32 || (templateObject_32 = __makeTemplateObject(["Update container information"], ["Update container information"]))),
        namespace_view_containerdistribution: t(templateObject_33 || (templateObject_33 = __makeTemplateObject(["View private containers"], ["View private containers"]))),
        namespace_modify_content_containerpushrepository: t(templateObject_34 || (templateObject_34 = __makeTemplateObject(["Change image tags"], ["Change image tags"]))),
        change_containernamespace: t(templateObject_35 || (templateObject_35 = __makeTemplateObject(["Change container namespace permissions"], ["Change container namespace permissions"]))),
        namespace_push_containerdistribution: t(templateObject_36 || (templateObject_36 = __makeTemplateObject(["Push images to existing containers"], ["Push images to existing containers"]))),
        view_containernamespace: t(templateObject_37 || (templateObject_37 = __makeTemplateObject(["View container's namespace"], ["View container's namespace"]))),
        delete_containernamespace: t(templateObject_38 || (templateObject_38 = __makeTemplateObject(["Delete container's namespace"], ["Delete container's namespace"]))),
        namespace_delete_containerdistribution: t(templateObject_39 || (templateObject_39 = __makeTemplateObject(["Delete container's distribution"], ["Delete container's distribution"]))),
        namespace_view_containerpushrepository: t(templateObject_40 || (templateObject_40 = __makeTemplateObject(["View container's repository"], ["View container's repository"]))),
        namespace_add_containerdistribution: t(templateObject_41 || (templateObject_41 = __makeTemplateObject(["Push new containers"], ["Push new containers"]))),
        change_containerdistribution: t(templateObject_42 || (templateObject_42 = __makeTemplateObject(["Change distribution"], ["Change distribution"]))),
        delete_containerdistribution: t(templateObject_43 || (templateObject_43 = __makeTemplateObject(["Delete distribution"], ["Delete distribution"]))),
        push_containerdistribution: t(templateObject_44 || (templateObject_44 = __makeTemplateObject(["Push distribution"], ["Push distribution"]))),
        pull_containerdistribution: t(templateObject_45 || (templateObject_45 = __makeTemplateObject(["Pull distribution"], ["Pull distribution"]))),
        view_containerdistribution: t(templateObject_46 || (templateObject_46 = __makeTemplateObject(["View distribution"], ["View distribution"]))),
    };
    Constants.HUMAN_GROUP_DETAIL_PERMISSIONS = {
        namespaces: t(templateObject_47 || (templateObject_47 = __makeTemplateObject(["Namespaces"], ["Namespaces"]))),
        collections: t(templateObject_48 || (templateObject_48 = __makeTemplateObject(["Collections"], ["Collections"]))),
        users: t(templateObject_49 || (templateObject_49 = __makeTemplateObject(["Users"], ["Users"]))),
        groups: t(templateObject_50 || (templateObject_50 = __makeTemplateObject(["Groups"], ["Groups"]))),
        remotes: t(templateObject_51 || (templateObject_51 = __makeTemplateObject(["Remotes"], ["Remotes"]))),
        containers: t(templateObject_52 || (templateObject_52 = __makeTemplateObject(["Containers"], ["Containers"]))),
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
        published: t(templateObject_53 || (templateObject_53 = __makeTemplateObject(["Published"], ["Published"]))),
        'rh-certified': t(templateObject_54 || (templateObject_54 = __makeTemplateObject(["Red Hat Certified"], ["Red Hat Certified"]))),
        community: t(templateObject_55 || (templateObject_55 = __makeTemplateObject(["Community"], ["Community"]))),
    };
    Constants.ALLOWEDREPOS = ['community', 'published', 'rh-certified'];
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
        'galaxy_ng.app.tasks.promotion._remove_content_from_repository': t(templateObject_56 || (templateObject_56 = __makeTemplateObject(["Remove content from repository"], ["Remove content from repository"]))),
        'galaxy_ng.app.tasks.publishing.import_and_auto_approve': t(templateObject_57 || (templateObject_57 = __makeTemplateObject(["Import and auto approve"], ["Import and auto approve"]))),
        'galaxy_ng.app.tasks.curate_synclist_repository': t(templateObject_58 || (templateObject_58 = __makeTemplateObject(["Curate synclist repository"], ["Curate synclist repository"]))),
        'galaxy_ng.app.tasks.import_and_move_to_staging': t(templateObject_59 || (templateObject_59 = __makeTemplateObject(["Import and move to staging"], ["Import and move to staging"]))),
        'galaxy_ng.app.tasks.import_and_auto_approve': t(templateObject_60 || (templateObject_60 = __makeTemplateObject(["Import and auto approve"], ["Import and auto approve"]))),
        'galaxy_ng.app.tasks.curate_all_synclist_repository': t(templateObject_61 || (templateObject_61 = __makeTemplateObject(["Curate all synclist repository"], ["Curate all synclist repository"]))),
        'galaxy_ng.app.tasks.synclist.curate_synclist_repository_batch': t(templateObject_62 || (templateObject_62 = __makeTemplateObject(["Curate synclist repository batch"], ["Curate synclist repository batch"]))),
        'pulp_ansible.app.tasks.collections.sync': t(templateObject_63 || (templateObject_63 = __makeTemplateObject(["Pulp Ansible: Collections sync"], ["Pulp Ansible: Collections sync"]))),
        'pulp_ansible.app.tasks.copy.copy_content': t(templateObject_64 || (templateObject_64 = __makeTemplateObject(["Pulp ansible: Copy content"], ["Pulp ansible: Copy content"]))),
        'pulp_ansible.app.tasks.collections.collection_sync': t(templateObject_65 || (templateObject_65 = __makeTemplateObject(["Pulp ansible: collection sync"], ["Pulp ansible: collection sync"]))),
        'pulp_ansible.app.tasks.roles.synchronize': t(templateObject_66 || (templateObject_66 = __makeTemplateObject(["Pulp Ansible: Roles synchronize"], ["Pulp Ansible: Roles synchronize"]))),
        'pulp_ansible.app.tasks.collections.update_collection_remote': t(templateObject_67 || (templateObject_67 = __makeTemplateObject(["Pulp ansible: Update collection remote"], ["Pulp ansible: Update collection remote"]))),
        'pulp_ansible.app.tasks.collections.import_collection': t(templateObject_68 || (templateObject_68 = __makeTemplateObject(["Pulp ansible: Import collection"], ["Pulp ansible: Import collection"]))),
        'pulp_container.app.tasks.tag_image': t(templateObject_69 || (templateObject_69 = __makeTemplateObject(["Pulp container: Tag image"], ["Pulp container: Tag image"]))),
        'pulp_container.app.tasks.untag_image': t(templateObject_70 || (templateObject_70 = __makeTemplateObject(["Pulp container: Untage image"], ["Pulp container: Untage image"]))),
        'pulp_container.app.tasks.synchronize': t(templateObject_71 || (templateObject_71 = __makeTemplateObject(["Pulp container: Tasks synchronize"], ["Pulp container: Tasks synchronize"]))),
        'pulp_container.app.tasks.recursive_add_content': t(templateObject_72 || (templateObject_72 = __makeTemplateObject(["Pulp container: Recursive add content"], ["Pulp container: Recursive add content"]))),
        'pulp_container.app.tasks.recursive_remove_content': t(templateObject_73 || (templateObject_73 = __makeTemplateObject(["Pulp container: Recursive remove content"], ["Pulp container: Recursive remove content"]))),
        'pulp_container.app.tasks.build_image_from_containerfile': t(templateObject_74 || (templateObject_74 = __makeTemplateObject(["Pulp container: Build image from containerfile"], ["Pulp container: Build image from containerfile"]))),
        'pulp_container.app.tasks.general_multi_delete': t(templateObject_75 || (templateObject_75 = __makeTemplateObject(["Pulp container: General multi delete"], ["Pulp container: General multi delete"]))),
        'pulpcore.tasking.tasks.import_repository_version': t(templateObject_76 || (templateObject_76 = __makeTemplateObject(["Pulpcore: Import repository version"], ["Pulpcore: Import repository version"]))),
        'pulpcore.tasking.tasks.orphan_cleanup': t(templateObject_77 || (templateObject_77 = __makeTemplateObject(["Pulpcore: Orphan cleanup"], ["Pulpcore: Orphan cleanup"]))),
        'pulpcore.tasking.tasks.repair_all_artifacts': t(templateObject_78 || (templateObject_78 = __makeTemplateObject(["Pulpcore: Repair all artifacts"], ["Pulpcore: Repair all artifacts"]))),
        'pulpcore.tasking.tasks.base.general_create': t(templateObject_79 || (templateObject_79 = __makeTemplateObject(["Pulpcore: General create"], ["Pulpcore: General create"]))),
        'pulpcore.tasking.tasks.base.general_update': t(templateObject_80 || (templateObject_80 = __makeTemplateObject(["Pulpcore: General update"], ["Pulpcore: General update"]))),
        'pulpcore.tasking.tasks.base.general_delete': t(templateObject_81 || (templateObject_81 = __makeTemplateObject(["Pulpcore: General delete"], ["Pulpcore: General delete"]))),
        'pulpcore.app.tasks.export.pulp_export': t(templateObject_82 || (templateObject_82 = __makeTemplateObject(["Pulpcore: Pulp export"], ["Pulpcore: Pulp export"]))),
        'pulpcore.app.tasks.pulp_import': t(templateObject_83 || (templateObject_83 = __makeTemplateObject(["Pulpcore: Pulp import"], ["Pulpcore: Pulp import"]))),
        'pulpcore.app.tasks.repository.delete_version': t(templateObject_84 || (templateObject_84 = __makeTemplateObject(["Pulpcore: Delete version"], ["Pulpcore: Delete version"]))),
        'pulpcore.app.tasks.repository.repair_version': t(templateObject_85 || (templateObject_85 = __makeTemplateObject(["Pulpcore: Repair version"], ["Pulpcore: Repair version"]))),
        'pulpcore.app.tasks.upload.commit': t(templateObject_86 || (templateObject_86 = __makeTemplateObject(["Pulpcore: Upload commit"], ["Pulpcore: Upload commit"]))),
        'pulpcore.app.tasks.repository.add_and_remove': t(templateObject_87 || (templateObject_87 = __makeTemplateObject(["Pulpcore: Add and remove"], ["Pulpcore: Add and remove"]))),
        'pulpcore.plugin.tasking.add_and_remove': t(templateObject_88 || (templateObject_88 = __makeTemplateObject(["Pulpcore: Add or remove"], ["Pulpcore: Add or remove"]))),
    };
    Constants.HUMAN_STATUS = {
        completed: t(templateObject_89 || (templateObject_89 = __makeTemplateObject(["Completed"], ["Completed"]))),
        failed: t(templateObject_90 || (templateObject_90 = __makeTemplateObject(["Failed"], ["Failed"]))),
        running: t(templateObject_91 || (templateObject_91 = __makeTemplateObject(["Running"], ["Running"]))),
        waiting: t(templateObject_92 || (templateObject_92 = __makeTemplateObject(["Waiting"], ["Waiting"]))),
    };
    return Constants;
}());
export { Constants };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25, templateObject_26, templateObject_27, templateObject_28, templateObject_29, templateObject_30, templateObject_31, templateObject_32, templateObject_33, templateObject_34, templateObject_35, templateObject_36, templateObject_37, templateObject_38, templateObject_39, templateObject_40, templateObject_41, templateObject_42, templateObject_43, templateObject_44, templateObject_45, templateObject_46, templateObject_47, templateObject_48, templateObject_49, templateObject_50, templateObject_51, templateObject_52, templateObject_53, templateObject_54, templateObject_55, templateObject_56, templateObject_57, templateObject_58, templateObject_59, templateObject_60, templateObject_61, templateObject_62, templateObject_63, templateObject_64, templateObject_65, templateObject_66, templateObject_67, templateObject_68, templateObject_69, templateObject_70, templateObject_71, templateObject_72, templateObject_73, templateObject_74, templateObject_75, templateObject_76, templateObject_77, templateObject_78, templateObject_79, templateObject_80, templateObject_81, templateObject_82, templateObject_83, templateObject_84, templateObject_85, templateObject_86, templateObject_87, templateObject_88, templateObject_89, templateObject_90, templateObject_91, templateObject_92;
//# sourceMappingURL=constants.js.map