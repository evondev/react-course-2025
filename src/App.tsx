import Button from "./components/button";

const App = () => {
  return (
    <div className="layout">
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
