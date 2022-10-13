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
const orders_service_1 = __importDefault(require("./orders.service"));
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)("app:orders-controller");
class OrdersMiddleware {
    validateRequiredOrderBodyFields(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.body && req.body.email && req.body.password) {
                next();
            }
            else {
                res
                    .status(400)
                    .send({ error: `Missing required fields email and password` });
            }
        });
    }
    validateOrderExists(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const order = yield orders_service_1.default.readById(req.params.id);
            if (order) {
                next();
            }
            else {
                res.status(404).send({ error: `Order ID ${req.params.id} not found` });
            }
        });
    }
    extractOrderId(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            req.body.id = req.params.orderId;
            next();
        });
    }
}
exports.default = new OrdersMiddleware();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJzLm1pZGRsZXdhcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvb3JkZXJzL29yZGVycy5taWRkbGV3YXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esc0VBQTRDO0FBQzVDLGtEQUEwQjtBQUUxQixNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUM1RCxNQUFNLGdCQUFnQjtJQUNkLCtCQUErQixDQUNuQyxHQUFvQixFQUNwQixHQUFxQixFQUNyQixJQUEwQjs7WUFFMUIsSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNuRCxJQUFJLEVBQUUsQ0FBQzthQUNSO2lCQUFNO2dCQUNMLEdBQUc7cUJBQ0EsTUFBTSxDQUFDLEdBQUcsQ0FBQztxQkFDWCxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsNENBQTRDLEVBQUUsQ0FBQyxDQUFDO2FBQ2xFO1FBQ0gsQ0FBQztLQUFBO0lBRUssbUJBQW1CLENBQ3ZCLEdBQW9CLEVBQ3BCLEdBQXFCLEVBQ3JCLElBQTBCOztZQUUxQixNQUFNLEtBQUssR0FBRyxNQUFNLHdCQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDekQsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsSUFBSSxFQUFFLENBQUM7YUFDUjtpQkFBTTtnQkFDTCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxZQUFZLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDO2FBQ3hFO1FBQ0gsQ0FBQztLQUFBO0lBRUssY0FBYyxDQUNsQixHQUFvQixFQUNwQixHQUFxQixFQUNyQixJQUEwQjs7WUFFMUIsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFDakMsSUFBSSxFQUFFLENBQUM7UUFDVCxDQUFDO0tBQUE7Q0FDRjtBQUVELGtCQUFlLElBQUksZ0JBQWdCLEVBQUUsQ0FBQyJ9