import { Button } from "@material-tailwind/react";
 
export default function Example(props) {
  const { value } = props;
  return <Button>{value}</Button>;
}