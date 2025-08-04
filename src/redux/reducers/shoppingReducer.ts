import { ShoppingState } from '../models';
import { ShoppingAction } from '../actions/shoppingAction';

const initialState: ShoppingState = {
  availability: { categories: [], restaurants: [], foods: [] },
  availableFoods: [],
};

export const ShoppingReducer = (state: ShoppingState = initialState, action: ShoppingAction): ShoppingState => {
  switch (action.type) {
    case 'ON_AVAILABILITY':
      return { ...state, availability: action.payload };
    case 'ON_FOODS_SEARCH':
      return { ...state, availableFoods: action.payload };
    case 'ON_SHOPPING_ERROR':
      return state;
    default:
      return state;
  }
};
