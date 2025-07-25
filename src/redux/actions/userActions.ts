import { Address, UserModel } from '../models';

export interface UpdateLocationAction {
  readonly type: 'ON_UPDATE_LOCATION';
  payload: Address;
}

export interface UpdateCartAction {
  readonly type: 'ON_UPDATE_CART';
  payload: any;
}

export interface UserLoginAction {
  readonly type: 'ON_USER_LOGIN';
  payload: UserModel;
}

export type UserAction = UpdateLocationAction | UpdateCartAction | UserLoginAction;

export const onUpdateLocation = (address: Address): UpdateLocationAction => ({
  type: 'ON_UPDATE_LOCATION',
  payload: address,
});

export const onUpdateCart = (food: any): UpdateCartAction => ({
  type: 'ON_UPDATE_CART',
  payload: food,
});

export const onUserLogin = (user: UserModel): UserLoginAction => ({
  type: 'ON_USER_LOGIN',
  payload: user,
});

// async login simulation
export const loginUser = (email: string, password: string) => {
  return async (dispatch: any) => {
    try {
      const user = { firstName: 'John', lastName: 'Doe', contactNumber: '9999999999', token: 'fake-jwt-token', varified: true } as UserModel;
      dispatch({ type: 'ON_USER_LOGIN', payload: user });
      return user;
    } catch (error) {
      console.error('Login error', error);
      throw error;
    }
  };
};

