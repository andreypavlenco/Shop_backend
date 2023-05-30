import { User } from './user.models';
import { userDto } from './user.models.dto';
export declare class UserService {
    private usersRepository;
    constructor(usersRepository: typeof User);
    createUser(user: userDto): Promise<User>;
    findUser(dto: userDto): Promise<User[]>;
}
