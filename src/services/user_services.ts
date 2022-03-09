import { User, UserModel } from "../schemas/user";

interface IUser {
  name: string;
  email: string;
}

abstract class UserServices {
  abstract createUser({ name, email }: IUser): Promise<User>;
  abstract getUsers(): Promise<User[]>;
}

class UserServicesImp implements UserServices {
  createUser = async ({ name, email }: IUser): Promise<User> => {
    const user = new UserModel({ name, email });
    const res = await user.save();
    return res;
  };

  getUsers = async (): Promise<User[]> => await UserModel.find();
}

export { UserServices, UserServicesImp };
