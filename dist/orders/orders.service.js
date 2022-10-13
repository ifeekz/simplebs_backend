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
const mongodb_1 = require("mongodb");
const log = (0, debug_1.default)("app:in-memory-dao");
class OrdersService extends common_db_config_1.DbManager {
    constructor() {
        super();
        this.connect();
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            const client = new mongodb_1.MongoClient(this.uri);
            try {
                // Connect to the MongoDB cluster
                const connection = yield client.connect();
                this.db = connection.db(this.dbName);
                this.orders = this.db.collection("orders");
            }
            catch (e) {
                console.error(e);
            }
        });
    }
    list(seller_id, limit = 20, offset = 0, sort = "shipping_limit_date") {
        return __awaiter(this, void 0, void 0, function* () {
            sort = sort === "price" ? "price" : "shipping_limit_date";
            const orders = yield this.orders
                .aggregate([
                { $match: { seller_id: seller_id } },
                {
                    $lookup: {
                        from: "products",
                        localField: "product_id",
                        foreignField: "product_id",
                        as: "product",
                    },
                },
                { $unwind: "$product" },
                {
                    $facet: {
                        metadata: [
                            {
                                $group: {
                                    _id: null,
                                    total: { $sum: 1 },
                                },
                            },
                        ],
                        data: [
                            { $sort: { [sort]: 1 } },
                            { $skip: offset },
                            { $limit: limit },
                            {
                                $project: {
                                    _id: 0,
                                    id: "$order_id",
                                    product_id: "$product_id",
                                    product_category: "$product.product_category_name",
                                    price: "$price",
                                    date: "$shipping_limit_date",
                                },
                            },
                        ],
                    },
                },
                {
                    $project: {
                        data: 1,
                        total: { $arrayElemAt: ["$metadata.total", 0] },
                    },
                },
            ])
                .toArray();
            offset = offset + limit;
            let result = orders[0];
            result.limit = limit;
            result.offset = offset;
            return result;
        });
    }
    readById(order_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.orders
                .findOne({ order_id: order_id })
                .then((result) => {
                return result;
            })
                .catch((error) => {
                return error;
            });
        });
    }
    updateById(order) {
        return __awaiter(this, void 0, void 0, function* () {
            this.orders.updateOne({ order_id: order.order_id }, {
                $set: {
                    shipping_limit_date: order.shipping_limit_date,
                    price: order.price,
                    freight_value: order.freight_value,
                },
            });
        });
    }
    deleteById(resourceId) {
        return __awaiter(this, void 0, void 0, function* () {
            this.orders.deleteOne({ order_id: resourceId });
        });
    }
}
exports.default = new OrdersService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvb3JkZXJzL29yZGVycy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0RBQTBCO0FBSTFCLGlFQUF1RDtBQUN2RCxxQ0FBc0Q7QUFFdEQsTUFBTSxHQUFHLEdBQW9CLElBQUEsZUFBSyxFQUFDLG1CQUFtQixDQUFDLENBQUM7QUFFeEQsTUFBTSxhQUFjLFNBQVEsNEJBQVM7SUFJbkM7UUFDRSxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUssT0FBTzs7WUFDWCxNQUFNLE1BQU0sR0FBRyxJQUFJLHFCQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3pDLElBQUk7Z0JBQ0YsaUNBQWlDO2dCQUNqQyxNQUFNLFVBQVUsR0FBRyxNQUFNLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDMUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDckMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM1QztZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNWLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDbEI7UUFDSCxDQUFDO0tBQUE7SUFFSyxJQUFJLENBQ1IsU0FBaUIsRUFDakIsUUFBZ0IsRUFBRSxFQUNsQixTQUFpQixDQUFDLEVBQ2xCLE9BQWUscUJBQXFCOztZQUVwQyxJQUFJLEdBQUcsSUFBSSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQztZQUMxRCxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxNQUFNO2lCQUM3QixTQUFTLENBQUM7Z0JBQ1QsRUFBRSxNQUFNLEVBQUUsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEVBQUU7Z0JBQ3BDO29CQUNFLE9BQU8sRUFBRTt3QkFDUCxJQUFJLEVBQUUsVUFBVTt3QkFDaEIsVUFBVSxFQUFFLFlBQVk7d0JBQ3hCLFlBQVksRUFBRSxZQUFZO3dCQUMxQixFQUFFLEVBQUUsU0FBUztxQkFDZDtpQkFDRjtnQkFDRCxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUU7Z0JBQ3ZCO29CQUNFLE1BQU0sRUFBRTt3QkFDTixRQUFRLEVBQUU7NEJBQ1I7Z0NBQ0UsTUFBTSxFQUFFO29DQUNOLEdBQUcsRUFBRSxJQUFJO29DQUNULEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUU7aUNBQ25COzZCQUNGO3lCQUNGO3dCQUNELElBQUksRUFBRTs0QkFDSixFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7NEJBQ3hCLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTs0QkFDakIsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzRCQUNqQjtnQ0FDRSxRQUFRLEVBQUU7b0NBQ1IsR0FBRyxFQUFFLENBQUM7b0NBQ04sRUFBRSxFQUFFLFdBQVc7b0NBQ2YsVUFBVSxFQUFFLGFBQWE7b0NBQ3pCLGdCQUFnQixFQUFFLGdDQUFnQztvQ0FDbEQsS0FBSyxFQUFFLFFBQVE7b0NBQ2YsSUFBSSxFQUFFLHNCQUFzQjtpQ0FDN0I7NkJBQ0Y7eUJBQ0Y7cUJBQ0Y7aUJBQ0Y7Z0JBQ0Q7b0JBQ0UsUUFBUSxFQUFFO3dCQUNSLElBQUksRUFBRSxDQUFDO3dCQUNQLEtBQUssRUFBRSxFQUFFLFlBQVksRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxFQUFFO3FCQUNoRDtpQkFDRjthQUNGLENBQUM7aUJBQ0QsT0FBTyxFQUFFLENBQUM7WUFFYixNQUFNLEdBQUcsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUN4QixJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkIsTUFBTSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDckIsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFFdkIsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQztLQUFBO0lBRUssUUFBUSxDQUFDLFFBQWdCOztZQUM3QixPQUFPLElBQUksQ0FBQyxNQUFNO2lCQUNmLE9BQU8sQ0FBQyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQztpQkFDL0IsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7Z0JBQ2YsT0FBTyxNQUFNLENBQUM7WUFDaEIsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUNmLE9BQU8sS0FBSyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO0tBQUE7SUFFSyxVQUFVLENBQUMsS0FBZTs7WUFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQ25CLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFDNUI7Z0JBQ0UsSUFBSSxFQUFFO29CQUNKLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxtQkFBbUI7b0JBQzlDLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztvQkFDbEIsYUFBYSxFQUFFLEtBQUssQ0FBQyxhQUFhO2lCQUNuQzthQUNGLENBQ0YsQ0FBQztRQUNKLENBQUM7S0FBQTtJQUVLLFVBQVUsQ0FBQyxVQUFrQjs7WUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztRQUNsRCxDQUFDO0tBQUE7Q0FDRjtBQUVELGtCQUFlLElBQUksYUFBYSxFQUFFLENBQUMifQ==