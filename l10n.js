var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
import { i18n } from '@lingui/core';
import * as plurals from 'make-plural/plurals';
import * as moment from 'moment';
// remember to update .linguirc as well
var availableLanguages = ['en', 'es', 'fr', 'ko', 'nl', 'ja', 'zh'];
// map missing moment locales (node_modules/moment/src/locale/<locale>.js must exist, except for english)
var momentLocales = {
    zh: 'zh-cn',
};
function activate(locale, pseudolocalization) {
    if (pseudolocalization === void 0) { pseudolocalization = false; }
    return __awaiter(this, void 0, void 0, function () {
        var messages;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, import("src/../locale/".concat(locale, ".js"))];
                case 1:
                    messages = (_a.sent()).messages;
                    if (pseudolocalization) {
                        Object.keys(messages).forEach(function (key) {
                            if (Array.isArray(messages[key])) {
                                // t`Foo ${param}` -> ["Foo ", ['param']] => [">>", "Foo ", ['param'], "<<"]
                                messages[key] = __spreadArray(__spreadArray(['»'], messages[key], true), ['«'], false);
                            }
                            else {
                                // simple string
                                messages[key] = '»' + messages[key] + '«';
                            }
                        });
                    }
                    i18n.loadLocaleData(locale, { plurals: plurals[locale] });
                    i18n.load(locale, messages);
                    i18n.activate(locale);
                    moment.locale(momentLocales[locale] || locale);
                    return [2 /*return*/];
            }
        });
    });
}
// Accept-Language
var userLanguage = navigator.languages
    .map(function (lang) { return lang.replace(/[-_].*/, ''); })
    .filter(function (lang) { return availableLanguages.includes(lang); })[0];
var searchParams = Object.fromEntries(new URLSearchParams(window.location.search));
if (searchParams.pseudolocalization === 'true') {
    window.localStorage.test_l10n = 'true';
}
if (searchParams.pseudolocalization === 'false') {
    delete window.localStorage.test_l10n;
}
if (searchParams.lang) {
    window.localStorage.override_l10n = searchParams.lang;
}
if (searchParams.lang === '') {
    delete window.localStorage.override_l10n;
}
var overrideLanguage = window.localStorage.override_l10n &&
    availableLanguages.includes(window.localStorage.override_l10n) &&
    window.localStorage.override_l10n;
var language = overrideLanguage || userLanguage || 'en';
var pseudolocalization = window.localStorage.test_l10n === 'true';
if (overrideLanguage) {
    console.debug("language autodetection overriden to: ".concat(overrideLanguage, ", unset by visiting ").concat(window.location.origin + window.location.pathname + '?lang='));
}
if (pseudolocalization) {
    console.debug("pseudolocalization enabled, unset by visiting ".concat(window.location.origin +
        window.location.pathname +
        '?pseudolocalization=false'));
}
activate(language, pseudolocalization);
//# sourceMappingURL=l10n.js.map