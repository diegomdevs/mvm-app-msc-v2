const useToUpperLowerCase = (word: string | undefined) => {
  return word ? word?.replace(word[0], word[0].toUpperCase()) : undefined;
};
export default useToUpperLowerCase;
