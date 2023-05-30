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
exports.ShopService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const food_model_1 = require("./models/food_model");
const delivery_model_1 = require("./models/delivery_model");
let ShopService = class ShopService {
    constructor(deliveryRepository, foodRepository) {
        this.deliveryRepository = deliveryRepository;
        this.foodRepository = foodRepository;
    }
    async getPizzaDay() {
        return await this.valueStores('1');
    }
    ;
    async getIQPizza() {
        return await this.valueStores('2');
    }
    ;
    async getKFC() {
        return await this.valueStores('3');
    }
    ;
    async valueStores(store_value) {
        const deliveries = await this.deliveryRepository.findAll({ where: { store_id: store_value } });
        const foodIds = deliveries.map((delivery) => delivery.food_id);
        const foods = await this.foodRepository.findAll({ where: { food_id: foodIds } });
        return foods;
    }
    ;
};
ShopService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(delivery_model_1.Deliveries)),
    __param(1, (0, sequelize_1.InjectModel)(food_model_1.Food)),
    __metadata("design:paramtypes", [Object, Object])
], ShopService);
exports.ShopService = ShopService;
//# sourceMappingURL=shop.service.js.map