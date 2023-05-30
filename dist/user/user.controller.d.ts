import { userDto } from './user.models.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(dto: userDto): Promise<import("./user.models").User>;
    findUser(dto: userDto): Promise<import("./user.models").User[]>;
}
