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
import { cloneDeep } from 'lodash';
export var ParamHelper = /** @class */ (function () {
    function ParamHelper() {
    }
    // Helper class for managing param object.
    // Param object is just a dictionary where the keys map to
    // parameter names that contain a value or list of values
    // Convert URLSearchParams object to param object
    ParamHelper.parseParamString = function (paramString, numericTypes) {
        var params = {};
        var paramObj = new URLSearchParams(paramString);
        var v;
        paramObj.forEach(function (val, key) {
            // do not append empty values at all (this will disable searching by empty strings)
            if (val.trim().length == 0) {
                return;
            }
            // Parse value as number if it's included in the list of numeric
            // types.
            // It seems like there should be a better way to do this based off
            // of the interface for the parameters, but I can't figure out if
            // that's possible or not
            if (numericTypes && numericTypes.includes(key)) {
                v = Number(val);
            }
            else {
                v = val;
            }
            params = ParamHelper.appendParam(params, key, v);
        });
        return params;
    };
    // Replaces specified parameter with speficied value
    ParamHelper.setParam = function (p, key, value) {
        var params = cloneDeep(p);
        params[key] = value;
        return params;
    };
    // Appends parameter to existing value
    ParamHelper.appendParam = function (p, key, value) {
        var params = cloneDeep(p);
        if (params[key]) {
            if (Array.isArray(params[key])) {
                params[key].push(value);
            }
            else {
                params[key] = [params[key], value];
            }
        }
        else {
            params[key] = value;
        }
        return params;
    };
    // Returns a reduced set of parameters. Useful when not all params should
    // be passed to the API
    ParamHelper.getReduced = function (p, keys) {
        var params = cloneDeep(p);
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var k = keys_1[_i];
            delete params[k];
        }
        return params;
    };
    // Removes a parameter, or a specific key value pair from a parameter object
    ParamHelper.deleteParam = function (p, key, value) {
        var params = cloneDeep(p);
        if (value && Array.isArray(params[key]) && params[key].length > 1) {
            var i = params[key].indexOf(value);
            if (i !== -1) {
                params[key].splice(i, 1);
            }
        }
        else {
            delete params[key];
        }
        return params;
    };
    // Checks to see if a specific key value pair exists
    ParamHelper.paramExists = function (params, key, value) {
        var param = params[key];
        if (param) {
            if (Array.isArray(param)) {
                return param.includes(value);
            }
            else {
                return param === value;
            }
        }
        else {
            return false;
        }
    };
    // Returns the query string for the set of parameters
    ParamHelper.getQueryString = function (params, ignoreParams) {
        var paramString = [];
        for (var _i = 0, _a = Object.keys(params); _i < _a.length; _i++) {
            var key = _a[_i];
            // skip the param if its in the list of ignored params
            if (ignoreParams && ignoreParams.includes(key)) {
                continue;
            }
            if (Array.isArray(params[key])) {
                for (var _b = 0, _c = params[key]; _b < _c.length; _b++) {
                    var val = _c[_b];
                    paramString.push(key + '=' + encodeURIComponent(val));
                }
            }
            else {
                paramString.push(key + '=' + encodeURIComponent(params[key]));
            }
        }
        return paramString.join('&');
    };
    // Reusable function that can be included in a component to update it's
    // internal state and page params at the same time
    ParamHelper.updateParamsMixin = function (ignoreParams) {
        return function (params, callback) {
            // Note. In the callback, make sure to reference the state as
            // this.state instead of const { foo } = this.state.
            // In the example above, foo only gets set to the latest state after
            // the component re-runs render() and the callback typically gets
            // executed before that happens
            this.setState({ params: params }, callback);
            this.props.navigate({
                search: '?' + ParamHelper.getQueryString(params, ignoreParams || []),
            });
        };
    };
    // removes any params not in ignoredParams from params and calls updateParams with it
    ParamHelper.clearAllFilters = function (_a) {
        var params = _a.params, ignoredParams = _a.ignoredParams, updateParams = _a.updateParams;
        var deleteKeys = Object.keys(ParamHelper.getReduced(params, ignoredParams));
        for (var _i = 0, deleteKeys_1 = deleteKeys; _i < deleteKeys_1.length; _i++) {
            var key = deleteKeys_1[_i];
            params = ParamHelper.deleteParam(params, key);
        }
        updateParams(__assign(__assign({}, params), { page: 1 }));
    };
    // check if params are valid for sorting
    ParamHelper.validSortParams = function (sort, sortParams, defaultSort) {
        var isDesc = sort.includes('-');
        var ascSort = isDesc ? sort.replace('-', '') : sort;
        if (sortParams.includes(ascSort)) {
            return isDesc ? sort : ascSort;
        }
        return defaultSort;
    };
    return ParamHelper;
}());
//# sourceMappingURL=param-helper.js.map