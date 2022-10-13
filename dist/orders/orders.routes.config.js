"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const auth_middleware_1 = __importDefault(require("../auth/auth.middleware"));
const orders_controller_1 = __importDefault(require("./orders.controller"));
const orders_middleware_1 = __importDefault(require("./orders.middleware"));
class OrdersRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, "OrdersRoutes");
    }
    configureRoutes() {
        // request to /order_items
        this.app
            .route(`/order_items`)
            .all(auth_middleware_1.default.validateUser)
            .get(orders_controller_1.default.listOrders);
        // requests to all http verb with this patters /order_items/:id
        this.app.param(`id`, orders_middleware_1.default.extractOrderId);
        this.app
            .route(`/order_items/:id`)
            .all([orders_middleware_1.default.validateOrderExists, auth_middleware_1.default.validateUser])
            .get(orders_controller_1.default.getOrderById)
            .delete(orders_controller_1.default.deleteOrder);
        this.app.put(`/order_items/:id`, [
            orders_middleware_1.default.validateRequiredOrderBodyFields,
            orders_controller_1.default.updateOrder,
        ]);
        return this.app;
    }
}
exports.OrdersRoutes = OrdersRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJzLnJvdXRlcy5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvb3JkZXJzL29yZGVycy5yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLHlFQUFvRTtBQUNwRSw4RUFBcUQ7QUFDckQsNEVBQW1EO0FBQ25ELDRFQUFtRDtBQUVuRCxNQUFhLFlBQWEsU0FBUSx5Q0FBa0I7SUFDbEQsWUFBWSxHQUF3QjtRQUNsQyxLQUFLLENBQUMsR0FBRyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxlQUFlO1FBQ2IsMEJBQTBCO1FBQzFCLElBQUksQ0FBQyxHQUFHO2FBQ0wsS0FBSyxDQUFDLGNBQWMsQ0FBQzthQUNyQixHQUFHLENBQUMseUJBQWMsQ0FBQyxZQUFZLENBQUM7YUFDaEMsR0FBRyxDQUFDLDJCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXBDLCtEQUErRDtRQUMvRCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsMkJBQWdCLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLEdBQUc7YUFDTCxLQUFLLENBQUMsa0JBQWtCLENBQUM7YUFDekIsR0FBRyxDQUFDLENBQUMsMkJBQWdCLENBQUMsbUJBQW1CLEVBQUUseUJBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUN4RSxHQUFHLENBQUMsMkJBQWdCLENBQUMsWUFBWSxDQUFDO2FBQ2xDLE1BQU0sQ0FBQywyQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUV4QyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRTtZQUMvQiwyQkFBZ0IsQ0FBQywrQkFBK0I7WUFDaEQsMkJBQWdCLENBQUMsV0FBVztTQUM3QixDQUFDLENBQUM7UUFFSCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQztDQUNGO0FBM0JELG9DQTJCQyJ9