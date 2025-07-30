import { ShoppingState } from '../models';
import { ShoppingAction } from '../actions/shoppingAction';

const initialState: ShoppingState = {
  availability: {
    categories: [
      { id: '1', title: 'Pizza', icon: 'https://dummyimage.com/100x100/000/fff&text=Pizza' },
      { id: '2', title: 'Burgers', icon: 'https://dummyimage.com/100x100/000/fff&text=Burgers' },
    ],
    restaurants: [
      {
        _id: 'r1',
        name: 'Express Pizza',
        foodType: 'Italian',
        address: 'Central Street 12',
        phone: '9999999999',
        images: ['https://dummyimage.com/400x200/000/fff&text=Express+Pizza'],
        foods: [
          { _id: 'f1', name: 'Margherita', description: 'Classic cheese pizza', category: 'Pizza', price: 250, readyTime: 20, images: ['https://dummyimage.com/400x200/000/fff&text=Margherita'], unit: 0 },
        ],
      },
    ],
    foods: [{ _id: 'f1', name: 'Margherita', description: 'Classic cheese pizza', category: 'Pizza', price: 250, readyTime: 20, images: ['https://dummyimage.com/400x200/000/fff&text=Margherita'], unit: 0 }],
  },
  availableFoods: [{ _id: 'f1', name: 'Margherita', description: 'Classic cheese pizza', category: 'Pizza', price: 250, readyTime: 20, images: ['https://dummyimage.com/400x200/000/fff&text=Margherita'], unit: 0 }],
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
