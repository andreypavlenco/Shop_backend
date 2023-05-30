"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const food_model_1 = require("./shop/models/food_model");
const storie_model_1 = require("./shop/models/storie_model");
const delivery_model_1 = require("./shop/models/delivery_model");
const shop_module_1 = require("./shop/shop.module");
const user_models_1 = require("./user/user.models");
const config_1 = require("@nestjs/config");
const order_module_1 = require("./order/order.module");
const user_module_1 = require("./user/user.module");
const order_models_1 = require("./order/order.models");
const user_oder_models_1 = require("./order/user_oder.models");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [],
        imports: [
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'postgres',
                host: process.env.POSTGRES_HOST,
                username: process.env.POSTGRES_USER,
                password: process.env.POSTGRES_PASSWORD,
                database: process.env.POSTGRES_DATABASE,
                models: [food_model_1.Food, storie_model_1.Store, delivery_model_1.Deliveries, user_models_1.User, user_oder_models_1.usersOrder, order_models_1.Order],
            }),
            shop_module_1.ShopModule,
            order_module_1.OrderModule,
            user_module_1.UserModule,
            config_1.ConfigModule.forRoot()
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map