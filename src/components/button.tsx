export interface ButtonProps {
  message: string;
  onClick: (message: string) => void;
}

export default function Button({ message, onClick }: ButtonProps) {
  // Interal function
  // Function expression
  // const handleButtonClick = () => {}
  // Function declaration
  function handleButtonClick() {
    onClick(message);
  }
  return <button onClick={handleButtonClick}>Button</button>;
}
