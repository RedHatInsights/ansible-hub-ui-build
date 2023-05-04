var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { t } from '@lingui/macro';
import { Button, ButtonVariant, FileUpload, Modal, ModalVariant, } from '@patternfly/react-core';
import React, { useState } from 'react';
export var UploadSingCertificateModal = function (_a) {
    var isOpen = _a.isOpen, onSubmit = _a.onSubmit, onCancel = _a.onCancel;
    var _b = useState(''), filename = _b[0], setFilename = _b[1];
    var _c = useState(null), path = _c[0], setPath = _c[1];
    var handleFileInputChange = function (e, file) {
        setFilename(file.name);
        setPath(file);
    };
    return (React.createElement(Modal, { variant: ModalVariant.medium, title: t(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Upload signature"], ["Upload signature"]))), isOpen: isOpen, onClose: onCancel, actions: [
            React.createElement(Button, { key: 'upload', variant: ButtonVariant.primary, isDisabled: !filename, onClick: function () {
                    onSubmit(path);
                    setFilename('');
                    setPath(null);
                } }, t(templateObject_2 || (templateObject_2 = __makeTemplateObject(["Upload"], ["Upload"])))),
            React.createElement(Button, { key: 'cancel', variant: ButtonVariant.link, onClick: onCancel }, t(templateObject_3 || (templateObject_3 = __makeTemplateObject(["Cancel"], ["Cancel"])))),
        ] },
        React.createElement("p", null, t(templateObject_4 || (templateObject_4 = __makeTemplateObject(["Please select a signature file to upload."], ["Please select a signature file to upload."])))),
        React.createElement(FileUpload, { id: 'certificate-file', filename: filename, filenamePlaceholder: t(templateObject_5 || (templateObject_5 = __makeTemplateObject(["Drag and drop a file or upload one."], ["Drag and drop a file or upload one."]))), browseButtonText: t(templateObject_6 || (templateObject_6 = __makeTemplateObject(["Select file"], ["Select file"]))), onFileInputChange: handleFileInputChange, onClearClick: function () { return setFilename(''); } })));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=upload-sign-certificate-modal.js.map