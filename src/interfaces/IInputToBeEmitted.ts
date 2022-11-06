export default interface IInputToBeEmitted {
  [key: string]: string | number | Date | boolean;
  name: string;
  value: string | number | Date | boolean;
}
