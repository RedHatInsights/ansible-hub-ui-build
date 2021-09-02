// returns value/key based on given value/key and a mapper
export function twoWayMapper(value, mapper) {
    if (Object.values(mapper).includes(value)) {
        return Object.keys(mapper).find(function (key) { return mapper[key] === value; });
    }
    if (Object.keys(mapper).includes(value)) {
        return mapper[value];
    }
    return undefined;
}
//# sourceMappingURL=two-way-mapper.js.map