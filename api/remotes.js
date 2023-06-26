import { clearSetFieldsFromRequest } from 'src/utilities';
// removes unchanged values and write only fields before updating
export function smartUpdate(remote, unmodifiedRemote) {
    // Deletes any write only fields from the object that are market as is_set.
    // This is to prevent accidentally clearing fields that weren't updated.
    // TODO: clearing set fields from the response will be unnecesary if the API
    // stops returning field: null on write only fields
    var reducedData = clearSetFieldsFromRequest(remote, remote.write_only_fields);
    // Pulp complains if auth_url gets sent with a request that doesn't include a
    // valid token, even if the token exists in the database and isn't being changed.
    // To solve this issue, simply delete auth_url from the request if it hasn't
    // been updated by the user.
    if (reducedData.auth_url === unmodifiedRemote.auth_url) {
        delete reducedData['auth_url'];
    }
    for (var _i = 0, _a = Object.keys(reducedData); _i < _a.length; _i++) {
        var field = _a[_i];
        if (reducedData[field] === '') {
            reducedData[field] = null;
        }
    }
    return reducedData;
}
//# sourceMappingURL=remotes.js.map