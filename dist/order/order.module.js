"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const order_controller_1 = require("./order.controller");
const order_service_1 = require("./order.service");
const order_models_1 = require("./order.models");
const user_models_1 = require("../user/user.models");
const user_oder_models_1 = require("./user_oder.models");
let OrderModule = class OrderModule {
};
OrderModule = __decorate([
    (0, common_1.Module)({
        controllers: [order_controller_1.OrderController],
        providers: [order_service_1.OrderService],
        imports: [
            sequelize_1.SequelizeModule.forFeature([order_models_1.Order, user_models_1.User, user_oder_models_1.usersOrder]),
        ],
    })
], OrderModule);
exports.OrderModule = OrderModule;
//# sourceMappingURL=order.module.js.map