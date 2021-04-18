import { fire } from './firebase-config';
export const getProducts = async (searchText: string) => {
  const firebaseGetProducts = fire.functions().httpsCallable('getProducts');
  const products = await firebaseGetProducts({ searchText });
  return products;
};
