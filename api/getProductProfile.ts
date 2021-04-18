import { fire } from './firebase-config';
export const getProductProfile = async (id: string) => {
  const firebaseGetProducts = fire
    .functions()
    .httpsCallable('getProductProfile');
  const products = await firebaseGetProducts({ id });
  return products;
};
