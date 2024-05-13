export const pureSort = <T>(array: readonly T[]): T[] => {
  //매개변수 아무도 못 건드리게 하려고 readonly
  const deepCopied = [...array];
  return deepCopied.sort();
};
