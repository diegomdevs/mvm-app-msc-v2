const useToUpperLowerCase = (word: string | undefined) => {
  let index = 0;
  if (word?.charAt(index) === "¿") index++;
  return word
    ? word?.replace(word.charAt(index), word.charAt(index).toUpperCase())
    : undefined;
};
export default useToUpperLowerCase;
