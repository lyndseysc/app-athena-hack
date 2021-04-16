/// <reference types="next" />
/// <reference types="next/types/global" />

import { FC } from 'react';

declare module '*.svg' {
  const content: FC;
  export default content;
}
