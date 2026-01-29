import { twMerge } from 'tailwind-merge'

import { clsx } from 'clsx'
import type { ClassValue } from 'clsx'

export function cn(...inputs: Array<ClassValue>) {
  return twMerge(clsx(inputs))
}

export function getRandomDelay(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function wait() {
  // const delay = getRandomDelay(3000, 10000);
  const delay = 0
  return new Promise((resolve) => setTimeout(resolve, delay))
}
