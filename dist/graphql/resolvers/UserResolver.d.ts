import { User } from "../models/User";
import { CreateUserInput } from "../utils/CreateUserInput";
export declare let incrementalId: number;
export declare class UserResolver {
    getUserById(id: number): {
        id: number;
        username: string;
        displayName: string;
    };
    getUsers(): {
        id: number;
        username: string;
        displayName: string;
    }[];
    getUserSettings(user: User): {
        userId: number;
        receiveNotifications: boolean;
        receiveEmails: boolean;
    };
    createUser(createUserData: CreateUserInput): {
        username: string;
        displayName: string;
        id: number;
    };
}
