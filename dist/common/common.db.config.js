"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbManager = void 0;
require("dotenv/config");
class DbManager {
    constructor() {
        this.uri = process.env.DATABASE_URL || '';
        this.dbName = process.env.DATABASE_NAME || '';
    }
}
exports.DbManager = DbManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLmRiLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vY29tbW9uLmRiLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5QkFBc0I7QUFHdEIsTUFBc0IsU0FBUztJQU03QjtRQUNFLElBQUksQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLElBQUksRUFBRSxDQUFDO1FBQzFDLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLElBQUksRUFBRSxDQUFDO0lBQ2hELENBQUM7Q0FFRjtBQVhELDhCQVdDIn0=