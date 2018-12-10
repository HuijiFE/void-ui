/**
 * Revise the index that out of array bound.
 * e.g. For size `6`, the index `8` will be revise to `2`, the index `-2` will be revise to `4`
 * @param index the index need to be revised
 * @param size the length of the array
 */
export function mobius(index: number, size: number): number {
  if (index < 0) {
    return (size + (index % size)) % size;
  } else if (index > size - 1) {
    return index % size;
  }

  return index;
}
