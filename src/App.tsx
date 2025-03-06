import Todo from "./components/todo";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        flexDirection: "column",
      }}
    >
      {/* <Avatar imageURL="/public/image1.jpg" heading={<Typography />}>
        <div>
          <img src="/public/image3.jpg" alt="" />
        </div>
      </Avatar>
      <Avatar imageURL="/public/image2.jpg" size={200} /> */}
      <Todo title="Complete homework" isCompleted count={0} />
      <Todo title="Playing badminton" count={2} />
      <Todo title="Resolve leetcode" count={3} time="2024" />
    </div>
  );
};

export default App;
