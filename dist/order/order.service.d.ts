import { Order } from './order.models';
import { orderDto } from './order.models.dto';
export declare class OrderService {
    private orderRepository;
    constructor(orderRepository: typeof Order);
    createOrder(dto: orderDto): Promise<Order>;
    findOrder(user_id: number): Promise<{}>;
}
