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
exports.UserResolver = exports.incrementalId = void 0;
const graphql_1 = require("@nestjs/graphql");
const User_1 = require("../models/User");
const UserSetting_1 = require("../models/UserSetting");
const mockUsers_1 = require("../../__mocks__/mockUsers");
const mockUserSettings_1 = require("../../__mocks__/mockUserSettings");
const CreateUserInput_1 = require("../utils/CreateUserInput");
exports.incrementalId = 3;
let UserResolver = class UserResolver {
    getUserById(id) {
        return mockUsers_1.mockUsers.find(user => user.id === id);
    }
    getUsers() {
        return mockUsers_1.mockUsers;
    }
    getUserSettings(user) {
        console.log({ user });
        return mockUserSettings_1.mockUserSettings.find(setting => setting.userId === user.id);
    }
    createUser(createUserData) {
        const { username, displayName } = createUserData;
        const newUser = { username, displayName, id: ++exports.incrementalId };
        mockUsers_1.mockUsers.push(newUser);
        return newUser;
    }
};
exports.UserResolver = UserResolver;
__decorate([
    (0, graphql_1.Query)(returns => User_1.User, { nullable: true }),
    __param(0, (0, graphql_1.Args)("id", { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "getUserById", null);
__decorate([
    (0, graphql_1.Query)(returns => [User_1.User]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "getUsers", null);
__decorate([
    (0, graphql_1.ResolveField)(returns => UserSetting_1.UserSetting, { name: "settings", nullable: true }),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [User_1.User]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "getUserSettings", null);
__decorate([
    (0, graphql_1.Mutation)(returns => User_1.User),
    __param(0, (0, graphql_1.Args)("createUserData")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateUserInput_1.CreateUserInput]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "createUser", null);
exports.UserResolver = UserResolver = __decorate([
    (0, graphql_1.Resolver)(of => User_1.User)
], UserResolver);
//# sourceMappingURL=UserResolver.js.map