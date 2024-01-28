"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSettingsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const UserSetting_1 = require("../models/UserSetting");
const createUserSettingsInput_1 = require("../utils/createUserSettingsInput");
const mockUserSettings_1 = require("../../__mocks__/mockUserSettings");
let UserSettingsResolver = class UserSettingsResolver {
    createUserSettings(createUserSettingsData) {
        console.log(createUserSettingsData);
        mockUserSettings_1.mockUserSettings.push(createUserSettingsData);
        return createUserSettingsData;
    }
};
exports.UserSettingsResolver = UserSettingsResolver;
__decorate([
    (0, graphql_1.Mutation)(returns => UserSetting_1.UserSetting),
    __param(0, (0, graphql_1.Args)("createUserSettingsData")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createUserSettingsInput_1.CreateUserSettingsInput]),
    __metadata("design:returntype", void 0)
], UserSettingsResolver.prototype, "createUserSettings", null);
exports.UserSettingsResolver = UserSettingsResolver = __decorate([
    (0, graphql_1.Resolver)()
], UserSettingsResolver);
//# sourceMappingURL=UserSettingsResolver.js.map