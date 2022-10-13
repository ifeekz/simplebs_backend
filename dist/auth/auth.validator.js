"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginValidation = void 0;
const express_validator_1 = require("express-validator");
exports.loginValidation = [
    (0, express_validator_1.body)("username").isEmpty(),
    (0, express_validator_1.body)("password").isEmpty(),
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (errors.isEmpty()) {
            return next();
        }
        return res.status(400).json({ errors: errors.array() });
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC52YWxpZGF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXV0aC9hdXRoLnZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSx5REFBMkQ7QUFFOUMsUUFBQSxlQUFlLEdBQUc7SUFDM0IsSUFBQSx3QkFBSSxFQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sRUFBRTtJQUMxQixJQUFBLHdCQUFJLEVBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxFQUFFO0lBQzFCLENBQ0ksR0FBb0IsRUFDcEIsR0FBcUIsRUFDckIsSUFBMEIsRUFDMUIsRUFBRTtRQUNGLE1BQU0sTUFBTSxHQUFHLElBQUEsb0NBQWdCLEVBQUMsR0FBRyxDQUFDLENBQUM7UUFDckMsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDcEIsT0FBTyxJQUFJLEVBQUUsQ0FBQztTQUNmO1FBQ0QsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUM7Q0FDTixDQUFDIn0=