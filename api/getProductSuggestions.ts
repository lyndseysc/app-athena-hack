import { fire } from './firebase-config';
export const getProductSuggestions = async (searchText: string) => {
  const firebaseGetProducts = fire
    .functions()
    .httpsCallable('getProductSuggestions');
  const products = await firebaseGetProducts({ searchText });
  return products;
};
