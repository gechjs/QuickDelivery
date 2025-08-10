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

export interface PlaceOrderAction {
  readonly type: 'ON_PLACE_ORDER';
  payload: any;
}

export type UserAction = UpdateLocationAction | UpdateCartAction | UserLoginAction | PlaceOrderAction;

export const onUpdateLocation = (address: Address): UpdateLocationAction => ({
  type: 'ON_UPDATE_LOCATION',
  payload: address,
});

export const placeOrder = (order: any): PlaceOrderAction => ({
  type: 'ON_PLACE_ORDER',
  payload: order,
});

export const createOrder = (order: any) => {
  return async (dispatch: any) => {
    // In real app, call backend API here
    dispatch(placeOrder(order));
    return order;
  };
};

export const cancelOrder = (orderId: string) => {
  return async (dispatch: any) => {
    // placeholder cancellation flow
    const cancelled = { orderId, status: 'Cancelled' };
    return cancelled;
  };
};

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

