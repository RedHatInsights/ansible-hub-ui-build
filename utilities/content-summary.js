var Summary = /** @class */ (function () {
    function Summary() {
    }
    return Summary;
}());
export function convertContentSummaryCounts(_a) {
    var content = _a.contents, dependencies = _a.dependencies;
    var summary = {
        total_count: content.length,
        contents: {
            module: 0,
            role: 0,
            plugin: 0,
            dependency: Object.keys(dependencies).length,
        },
    };
    for (var _i = 0, content_1 = content; _i < content_1.length; _i++) {
        var c = content_1[_i];
        if (c.content_type === 'role') {
            summary.contents.role++;
        }
        else if (c.content_type === 'module') {
            summary.contents.module++;
        }
        else {
            summary.contents.plugin++;
        }
    }
    return summary;
}
//# sourceMappingURL=content-summary.js.map