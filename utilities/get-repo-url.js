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
export function getContainersURL() {
    return window.location.href.split('://')[1].split('/ui')[0];
}
//# sourceMappingURL=get-repo-url.js.map