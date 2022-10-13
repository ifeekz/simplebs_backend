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
class OrdersController {
    listOrders(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const limit = !req.query.limit ? 20 : Number(req.query.limit);
            const offet = !req.query.offset ? 0 : Number(req.query.offset);
            const sort = !req.query.sort ? "shipping_limit_date" : req.query.sort;
            const orders = yield orders_service_1.default.list(req.user.seller_id, limit, offet);
            return res.status(200).send(orders);
        });
    }
    getOrderById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const order = yield orders_service_1.default.readById(req.params.id);
                return res.status(200).send(order);
            }
            catch (error) {
                console.log(error);
                return res
                    .status(400)
                    .json({ status: false, message: "Something went wrong: " + error });
            }
        });
    }
    updateOrder(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield orders_service_1.default.updateById(Object.assign({ id: req.params.id }, req.body));
                return res
                    .status(200)
                    .json({ status: true, message: "Order updated successfullt" });
            }
            catch (error) {
                return res
                    .status(400)
                    .json({ status: false, message: "Something went wrong: " + error });
            }
        });
    }
    deleteOrder(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield orders_service_1.default.deleteById(req.params.id);
                return res
                    .status(200)
                    .json({ status: true, message: "Order deleted successfullt" });
            }
            catch (error) {
                return res
                    .status(400)
                    .json({ status: false, message: "Something went wrong: " + error });
            }
        });
    }
}
exports.default = new OrdersController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJzLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvb3JkZXJzL29yZGVycy5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esc0VBQTZDO0FBQzdDLGtEQUEwQjtBQUcxQixNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUM1RCxNQUFNLGdCQUFnQjtJQUNkLFVBQVUsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUMxRCxNQUFNLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzlELE1BQU0sS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDL0QsTUFBTSxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBRXRFLE1BQU0sTUFBTSxHQUFHLE1BQU0sd0JBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzFFLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEMsQ0FBQztLQUFBO0lBRUssWUFBWSxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQzVELElBQUk7Z0JBQ0YsTUFBTSxLQUFLLEdBQUcsTUFBTSx3QkFBYSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUMxRCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3BDO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDbkIsT0FBTyxHQUFHO3FCQUNQLE1BQU0sQ0FBQyxHQUFHLENBQUM7cUJBQ1gsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsd0JBQXdCLEdBQUcsS0FBSyxFQUFFLENBQUMsQ0FBQzthQUN2RTtRQUNILENBQUM7S0FBQTtJQUVLLFdBQVcsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUMzRCxJQUFJO2dCQUNGLE1BQU0sd0JBQWEsQ0FBQyxVQUFVLGlCQUFHLEVBQUUsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSyxHQUFHLENBQUMsSUFBSSxFQUFHLENBQUM7Z0JBQ25FLE9BQU8sR0FBRztxQkFDUCxNQUFNLENBQUMsR0FBRyxDQUFDO3FCQUNYLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLENBQUMsQ0FBQzthQUNsRTtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNkLE9BQU8sR0FBRztxQkFDUCxNQUFNLENBQUMsR0FBRyxDQUFDO3FCQUNYLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLHdCQUF3QixHQUFHLEtBQUssRUFBRSxDQUFDLENBQUM7YUFDdkU7UUFDSCxDQUFDO0tBQUE7SUFFSyxXQUFXLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDM0QsSUFBSTtnQkFDRixNQUFNLHdCQUFhLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQzlDLE9BQU8sR0FBRztxQkFDUCxNQUFNLENBQUMsR0FBRyxDQUFDO3FCQUNYLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLENBQUMsQ0FBQzthQUNsRTtZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNkLE9BQU8sR0FBRztxQkFDUCxNQUFNLENBQUMsR0FBRyxDQUFDO3FCQUNYLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLHdCQUF3QixHQUFHLEtBQUssRUFBRSxDQUFDLENBQUM7YUFDdkU7UUFDSCxDQUFDO0tBQUE7Q0FDRjtBQUVELGtCQUFlLElBQUksZ0JBQWdCLEVBQUUsQ0FBQyJ9