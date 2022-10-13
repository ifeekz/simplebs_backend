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
class AuthService extends common_db_config_1.DbManager {
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
                this.sellers = this.db.collection("sellers");
            }
            catch (e) {
                console.error(e);
            }
        });
    }
    login(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const seller = yield this.sellers.findOne({ seller_id: username, seller_zip_code_prefix: password }, {});
                return seller;
            }
            catch (e) {
                return e;
            }
        });
    }
    updateAccount(data) {
        return __awaiter(this, void 0, void 0, function* () {
            this.sellers.updateOne({ seller_id: data.seller_id }, {
                $set: {
                    seller_city: data.seller_city,
                    seller_state: data.seller_state,
                },
            });
            return { seller_city: data.seller_city, seller_state: data.seller_state };
        });
    }
}
exports.default = new AuthService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2F1dGgvYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0RBQTBCO0FBRTFCLGlFQUF1RDtBQUN2RCxxQ0FBc0Q7QUFFdEQsTUFBTSxHQUFHLEdBQW9CLElBQUEsZUFBSyxFQUFDLG1CQUFtQixDQUFDLENBQUM7QUFFeEQsTUFBTSxXQUFZLFNBQVEsNEJBQVM7SUFJakM7UUFDRSxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUssT0FBTzs7WUFDWCxNQUFNLE1BQU0sR0FBRyxJQUFJLHFCQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3pDLElBQUk7Z0JBQ0YsaUNBQWlDO2dCQUNqQyxNQUFNLFVBQVUsR0FBRyxNQUFNLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDMUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDckMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUM5QztZQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNWLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDbEI7UUFDSCxDQUFDO0tBQUE7SUFFSyxLQUFLLENBQUMsUUFBZ0IsRUFBRSxRQUFnQjs7WUFDNUMsSUFBSTtnQkFDRixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUN2QyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsc0JBQXNCLEVBQUUsUUFBUSxFQUFFLEVBQ3pELEVBQUUsQ0FDSCxDQUFDO2dCQUVGLE9BQU8sTUFBTSxDQUFDO2FBQ2Y7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDVixPQUFPLENBQUMsQ0FBQzthQUNWO1FBQ0gsQ0FBQztLQUFBO0lBRUssYUFBYSxDQUFDLElBQVM7O1lBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUNwQixFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQzdCO2dCQUNFLElBQUksRUFBRTtvQkFDSixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7b0JBQzdCLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtpQkFDaEM7YUFDRixDQUNGLENBQUM7WUFFRixPQUFPLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM1RSxDQUFDO0tBQUE7Q0FDRjtBQUVELGtCQUFlLElBQUksV0FBVyxFQUFFLENBQUMifQ==