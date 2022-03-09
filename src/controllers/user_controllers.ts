import { Response, Request } from "express";
import { UserServices, UserServicesImp } from "../services/user_services";

abstract class UserControllers {
  abstract createUser(req: Request, res: Response): void;
  abstract getUsers(req: Request, res: Response): void;
}

class UserControllersImp implements UserControllers {
  userServices: UserServices;

  constructor(userServices?: UserServices) {
    this.userServices = userServices ?? new UserServicesImp();
  }
  createUser = async (req: Request, res: Response): Promise<void> => {
    const { name, email } = req.body;
    const user = await this.userServices.createUser({ name, email });
    res.status(201).json(user);
    return;
  };

  getUsers = async (req: Request, res: Response): Promise<void> => {
    console.log("getUsers");
    const users = await this.userServices.getUsers();
    res.status(200).json(users);
    return;
  };
}

export { UserControllers, UserControllersImp };
