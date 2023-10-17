import { Constants } from 'src/constants';
export function namespaceTitle(_a) {
    var name = _a.name, company = _a.company;
    return DEPLOYMENT_MODE === Constants.INSIGHTS_DEPLOYMENT_MODE
        ? company || name
        : name;
}
//# sourceMappingURL=namespace-title.js.map