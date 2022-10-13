import { OrderDto } from "./order.dto";
import debug from "debug";
import { DbManager } from "../common/common.db.config";
import { Collection } from "mongodb";

const log: debug.IDebugger = debug("app:in-memory-dao");

class OrdersDao extends DbManager {
  // orders: Array<OrderDto> = [];
  orders: Collection | undefined;

  constructor() {
    super();
    log("Created new instance of OrdersDao");
  }

  collection() {
    this.orders = this.db?.collection("orders");
    return this.orders;
  }
  async getOrders() {
    // return this.orders
    const orders = await this.orders
      ?.find({}, {})
      .limit(10)
      .toArray()
      .then((results: any) => {
        return results;
      })
      .catch((error: any) => log(error));

    return orders;
  }

  async addOrder(order: OrderDto) {
    return [];
  }

  async getOrderById(orderId: string) {
    return this.orders
      ?.findOne({ order_id: orderId })
      .then((result) => {})
      .catch((error) => log(error));
  }

  async updateOrderById(order: OrderDto) {
    return this.orders
      ?.findOneAndUpdate(
        { order_id: order.order_id },
        {
          $set: {
            price: order.price,
            freight_value: order.freight_value,
          },
        }
      )
      .then((result) => {})
      .catch((error) => log(error));
  }

  async deleteOrderById(orderId: string) {
    return this.orders
      ?.deleteOne({ order_id: orderId })
      .then((result) => {})
      .catch((error) => log(error));
  }
}

export default new OrdersDao();
