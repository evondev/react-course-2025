import { Avatar } from "./components/avatar";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        alignItems: "center",
      }}
    >
      <Avatar
        imageURL="https://images.unsplash.com/photo-1727466928916-9789f30de10b?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        size={100}
      />
      <Avatar
        imageURL="https://images.unsplash.com/photo-1740672426138-6646e5bf9e0b?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        size={200}
      />
    </div>
  );
};

export default App;
