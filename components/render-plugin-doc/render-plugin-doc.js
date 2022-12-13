var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import * as React from 'react';
import './render-plugin-doc.scss';
var RenderPluginDoc = /** @class */ (function (_super) {
    __extends(RenderPluginDoc, _super);
    function RenderPluginDoc(props) {
        var _this = _super.call(this, props) || this;
        // checks if I(), B(), M(), U(), L(), or C() exists. Returns type (ex: B)
        // and value in parenthesis. Based off of formatters in ansible:
        // https://github.com/ansible/ansible/blob/devel/hacking/build_library/build_ansible/jinja2/filters.py#L26
        _this.CUSTOM_FORMATTERS = /([IBMULC])\(([^)]+)\)/gm;
        _this.state = {
            renderError: false,
        };
        return _this;
    }
    RenderPluginDoc.prototype.componentDidCatch = function (error) {
        console.log(error);
        this.setState({ renderError: true });
    };
    RenderPluginDoc.prototype.render = function () {
        var plugin = this.props.plugin;
        if (!this.state.renderError) {
            // componentDidCatch doesn't seem to be able to catch errors that
            // are thrown outside of return(), so we'll wrap everything in a
            // try just in case
            var doc = void 0;
            var example = void 0;
            var returnVals = void 0;
            var content = void 0;
            try {
                doc = this.parseDocString(plugin);
                example = this.parseExamples(plugin);
                returnVals = this.parseReturn(plugin);
                content = {
                    synopsis: this.renderSynopsis(doc),
                    parameters: this.renderParameters(doc.options, plugin.content_type, this.subOptionsMaxDepth),
                    notes: this.renderNotes(doc),
                    examples: this.renderExample(example),
                    returnValues: this.renderReturnValues(returnVals, this.returnContainMaxDepth),
                    shortDescription: this.renderShortDescription(doc),
                    deprecated: this.renderDeprecated(doc, plugin.content_name),
                    requirements: this.renderRequirements(doc),
                };
            }
            catch (err) {
                console.log(err);
                return this.renderError(plugin);
            }
            return (React.createElement("div", null,
                React.createElement("h1", null,
                    plugin.content_type,
                    " > ",
                    plugin.content_name),
                React.createElement("br", null),
                content.shortDescription,
                content.deprecated,
                this.renderTableOfContents(content),
                content.synopsis,
                content.requirements,
                content.parameters,
                content.notes,
                content.examples,
                content.returnValues));
        }
        else {
            return this.renderError(plugin);
        }
    };
    RenderPluginDoc.prototype.renderError = function (plugin) {
        // There's a good chance that something about the plugin doc data will
        // be malformed since it isn't validated. When that hapens, show an
        // error instead of crashing the whole app
        return (React.createElement(React.Fragment, null,
            this.props.renderWarning('Documentation Syntax Error: cannot parse plugin documention.'),
            React.createElement("br", null),
            React.createElement("div", null,
                plugin.content_type && plugin.content_name ? (React.createElement("h1", null,
                    plugin.content_type,
                    " > ",
                    plugin.content_name)) : null,
                React.createElement("p", null, "The documentation object for this plugin seems to contain invalid syntax that makes it impossible for Automation Hub to parse. You can still look at the unformatted documentation object bellow if you need to."),
                React.createElement("h2", null, "Unformatted Documentation"),
                React.createElement("pre", { className: 'plugin-raw' }, JSON.stringify(plugin, null, 2)))));
    };
    RenderPluginDoc.prototype.parseDocString = function (plugin) {
        // TODO: if the parser can't figure out what to do with the object
        // passed to it, it should throw an error that can be displayed to the
        // user with the piece of the documention that's broken.
        var _this = this;
        // TODO: make the doc string match the desired output as closely as
        // possible
        if (!plugin.doc_strings) {
            return { description: [], short_description: '' };
        }
        var doc = __assign({}, plugin.doc_strings.doc);
        var maxDepth = 0;
        var parseOptions = function (options, depth) {
            if (depth > maxDepth) {
                maxDepth = depth;
            }
            for (var _i = 0, options_1 = options; _i < options_1.length; _i++) {
                var op = options_1[_i];
                // Description is expected to be an array of strings. If its not,
                // do what we can to make it one
                op.description = _this.ensureListofStrings(op.description);
                if (typeof op.default === 'object') {
                    op.default = JSON.stringify(op.default);
                }
                // recursively parse sub options
                if (op.suboptions) {
                    parseOptions(op.suboptions, depth + 1);
                }
            }
        };
        if (doc.options) {
            parseOptions(doc.options, 0);
        }
        doc.description = this.ensureListofStrings(doc.description);
        this.subOptionsMaxDepth = maxDepth;
        return doc;
    };
    RenderPluginDoc.prototype.parseExamples = function (plugin) {
        if (!plugin.doc_strings) {
            return null;
        }
        if (typeof plugin.doc_strings.examples === 'string') {
            // the examples always seem to have an annoying new line at the top
            // so just replace it here if it exists.
            return plugin.doc_strings.examples.replace('\n', '');
        }
        else {
            return null;
        }
    };
    RenderPluginDoc.prototype.parseReturn = function (plugin) {
        // TODO: make the return string match the desired output as closely as
        // possible
        var _this = this;
        if (!plugin.doc_strings) {
            return null;
        }
        if (!plugin.doc_strings.return) {
            return null;
        }
        var maxDepth = 0;
        var parseReturnRecursive = function (returnV, depth) {
            if (depth > maxDepth) {
                maxDepth = depth;
            }
            for (var _i = 0, returnV_1 = returnV; _i < returnV_1.length; _i++) {
                var ret = returnV_1[_i];
                // Description is expected to be an array of strings. If its not,
                // do what we can to make it one
                ret.description = _this.ensureListofStrings(ret.description);
                // recursively parse sub options
                if (ret.contains) {
                    parseReturnRecursive(ret.contains, depth + 1);
                }
            }
        };
        var returnValues = __spreadArray([], plugin.doc_strings.return, true);
        parseReturnRecursive(returnValues, 0);
        this.returnContainMaxDepth = maxDepth;
        return returnValues;
    };
    // This functions similar to how string.replace() works, except it returns
    // a react object instead of a string
    RenderPluginDoc.prototype.reactReplace = function (text, reg, replacement) {
        var fragments = [];
        var match;
        var prevIndex = 0;
        while ((match = reg.exec(text)) !== null) {
            fragments.push(text.substr(prevIndex, reg.lastIndex - prevIndex - match[0].length));
            fragments.push(replacement(match));
            prevIndex = reg.lastIndex;
        }
        if (fragments.length === 0) {
            return React.createElement("span", null, text);
        }
        // append any text after the last match
        if (prevIndex != text.length - 1) {
            fragments.push(text.substring(prevIndex));
        }
        return (React.createElement("span", null, fragments.map(function (x, i) { return (React.createElement(React.Fragment, { key: i }, x)); })));
    };
    RenderPluginDoc.prototype.applyDocFormatters = function (text) {
        var _a = this.props, renderModuleLink = _a.renderModuleLink, renderDocLink = _a.renderDocLink;
        var nstring = this.reactReplace(text, this.CUSTOM_FORMATTERS, function (match) {
            var fullMatch = match[0];
            var type = match[1];
            var textMatch = match[2];
            switch (type) {
                case 'L': {
                    var url = textMatch.split(',');
                    return renderDocLink(url[0], url[1]);
                }
                case 'U':
                    return (React.createElement("a", { href: textMatch, target: '_blank', rel: 'noreferrer' }, textMatch));
                case 'I':
                    return React.createElement("i", null, textMatch);
                case 'C':
                    return React.createElement("span", { className: 'inline-code' }, textMatch);
                case 'M':
                    return renderModuleLink(textMatch);
                case 'B':
                    return React.createElement("b", null, textMatch);
                default:
                    return fullMatch;
            }
        });
        return nstring;
    };
    RenderPluginDoc.prototype.ensureListofStrings = function (v) {
        if (typeof v === 'string') {
            return [v];
        }
        else if (!v) {
            return [];
        }
        else {
            return v;
        }
    };
    RenderPluginDoc.prototype.renderDeprecated = function (doc, pluginName) {
        var isDeprecated = doc.deprecated || pluginName.startsWith('_');
        if (!isDeprecated) {
            return null;
        }
        var deprecated = doc.deprecated || {};
        return (React.createElement(React.Fragment, null,
            React.createElement("h2", null, "DEPRECATED"),
            deprecated.removed_in ? (React.createElement("div", null,
                React.createElement("b", null, "Removed in version"),
                " ",
                doc.deprecated.removed_in)) : null,
            React.createElement("div", null,
                React.createElement("b", null, "Why: "),
                deprecated.why ? doc.deprecated.why : 'No reason specified.'),
            React.createElement("div", null,
                React.createElement("b", null, "Alternative: "),
                deprecated.alternative
                    ? doc.deprecated.alternative
                    : 'No alternatives specified.')));
    };
    RenderPluginDoc.prototype.renderTableOfContents = function (content) {
        // return this.props.renderTableOfContentsLink('Synopsis', 'synopsis');
        return (React.createElement("ul", null,
            content['synopsis'] !== null && (React.createElement("li", null, this.props.renderTableOfContentsLink('Synopsis', 'synopsis'))),
            content['parameters'] !== null && (React.createElement("li", null, this.props.renderTableOfContentsLink('Parameters', 'parameters'))),
            content['notes'] !== null && (React.createElement("li", null, this.props.renderTableOfContentsLink('Notes', 'notes'))),
            content['examples'] !== null && (React.createElement("li", null, this.props.renderTableOfContentsLink('Examples', 'examples'))),
            content['returnValues'] !== null && (React.createElement("li", null, this.props.renderTableOfContentsLink('Return Values', 'return-values')))));
    };
    RenderPluginDoc.prototype.renderShortDescription = function (doc) {
        return React.createElement("div", null, doc.short_description);
    };
    RenderPluginDoc.prototype.renderSynopsis = function (doc) {
        var _this = this;
        return (React.createElement(React.Fragment, null,
            React.createElement("h2", { id: 'synopsis' }, "Synopsis"),
            React.createElement("ul", null, doc.description.map(function (d, i) { return (React.createElement("li", { key: i }, _this.applyDocFormatters(d))); }))));
    };
    RenderPluginDoc.prototype.renderParameters = function (parameters, content_type, maxDepth) {
        if (!parameters) {
            return null;
        }
        // render the entries first,
        var paramEntries = this.renderParameterEntries(parameters, content_type, 0, maxDepth, '');
        return (React.createElement(React.Fragment, null,
            React.createElement("h2", { id: 'parameters' }, "Parameters"),
            React.createElement("table", { className: 'options-table' },
                React.createElement("tbody", null,
                    React.createElement("tr", null,
                        React.createElement("th", { colSpan: maxDepth + 1 }, "Parameter"),
                        React.createElement("th", null,
                            "Choices/",
                            React.createElement("span", { className: 'blue' }, "Defaults")),
                        content_type !== 'module' ? React.createElement("th", null, "Configuration") : null,
                        React.createElement("th", null, "Comments")),
                    paramEntries))));
    };
    RenderPluginDoc.prototype.renderParameterEntries = function (parameters, content_type, depth, maxDepth, parent) {
        var _this = this;
        var output = [];
        parameters.forEach(function (option) {
            var spacers = [];
            var key = "".concat(parent, "-").concat(option.name);
            for (var x = 0; x < depth; x++) {
                spacers.push(React.createElement("td", { key: x, className: 'spacer' }));
            }
            output.push(React.createElement("tr", { key: key },
                spacers,
                React.createElement("td", { colSpan: maxDepth + 1 - depth, className: option.suboptions ? 'parent' : '' },
                    React.createElement("span", { className: 'option-name' }, option.name),
                    React.createElement("small", null,
                        _this.documentedType(option['type']),
                        option['elements'] ? (React.createElement("span", null,
                            ' ',
                            "/ elements =",
                            _this.documentedType(option['elements']))) : null,
                        option['required'] ? (React.createElement("span", null,
                            ' ',
                            "/ ",
                            React.createElement("span", { className: 'red' }, "required"))) : null)),
                React.createElement("td", null, _this.renderChoices(option)),
                content_type !== 'module' ? (React.createElement("td", null, _this.renderPluginConfiguration(option))) : null,
                React.createElement("td", null,
                    option.description.map(function (d, i) { return (React.createElement("p", { key: i }, _this.applyDocFormatters(d))); }),
                    option['aliases'] ? (React.createElement("small", null,
                        React.createElement("span", { className: 'green' },
                            "aliases: ",
                            option['aliases'].join(', ')))) : null)));
            // recursively render sub options
            if (option.suboptions) {
                output = output.concat(_this.renderParameterEntries(option.suboptions, content_type, depth + 1, maxDepth, key));
            }
        });
        return output;
    };
    RenderPluginDoc.prototype.renderPluginConfiguration = function (option) {
        return (React.createElement(React.Fragment, null,
            option['ini'] ? (React.createElement("div", { className: 'plugin-config' },
                "ini entries:",
                option['ini'].map(function (v, i) { return (React.createElement("p", { key: i },
                    "[",
                    v.section,
                    "]",
                    React.createElement("br", null),
                    v.key,
                    " = ",
                    v.default ? v.default : 'VALUE')); }))) : null,
            option['env'] ? (React.createElement("div", { className: 'plugin-config' }, option['env'].map(function (v, i) { return (React.createElement("div", { key: i },
                "env: ",
                v.name)); }))) : null,
            option['vars'] ? (React.createElement("div", { className: 'plugin-config' }, option['vars'].map(function (v, i) { return (React.createElement("div", { key: i },
                "var: ",
                v.name)); }))) : null));
    };
    RenderPluginDoc.prototype.renderChoices = function (option) {
        var choices, defaul;
        if (option['type'] === 'bool') {
            choices = ['no', 'yes'];
            if (option['default'] === true) {
                defaul = 'yes';
            }
            else if (option['default'] === false) {
                defaul = 'no';
            }
        }
        else {
            choices = option['choices'] || [];
            defaul = option['default'];
        }
        return (React.createElement(React.Fragment, null,
            choices && Array.isArray(choices) && choices.length !== 0 ? (React.createElement("div", null,
                React.createElement("span", { className: 'option-name' }, "Choices: "),
                React.createElement("ul", null, choices.map(function (c, i) { return (React.createElement("li", { key: i }, c === defaul ? (React.createElement("span", { className: 'blue' },
                    c,
                    " \u00A0\u2190")) : (c))); })))) : null,
            defaul && !choices.includes(defaul) ? (React.createElement("span", null,
                React.createElement("span", { className: 'option-name' }, "Default: "),
                React.createElement("span", { className: 'blue' }, defaul))) : null));
    };
    RenderPluginDoc.prototype.renderNotes = function (doc) {
        var _this = this;
        if (!doc.notes) {
            return null;
        }
        return (React.createElement(React.Fragment, null,
            React.createElement("h2", { id: 'notes' }, "Notes"),
            React.createElement("ul", null, doc.notes.map(function (note, i) { return (React.createElement("li", { key: i }, _this.applyDocFormatters(note))); }))));
    };
    RenderPluginDoc.prototype.renderRequirements = function (doc) {
        if (!doc.requirements) {
            return null;
        }
        return (React.createElement(React.Fragment, null,
            React.createElement("h2", null, "Requirements"),
            React.createElement("ul", null, doc.requirements.map(function (req, i) { return (React.createElement("li", { key: i }, req)); }))));
    };
    RenderPluginDoc.prototype.renderExample = function (example) {
        if (!example) {
            return null;
        }
        return (React.createElement(React.Fragment, null,
            React.createElement("h2", { id: 'examples' }, "Examples"),
            React.createElement("pre", null, example)));
    };
    RenderPluginDoc.prototype.renderReturnValues = function (returnV, maxDepth) {
        if (!returnV) {
            return null;
        }
        return (React.createElement(React.Fragment, null,
            React.createElement("h2", { id: 'return-values' }, "Return Values"),
            React.createElement("table", { className: 'options-table' },
                React.createElement("tbody", null,
                    React.createElement("tr", null,
                        React.createElement("th", { colSpan: maxDepth + 1 }, "Key"),
                        React.createElement("th", null, "Returned"),
                        React.createElement("th", null, "Description")),
                    this.renderReturnValueEntries(returnV, 0, maxDepth, '')))));
    };
    RenderPluginDoc.prototype.renderReturnValueEntries = function (returnValues, depth, maxDepth, parent) {
        var _this = this;
        var entries = [];
        returnValues.forEach(function (option) {
            var spacers = [];
            for (var x = 0; x < depth; x++) {
                spacers.push(React.createElement("td", { key: x, colSpan: 1, className: 'spacer' }));
            }
            var key = "".concat(parent, "-").concat(option.name);
            entries.push(React.createElement("tr", { key: key },
                spacers,
                React.createElement("td", { colSpan: maxDepth + 1 - depth, className: option.contains ? 'parent' : '' },
                    option.name,
                    " ",
                    React.createElement("br", null),
                    " (",
                    option.type,
                    ")"),
                React.createElement("td", null, option.returned),
                React.createElement("td", null,
                    option.description.map(function (d, i) { return (React.createElement("p", { key: i }, _this.applyDocFormatters(d))); }),
                    option.sample ? (React.createElement("div", null,
                        React.createElement("br", null),
                        "sample:",
                        typeof option.sample === 'string' ? (option.sample) : (React.createElement("pre", null, JSON.stringify(option.sample, null, 2))))) : null)));
            if (option.contains) {
                entries = entries.concat(
                // recursively render values
                _this.renderReturnValueEntries(option.contains, depth + 1, maxDepth, key));
            }
        });
        return entries;
    };
    // https://github.com/ansible/ansible/blob/1b8aa798df6f6fa96ba5ea2a9dbf01b3f1de555c/hacking/build_library/build_ansible/jinja2/filters.py#L53
    RenderPluginDoc.prototype.documentedType = function (text) {
        switch (text) {
            case 'str':
                return 'string';
            case 'bool':
                return 'boolean';
            case 'int':
                return 'integer';
            case 'dict':
                return 'dictionary';
            case undefined:
                return '-';
            default:
                return text;
        }
    };
    return RenderPluginDoc;
}(React.Component));
export { RenderPluginDoc };
//# sourceMappingURL=render-plugin-doc.js.map