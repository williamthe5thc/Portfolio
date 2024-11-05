// src/types/animations.d.ts
import { Variants } from 'framer-motion';

export interface AnimationVariants {
  initial: Variants['initial'];
  animate: Variants['animate'];
  exit: Variants['exit'];
  transition?: Variants['transition'];
}