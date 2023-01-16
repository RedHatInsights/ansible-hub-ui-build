import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
// compatibility layer between react-router v6 and class components
// differences from v5:
// history.push -> navigate
// location -> location
// match.params -> routeParams
// match.path -> routePath
var RouteProps = /** @class */ (function () {
    function RouteProps() {
    }
    return RouteProps;
}());
export { RouteProps };
export var withRouter = function (ClassComponent) {
    var WithRouter = function (_a) {
        var path = _a.path;
        var location = useLocation();
        var navigate = useNavigate();
        var params = useParams();
        return (React.createElement(ClassComponent, { location: location, navigate: navigate, routeParams: params, routePath: path }));
    };
    WithRouter.displayName = "withRouter(".concat(ClassComponent.displayName || ClassComponent.name, ")");
    return WithRouter;
};
//# sourceMappingURL=with-router.js.map