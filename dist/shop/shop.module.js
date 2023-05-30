"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const food_model_1 = require("./models/food_model");
const storie_model_1 = require("./models/storie_model");
const delivery_model_1 = require("./models/delivery_model");
const shop_service_1 = require("./shop.service");
const shop_controller_1 = require("./shop.controller");
let ShopModule = class ShopModule {
};
ShopModule = __decorate([
    (0, common_1.Module)({
        controllers: [shop_controller_1.ShopController],
        providers: [shop_service_1.ShopService],
        imports: [
            sequelize_1.SequelizeModule.forFeature([food_model_1.Food, storie_model_1.Store, delivery_model_1.Deliveries])
        ],
    })
], ShopModule);
exports.ShopModule = ShopModule;
//# sourceMappingURL=shop.module.js.map