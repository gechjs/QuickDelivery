import { FoodModel } from '../redux';

export const getCartTotal = (items: FoodModel[]) => {
  return items.reduce((sum, item) => sum + item.price * (item.unit || 0), 0);
};

export const getCartCount = (items: FoodModel[]) => {
  return items.reduce((sum, item) => sum + (item.unit || 0), 0);
};

export const checkExistence = (food: FoodModel, cart: FoodModel[] = []) => {
  if (!Array.isArray(cart) || cart.length === 0) {
    return { ...food, unit: 0 };
  }

  const existing = cart.find((item) => item._id === food._id);
  return existing ? { ...food, unit: existing.unit } : { ...food, unit: 0 };
};

