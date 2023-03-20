import { saveAs } from 'file-saver';
export var downloadString = function (data, filename) {
    return saveAs(new Blob([data], {
        type: 'text/plain;charset=utf-8',
    }), filename);
};
//# sourceMappingURL=download-data.js.map