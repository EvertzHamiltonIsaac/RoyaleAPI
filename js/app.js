"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importStar(require("express"));
const usersRoutes_1 = require("./routes/usersRoutes");
const arenasRoutes_1 = require("./routes/arenasRoutes");
const cardsRoutes_1 = require("./routes/cardsRoutes");
const profilesRoutes_1 = require("./routes/profilesRoutes");
const deckRoutes_1 = require("./routes/deckRoutes");
const deckcardsRoutes_1 = require("./routes/deckcardsRoutes");
const usercardsRoutes_1 = require("./routes/usercardsRoutes");
//* App declaration
exports.app = (0, express_1.default)();
//TODO: Necesita manejo de sesion y tambien metodos de autenticación
//TODO: Necesita Encriptación de contraseña, para guardar el Hash en users.
//TODO: Crear una carpeta de Middlewares para guardarlos todos ahi.
exports.app.set('query parser', 'extended'); //Hace que las URL con Query String puedan leer el lo que esta dentro de corchetes gte, gt, lt, lte
//Middlewares
const api_version = '/api/v1';
exports.app.use((0, express_1.json)());
exports.app.use(api_version, usersRoutes_1.userRouter);
exports.app.use(api_version, arenasRoutes_1.arenaRouter);
exports.app.use(api_version, cardsRoutes_1.cardsRouter);
exports.app.use(api_version, profilesRoutes_1.profilesRouter);
exports.app.use(api_version, deckRoutes_1.decksRouter);
exports.app.use(api_version, deckcardsRoutes_1.deckCardRouter);
exports.app.use(api_version, usercardsRoutes_1.userCardRouter);
