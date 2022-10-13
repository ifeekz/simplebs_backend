import express from "express";
import { CommonRoutesConfig } from "../common/common.routes.config";
import AuthController from "./auth.controller";
import { loginValidation } from "./auth.validator";
import AuthMiddleware from "./auth.middleware";

export class AuthRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "AuthRoutes");
  }

  configureRoutes() {
    // route to /login
    this.app.route(`/login`).post(AuthController.authenticate, loginValidation);

    // route to /account
    this.app.patch(`/account`, [
      AuthMiddleware.validateUser,
      AuthMiddleware.validateRequiredAccountBodyFields, 
      AuthController.updateAccount,
    ]);

    return this.app;
  }
}
