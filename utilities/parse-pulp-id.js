var UUIDRegEx = /\b[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12}\b/i;
export function parsePulpIDFromURL(url) {
    for (var _i = 0, _a = url.split('/'); _i < _a.length; _i++) {
        var section = _a[_i];
        if (section.match(UUIDRegEx)) {
            return section;
        }
    }
    return null;
}
//# sourceMappingURL=parse-pulp-id.js.map