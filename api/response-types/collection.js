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
var CollectionUploadType = /** @class */ (function () {
    function CollectionUploadType() {
    }
    return CollectionUploadType;
}());
export { CollectionUploadType };
var CollectionVersion = /** @class */ (function () {
    function CollectionVersion() {
    }
    return CollectionVersion;
}());
export { CollectionVersion };
var RenderedFile = /** @class */ (function () {
    function RenderedFile() {
    }
    return RenderedFile;
}());
var CollectionVersionDetail = /** @class */ (function (_super) {
    __extends(CollectionVersionDetail, _super);
    function CollectionVersionDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CollectionVersionDetail;
}(CollectionVersion));
export { CollectionVersionDetail };
var CollectionListType = /** @class */ (function () {
    function CollectionListType() {
    }
    return CollectionListType;
}());
export { CollectionListType };
var PluginContentType = /** @class */ (function () {
    function PluginContentType() {
    }
    return PluginContentType;
}());
export { PluginContentType };
var RoleContentType = /** @class */ (function () {
    function RoleContentType() {
    }
    return RoleContentType;
}());
var PlaybookContentType = /** @class */ (function () {
    function PlaybookContentType() {
    }
    return PlaybookContentType;
}());
var DocsBlobType = /** @class */ (function () {
    function DocsBlobType() {
    }
    return DocsBlobType;
}());
export { DocsBlobType };
var ContentSummaryType = /** @class */ (function () {
    function ContentSummaryType() {
    }
    return ContentSummaryType;
}());
export { ContentSummaryType };
var CollectionDetailType = /** @class */ (function () {
    function CollectionDetailType() {
    }
    return CollectionDetailType;
}());
export { CollectionDetailType };
var CollectionUsedByDependencies = /** @class */ (function (_super) {
    __extends(CollectionUsedByDependencies, _super);
    function CollectionUsedByDependencies() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CollectionUsedByDependencies;
}(CollectionDetailType));
export { CollectionUsedByDependencies };
var DependencyType = /** @class */ (function () {
    function DependencyType() {
    }
    return DependencyType;
}());
export { DependencyType };
//# sourceMappingURL=collection.js.map