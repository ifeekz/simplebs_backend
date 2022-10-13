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
const auth_service_1 = __importDefault(require("./auth.service"));
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)("app:orders-controller");
class AuthController {
    authenticate(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const seller = yield auth_service_1.default.login(req.body.username, req.body.password);
                if (seller === null) {
                    return res
                        .status(403)
                        .json({ status: false, message: "Invalid username or password." });
                }
                return res.status(200).json(seller);
            }
            catch (error) {
                return res
                    .status(403)
                    .json({ status: false, message: "Something went wrong: " + error });
            }
        });
    }
    updateAccount(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield auth_service_1.default.updateAccount(Object.assign({ seller_id: req.user.seller_id }, req.body));
                return res.status(200).send(response);
            }
            catch (error) {
                return res
                    .status(400)
                    .json({ status: false, message: "Something went wrong: " + error });
            }
        });
    }
}
exports.default = new AuthController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2F1dGgvYXV0aC5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esa0VBQXlDO0FBQ3pDLGtEQUEwQjtBQUUxQixNQUFNLEdBQUcsR0FBb0IsSUFBQSxlQUFLLEVBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUM1RCxNQUFNLGNBQWM7SUFDWixZQUFZLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDNUQsSUFBSTtnQkFDRixNQUFNLE1BQU0sR0FBRyxNQUFNLHNCQUFXLENBQUMsS0FBSyxDQUNwQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFDakIsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQ2xCLENBQUM7Z0JBRUYsSUFBSSxNQUFNLEtBQUssSUFBSSxFQUFFO29CQUNuQixPQUFPLEdBQUc7eUJBQ1AsTUFBTSxDQUFDLEdBQUcsQ0FBQzt5QkFDWCxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxDQUFDLENBQUM7aUJBQ3RFO2dCQUVELE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDckM7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDZCxPQUFPLEdBQUc7cUJBQ1AsTUFBTSxDQUFDLEdBQUcsQ0FBQztxQkFDWCxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSx3QkFBd0IsR0FBRyxLQUFLLEVBQUUsQ0FBQyxDQUFDO2FBQ3ZFO1FBQ0gsQ0FBQztLQUFBO0lBRUssYUFBYSxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQzdELElBQUk7Z0JBQ0YsTUFBTSxRQUFRLEdBQUcsTUFBTSxzQkFBVyxDQUFDLGFBQWEsaUJBQzlDLFNBQVMsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFDMUIsR0FBRyxDQUFDLElBQUksRUFDWCxDQUFDO2dCQUNILE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDdkM7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDZCxPQUFPLEdBQUc7cUJBQ1AsTUFBTSxDQUFDLEdBQUcsQ0FBQztxQkFDWCxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSx3QkFBd0IsR0FBRyxLQUFLLEVBQUUsQ0FBQyxDQUFDO2FBQ3ZFO1FBQ0gsQ0FBQztLQUFBO0NBQ0Y7QUFFRCxrQkFBZSxJQUFJLGNBQWMsRUFBRSxDQUFDIn0=