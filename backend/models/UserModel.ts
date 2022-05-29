import {DB} from "../core/DB";
import {User} from "../types/Uset";
import {CreateUserInput} from "../types/CreateUserInput";

export class UserModel {
    private conn;

    constructor() {
        this.conn = new DB().conn;
    }

    async getUser(username): Promise<User[]> {
        const [rows] = await this.conn.query("" +
            "SELECT * FROM `users` WHERE username = ?", [username]);
        return rows;
    }

    async createUser(createUserInput: CreateUserInput): Promise<boolean> {
        await this.conn.execute("INSERT INTO `users`(username, password, email)" +
            "VALUES (?, ?, ?)", [
            createUserInput.username,
            createUserInput.password,
            createUserInput.email
        ]);
        return true;
    }
}