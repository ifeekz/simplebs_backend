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
const buffer_1 = require("buffer");
const log = (0, debug_1.default)("app:auth-middleware");
class AuthMiddleware {
    validateUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            // check for basic auth header
            if (!req.headers.authorization ||
                req.headers.authorization.indexOf("Basic ") === -1) {
                return res.status(401).json({ message: "Unauthorized access" });
            }
            // verify auth credentials
            const base64Credentials = req.headers.authorization.split(" ")[1];
            const credentials = buffer_1.Buffer.from(base64Credentials, "base64").toString("ascii");
            const [username, password] = credentials.split(":");
            const seller = yield auth_service_1.default.login(username, password);
            if (!seller) {
                return res
                    .status(401)
                    .json({ message: "Invalid Authentication Credentials" });
            }
            req.user = seller;
            next();
        });
    }
    validateRequiredAccountBodyFields(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.body && req.body.seller_city && req.body.seller_state) {
                next();
            }
            else {
                res
                    .status(400)
                    .send({ error: `Missing required fields seller_city and seller_state` });
            }
        });
    }
}
exports.default = new AuthMiddleware();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5taWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2F1dGgvYXV0aC5taWRkbGV3YXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esa0VBQXlDO0FBQ3pDLGtEQUEwQjtBQUMxQixtQ0FBK0I7QUFFL0IsTUFBTSxHQUFHLEdBQW9CLElBQUEsZUFBSyxFQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDMUQsTUFBTSxjQUFjO0lBQ1osWUFBWSxDQUNoQixHQUFvQixFQUNwQixHQUFxQixFQUNyQixJQUEwQjs7WUFFMUIsOEJBQThCO1lBQzlCLElBQ0UsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGFBQWE7Z0JBQzFCLEdBQUcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsRUFDbEQ7Z0JBQ0EsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxDQUFDLENBQUM7YUFDakU7WUFFRCwwQkFBMEI7WUFDMUIsTUFBTSxpQkFBaUIsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEUsTUFBTSxXQUFXLEdBQUcsZUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQ25FLE9BQU8sQ0FDUixDQUFDO1lBQ0YsTUFBTSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3BELE1BQU0sTUFBTSxHQUFHLE1BQU0sc0JBQVcsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQzNELElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ1gsT0FBTyxHQUFHO3FCQUNQLE1BQU0sQ0FBQyxHQUFHLENBQUM7cUJBQ1gsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLENBQUMsQ0FBQzthQUM1RDtZQUVELEdBQUcsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO1lBRWxCLElBQUksRUFBRSxDQUFDO1FBQ1QsQ0FBQztLQUFBO0lBRUssaUNBQWlDLENBQ3JDLEdBQW9CLEVBQ3BCLEdBQXFCLEVBQ3JCLElBQTBCOztZQUUxQixJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQzdELElBQUksRUFBRSxDQUFDO2FBQ1I7aUJBQU07Z0JBQ0wsR0FBRztxQkFDQSxNQUFNLENBQUMsR0FBRyxDQUFDO3FCQUNYLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxzREFBc0QsRUFBRSxDQUFDLENBQUM7YUFDNUU7UUFDSCxDQUFDO0tBQUE7Q0FDRjtBQUVELGtCQUFlLElBQUksY0FBYyxFQUFFLENBQUMifQ==