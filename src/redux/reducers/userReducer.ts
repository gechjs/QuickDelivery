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
      if (!Array.isArray(state.Cart)) {
        return {
          ...state,
          Cart: [action.payload],
        };
      }

      const existingFoods = state.Cart.filter(
        (item) => item._id == action.payload._id
      );

      //Check for Existing Product to update unit
      if (existingFoods.length > 0) {
        let updatedCart = state.Cart.map((food) => {
          if (food._id == action.payload._id) {
            food.unit = action.payload.unit;
          }
          return food;
        });

        return {
          ...state,
          Cart: updatedCart.filter((item) => item.unit > 0),
        };
      } else {
        // Add to cart if not added
        return {
          ...state,
          Cart: [...state.Cart, action.payload],
        };
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
