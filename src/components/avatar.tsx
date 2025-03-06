interface AvatarProps {
  imageURL: string;
  size?: number;
  heading?: React.ReactNode;
  children?: React.ReactNode;
}

export function Avatar({
  imageURL,
  size = 500,
  heading,
  children,
}: AvatarProps) {
  // const imageURL = props.imageURL;
  // const size = props.size;
  // destructring
  // const { imageURL, size } = props;

  const handleClickImage = () => {
    console.log("click me!");
    console.log("click me twice!");
  };

  return (
    <div>
      {heading}
      <img
        src={imageURL}
        style={{
          width: size,
          height: size,
          borderRadius: "1000px",
          objectFit: "cover",
        }}
        onClick={handleClickImage}
      />
      {children}
    </div>
  );
}
