import { FoodModel } from '../redux';

export const getCartTotal = (items: FoodModel[]) => {
  return items.reduce((sum, item) => sum + item.price * (item.unit || 0), 0);
};

export const getCartCount = (items: FoodModel[]) => {
  return items.reduce((sum, item) => sum + (item.unit || 0), 0);
};
