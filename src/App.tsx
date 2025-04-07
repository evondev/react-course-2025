import Button from "./components/button";

const App = () => {
  return (
    <div className="layout">
      <a href="https://evonhub.dev" onClick={(event) => event.preventDefault()}>
        Go to evonhub
      </a>
      <form action="" onSubmit={(event) => event.preventDefault()}>
        <input type="text" />
      </form>
      <Button
        message="Ordering Pizza"
        onClick={(message) => console.log(message)}
      />
      <Button
        message="Ordering Pepsi"
        onClick={(message) => console.log(message)}
      />
    </div>
  );
};

export default App;
