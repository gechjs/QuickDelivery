import { UserAction } from "../actions";
import { UserModel, UserState, FoodModel, Address } from "../models";

const initialState: UserState = {
  user: {} as UserModel,
  location: {} as Address,
  error: undefined,
  Cart: [] as unknown as [FoodModel],
  orders: [],
};

const UserReducer = (state: UserState = initialState, action: UserAction) => {
  const { type, payload } = action;

  switch (type) {
    case "ON_UPDATE_LOCATION":
      return {
        ...state,
        location: payload,
      };
    case "ON_UPDATE_CART":
      const updateProduct = action.payload;
      const existingIndex = state.Cart.findIndex((item) => item._id === updateProduct._id);

      if (existingIndex >= 0) {
        const updatedCart = state.Cart.map((item, idx) =>
          idx === existingIndex ? { ...item, unit: updateProduct.unit } : item
        );

        return {
          ...state,
          Cart: updatedCart.filter((item) => item.unit > 0),
        };
      }

      return {
        ...state,
        Cart: [...state.Cart, updateProduct],
      }
    case "ON_USER_LOGIN":
      return {
        ...state,
        user: action.payload,
      };
    case "ON_PLACE_ORDER":
      return {
        ...state,
        orders: [...state.orders, action.payload],
        Cart: [] as unknown as [FoodModel],
      };
    default:
      return state;
  }
};

export { UserReducer };
