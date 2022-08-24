import { AuthResponse, UserData } from '../types/loginTypes';
import { logUserIn, createUser } from './helpers/apiHelpers';

export class LoginModel {
  public async sendSignIn(email: string, password: string) {
    const res = await logUserIn({ email, password });
    return res;
  }

  public saveLoginData(data: AuthResponse, mail: string) {
    const loginTime = Date.now();
    const userData = { ...data, mail, loginTime, id: data.userId };
    delete userData.message;
    delete userData.userId;

    localStorage.setItem('user', JSON.stringify(userData));
  }

  public async sendCreateUser({ name, mail, pass }: UserData) {
    const res = await createUser({ email: mail, password: pass, name });
    return res;
  }
}
