"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TargetType = exports.Types = exports.Rarity = void 0;
var Rarity;
(function (Rarity) {
    Rarity["COMMON"] = "Common";
    Rarity["SPECIAL"] = "Special";
    Rarity["EPIC"] = "Epic";
    Rarity["LEGENDARY"] = "Legendary";
    Rarity["CHAMPION"] = "Champion";
})(Rarity || (exports.Rarity = Rarity = {}));
var Types;
(function (Types) {
    Types["TROOP"] = "Troop";
    Types["SPELL"] = "Spell";
    Types["BUILDING"] = "Building";
})(Types || (exports.Types = Types = {}));
var TargetType;
(function (TargetType) {
    TargetType["GROUND"] = "Ground";
    TargetType["AIR"] = "Air";
    TargetType["BUILDING"] = "Buildings";
})(TargetType || (exports.TargetType = TargetType = {}));
