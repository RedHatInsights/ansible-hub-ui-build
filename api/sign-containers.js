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
import { PulpAPI } from './pulp';
var API = /** @class */ (function (_super) {
    __extends(API, _super);
    function API() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    API.prototype.getSigningService = function (serviceName) {
        return this.http.get("/signing-services/?name=".concat(serviceName));
    };
    API.prototype.sign = function (containerId, pulp_type, signServicePath, base_path) {
        var postObj = { manifest_signing_service: signServicePath };
        if (pulp_type == 'container') {
            postObj['future_base_path'] = base_path;
        }
        return this.http.post("/repositories/container/".concat(pulp_type, "/").concat(containerId, "/sign/"), postObj);
    };
    return API;
}(PulpAPI));
export var SignContainersAPI = new API();
//# sourceMappingURL=sign-containers.js.map