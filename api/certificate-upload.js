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
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.apiPath = 'content/ansible/collection_signatures/';
        return _this;
    }
    // Returns /api/automation-hub/pulp/api/v3/tasks/0be64cb4-3b7e-4a6b-b35d-c3b589923a90/
    API.prototype.upload = function (data) {
        var formData = new FormData();
        formData.append('file', data.file);
        formData.append('repository', data.repository);
        formData.append('signed_collection', data.signed_collection);
        var config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        };
        return this.http.post(this.apiPath, formData, config);
    };
    return API;
}(PulpAPI));
export var CertificateUploadAPI = new API();
//# sourceMappingURL=certificate-upload.js.map