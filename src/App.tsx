import { Avatar } from './components/avatar';

const App = () => {
  const myName = 'evondev';
  const handleGetFullYear = () => {
    return new Date().getFullYear();
  };
  const age = 30;
  return (
    <>
      <Avatar />
      <p>My name is {myName}</p>
      <p>This year is: {handleGetFullYear()} </p>
      <p>I am still {age > 30 ? 'old' : 'young'}</p>
    </>
  );
};

export default App;
