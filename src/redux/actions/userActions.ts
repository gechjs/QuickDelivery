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
