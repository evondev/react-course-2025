import { Avatar } from "./components/avatar";
import Typography from "./components/typography";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        alignItems: "center",
      }}
    >
      <Avatar imageURL="/public/image1.jpg" heading={<Typography />}>
        <div>
          <img src="/public/image3.jpg" alt="" />
        </div>
      </Avatar>
      <Avatar imageURL="/public/image2.jpg" size={200} />
    </div>
  );
};

export default App;
