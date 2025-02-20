import './App.css';

const App = () => {
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <Profile></Profile>
      <Profile />
    </div>
  );
};
function Profile() {
  return (
    // JSX
    <img
      src="https://images.unsplash.com/photo-1471899236350-e3016bf1e69e?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="profile"
    />
  );
}

export default App;
