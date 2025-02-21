import './App.css';
import { Banner, Contact } from './components';
import { Button, Profile, Text as TextField } from './profile';

const App = () => {
  const Text = 'hello world';
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <Profile></Profile>
      <TextField />
      <Button></Button>
      <Banner />
      <Contact />
    </div>
  );
};

export default App;
