import { useContext } from 'react';
import { FirebaseContext } from './firebase-config';

export const useFirebaseApp = () => {
  const app = useContext(FirebaseContext);
  
  return app;
};