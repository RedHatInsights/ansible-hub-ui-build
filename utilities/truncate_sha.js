export function truncateSha(sha) {
    var splitSha = sha.split(':');
    return splitSha[0] + ':' + splitSha[1].slice(0, 8);
}
//# sourceMappingURL=truncate_sha.js.map