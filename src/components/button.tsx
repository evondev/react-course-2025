export interface ButtonProps {
  message: string;
  onClick: (message: string) => void;
}

export default function Button({ message, onClick }: ButtonProps) {
  // Interal function
  // Function expression
  // const handleButtonClick = () => {}
  // Function declaration
  function handleButtonClick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.stopPropagation();
    onClick(message);
  }
  return <button onClick={(event) => handleButtonClick(event)}>Button</button>;
}
