import { orderDto } from './order.models.dto';
import { OrderService } from './order.service';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    createUser(dto: orderDto): Promise<import("./order.models").Order>;
    findOrder(user_id: number): Promise<{}>;
}
