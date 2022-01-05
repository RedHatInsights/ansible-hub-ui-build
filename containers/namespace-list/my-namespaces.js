var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { NamespaceList } from './namespace-list';
import { Paths } from 'src/paths';
import { AppContext } from 'src/loaders/app-context';
import { EmptyStateUnauthorized } from 'src/components';
var MyNamespaces = /** @class */ (function (_super) {
    __extends(MyNamespaces, _super);
    function MyNamespaces() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyNamespaces.prototype.render = function () {
        if (!this.context.user || this.context.user.is_anonymous) {
            return React.createElement(EmptyStateUnauthorized, null);
        }
        return (React.createElement(NamespaceList, __assign({}, this.props, { namespacePath: Paths.myCollectionsByRepo, filterOwner: true })));
    };
    return MyNamespaces;
}(React.Component));
export default withRouter(MyNamespaces);
MyNamespaces.contextType = AppContext;
//# sourceMappingURL=my-namespaces.js.map