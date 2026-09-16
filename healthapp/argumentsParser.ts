export const parseArguments = (args: any) => {
  for (var n in args) {
    if (!isNaN(Number(n))) {
      return true;
    }
  }
  return false;
};
