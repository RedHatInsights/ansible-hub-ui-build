var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
import ReducerRegistry from '@redhat-cloud-services/frontend-components-utilities/ReducerRegistry';
import promise from 'redux-promise-middleware';
var registry;
export function init() {
    var middleware = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        middleware[_i] = arguments[_i];
    }
    if (registry) {
        throw new Error('store already initialized');
    }
    registry = new ReducerRegistry({}, __spreadArray([promise], middleware));
    //If you want to register all of your reducers, this is good place.
    /*
     *  registry.register({
     *    someName: (state, action) => ({...state})
     *  });
     */
    return registry;
}
export function getStore() {
    return registry.getStore();
}
export function register() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return registry.register.apply(registry, args);
}
//# sourceMappingURL=index.js.map