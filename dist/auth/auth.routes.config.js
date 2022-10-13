"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const auth_controller_1 = __importDefault(require("./auth.controller"));
const auth_validator_1 = require("./auth.validator");
const auth_middleware_1 = __importDefault(require("./auth.middleware"));
class AuthRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, "AuthRoutes");
    }
    configureRoutes() {
        // route to /login
        this.app.route(`/login`).post(auth_controller_1.default.authenticate, auth_validator_1.loginValidation);
        // route to /account
        this.app.patch(`/account`, [
            auth_middleware_1.default.validateUser,
            auth_middleware_1.default.validateRequiredAccountBodyFields,
            auth_controller_1.default.updateAccount,
        ]);
        return this.app;
    }
}
exports.AuthRoutes = AuthRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5yb3V0ZXMuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2F1dGgvYXV0aC5yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLHlFQUFvRTtBQUNwRSx3RUFBK0M7QUFDL0MscURBQW1EO0FBQ25ELHdFQUErQztBQUUvQyxNQUFhLFVBQVcsU0FBUSx5Q0FBa0I7SUFDaEQsWUFBWSxHQUF3QjtRQUNsQyxLQUFLLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxlQUFlO1FBQ2Isa0JBQWtCO1FBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyx5QkFBYyxDQUFDLFlBQVksRUFBRSxnQ0FBZSxDQUFDLENBQUM7UUFFNUUsb0JBQW9CO1FBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRTtZQUN6Qix5QkFBYyxDQUFDLFlBQVk7WUFDM0IseUJBQWMsQ0FBQyxpQ0FBaUM7WUFDaEQseUJBQWMsQ0FBQyxhQUFhO1NBQzdCLENBQUMsQ0FBQztRQUVILE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNsQixDQUFDO0NBQ0Y7QUFsQkQsZ0NBa0JDIn0=