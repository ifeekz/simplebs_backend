"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const debug_1 = __importDefault(require("debug"));
const common_db_config_1 = require("../common/common.db.config");
const log = (0, debug_1.default)("app:in-memory-dao");
class OrdersDao extends common_db_config_1.DbManager {
    constructor() {
        super();
        log("Created new instance of OrdersDao");
    }
    collection() {
        var _a;
        this.orders = (_a = this.db) === null || _a === void 0 ? void 0 : _a.collection("orders");
        return this.orders;
    }
    getOrders() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            // return this.orders
            const orders = yield ((_a = this.orders) === null || _a === void 0 ? void 0 : _a.find({}, {}).limit(10).toArray().then((results) => {
                return results;
            }).catch((error) => log(error)));
            return orders;
        });
    }
    addOrder(order) {
        return __awaiter(this, void 0, void 0, function* () {
            return [];
        });
    }
    getOrderById(orderId) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            return (_a = this.orders) === null || _a === void 0 ? void 0 : _a.findOne({ order_id: orderId }).then((result) => { }).catch((error) => log(error));
        });
    }
    updateOrderById(order) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            return (_a = this.orders) === null || _a === void 0 ? void 0 : _a.findOneAndUpdate({ order_id: order.order_id }, {
                $set: {
                    price: order.price,
                    freight_value: order.freight_value,
                },
            }).then((result) => { }).catch((error) => log(error));
        });
    }
    deleteOrderById(orderId) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            return (_a = this.orders) === null || _a === void 0 ? void 0 : _a.deleteOne({ order_id: orderId }).then((result) => { }).catch((error) => log(error));
        });
    }
}
exports.default = new OrdersDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuZGFvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL29yZGVycy9vcmRlci5kYW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSxrREFBMEI7QUFDMUIsaUVBQXVEO0FBR3ZELE1BQU0sR0FBRyxHQUFvQixJQUFBLGVBQUssRUFBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBRXhELE1BQU0sU0FBVSxTQUFRLDRCQUFTO0lBSS9CO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUFDUixHQUFHLENBQUMsbUNBQW1DLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsVUFBVTs7UUFDUixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQUEsSUFBSSxDQUFDLEVBQUUsMENBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBQ0ssU0FBUzs7O1lBQ2IscUJBQXFCO1lBQ3JCLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQSxNQUFBLElBQUksQ0FBQyxNQUFNLDBDQUM1QixJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFDWixLQUFLLENBQUMsRUFBRSxFQUNSLE9BQU8sR0FDUCxJQUFJLENBQUMsQ0FBQyxPQUFZLEVBQUUsRUFBRTtnQkFDckIsT0FBTyxPQUFPLENBQUM7WUFDakIsQ0FBQyxFQUNBLEtBQUssQ0FBQyxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUVyQyxPQUFPLE1BQU0sQ0FBQzs7S0FDZjtJQUVLLFFBQVEsQ0FBQyxLQUFlOztZQUM1QixPQUFPLEVBQUUsQ0FBQztRQUNaLENBQUM7S0FBQTtJQUVLLFlBQVksQ0FBQyxPQUFlOzs7WUFDaEMsT0FBTyxNQUFBLElBQUksQ0FBQyxNQUFNLDBDQUNkLE9BQU8sQ0FBQyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsRUFDOUIsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsR0FBRSxDQUFDLEVBQ25CLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7O0tBQ2pDO0lBRUssZUFBZSxDQUFDLEtBQWU7OztZQUNuQyxPQUFPLE1BQUEsSUFBSSxDQUFDLE1BQU0sMENBQ2QsZ0JBQWdCLENBQ2hCLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFDNUI7Z0JBQ0UsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztvQkFDbEIsYUFBYSxFQUFFLEtBQUssQ0FBQyxhQUFhO2lCQUNuQzthQUNGLEVBRUYsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsR0FBRSxDQUFDLEVBQ25CLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7O0tBQ2pDO0lBRUssZUFBZSxDQUFDLE9BQWU7OztZQUNuQyxPQUFPLE1BQUEsSUFBSSxDQUFDLE1BQU0sMENBQ2QsU0FBUyxDQUFDLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxFQUNoQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxHQUFFLENBQUMsRUFDbkIsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs7S0FDakM7Q0FDRjtBQUVELGtCQUFlLElBQUksU0FBUyxFQUFFLENBQUMifQ==