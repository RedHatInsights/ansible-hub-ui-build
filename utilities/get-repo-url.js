// Returns the API path for a specific repository
export function getRepoUrl(distributionPath) {
    // If the api is hosted on another URL, use API_HOST as the host part of the URL.
    // Otherwise use the host that the UI is served from
    var host = API_HOST ? API_HOST : window.location.origin;
    return distributionPath
        ? "".concat(host).concat(API_BASE_PATH, "content/").concat(distributionPath, "/")
        : "".concat(host).concat(API_BASE_PATH);
}
// returns the server name for (protocol-less) container urls
// url/image, url/image:tag, url/image@digest (including sha256: prefix)
export function getContainersURL(_a) {
    var name = _a.name, tag = _a.tag, digest = _a.digest;
    var host = window.location.host;
    return "".concat(host, "/").concat(name).concat(tag ? ":".concat(tag) : '').concat(digest && !tag ? "@".concat(digest) : '');
}
//# sourceMappingURL=get-repo-url.js.map