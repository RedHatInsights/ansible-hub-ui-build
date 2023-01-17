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
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { t } from '@lingui/macro';
import { Spinner } from '@patternfly/react-core';
import * as React from 'react';
import { CollectionAPI } from 'src/api';
import { errorMessage } from 'src/utilities';
var CollectionCount = /** @class */ (function (_super) {
    __extends(CollectionCount, _super);
    function CollectionCount(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            collectionCount: null,
            alerts: [],
            loading: true,
        };
        return _this;
    }
    CollectionCount.prototype.componentDidMount = function () {
        this.getCollectionCount(this.props.distributionPath);
    };
    CollectionCount.prototype.render = function () {
        var _a = this.state, collectionCount = _a.collectionCount, loading = _a.loading;
        return !loading ? React.createElement(React.Fragment, null, collectionCount) : React.createElement(Spinner, { size: 'sm' });
    };
    CollectionCount.prototype.getCollectionCount = function (repo) {
        var _this = this;
        var distributionPath = this.props.distributionPath;
        var promises = [];
        promises.push(CollectionAPI.getPublishedCount(repo).then(function (count) {
            return count;
        }));
        promises.push(CollectionAPI.getExcludesCount(repo).then(function (results) {
            var excludedCollections = results.collections;
            var count = excludedCollections.length;
            return count;
        }));
        Promise.all(promises)
            .then(function (results) {
            var count = results[0] - results[1];
            _this.setState({ collectionCount: count, loading: false });
        })
            .catch(function (err) {
            _this.setState({ loading: false });
            var _a = err.response, status = _a.status, statusText = _a.statusText;
            _this.addAlert(t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Collection count for \"", "\" could not be displayed."], ["Collection count for \"", "\" could not be displayed."])), distributionPath), 'danger', errorMessage(status, statusText));
        });
    };
    CollectionCount.prototype.addAlert = function (title, variant, description) {
        this.setState({
            alerts: __spreadArray(__spreadArray([], this.state.alerts, true), [
                {
                    description: description,
                    title: title,
                    variant: variant,
                },
            ], false),
        });
    };
    return CollectionCount;
}(React.Component));
export { CollectionCount };
var templateObject_1;
//# sourceMappingURL=collection-count.js.map