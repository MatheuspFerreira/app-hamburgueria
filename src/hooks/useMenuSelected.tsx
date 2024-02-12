import { useState } from 'react'
import { CATEGORIES } from '../utils/data/products';

export function useMenuSelected() {
  const [isSelected, setIsSelected] = useState(CATEGORIES[0]);
  return { isSelected, setIsSelected }
}
