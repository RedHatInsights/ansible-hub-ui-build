function getBaseName(pathname) {
    var release = '/';
    var pathName = pathname.split('/');
    pathName.shift();
    if (pathName[0] === 'beta') {
        pathName.shift();
        release = "/beta/";
    }
    return "".concat(release).concat(pathName[0], "/").concat(pathName[1]);
}
export default getBaseName;
//# sourceMappingURL=getBaseName.js.map