import AuthStore from "./authStore";
import UserStore from "./userStore";

export const stores = {
  authStore: new AuthStore(),
  userStore: new UserStore()
}

export interface IMobxStoreProps {
  authStore: AuthStore;
  userStore: UserStore;
}
