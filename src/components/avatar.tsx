interface AvatarProps {
  imageURL: string;
  size: number;
}

export function Avatar(props: AvatarProps) {
  // const imageURL = props.imageURL;
  // const size = props.size;
  // destructring
  const { imageURL, size } = props;

  const handleClickImage = () => {
    console.log("click me!");
    console.log("click me twice!");
  };

  return (
    <img
      src={imageURL}
      style={{
        width: size,
        height: size,
        borderRadius: "100px",
        objectFit: "cover",
      }}
      onClick={handleClickImage}
    />
  );
}
