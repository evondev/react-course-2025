export function Avatar() {
  const imageURL =
    "https://images.unsplash.com/photo-1510519138101-570d1dca3d66?q=80&w=2894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const handleClickImage = () => {
    console.log("click me!");
    console.log("click me twice!");
  };

  return (
    <img
      src={imageURL}
      style={{
        width: "120px",
        height: "120px",
        borderRadius: "100px",
        objectFit: "cover",
      }}
      onClick={handleClickImage}
    />
  );
}
