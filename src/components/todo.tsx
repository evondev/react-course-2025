export interface TodoProps {
  title: React.ReactNode;
  isCompleted?: boolean;
  count?: number;
  time?: string;
}

export default function Todo({
  title,
  isCompleted = false,
  count = 0,
  time,
}: TodoProps) {
  let newTitle = title;
  if (isCompleted) {
    newTitle = <del>{newTitle + "✅"}</del>;
  }
  // if (isCompleted) {
  //   return (
  //     <div
  //       style={{
  //         display: "flex",
  //         alignItems: "center",
  //         gap: "10px",
  //       }}
  //     >
  //       {title} ✅
  //     </div>
  //   );
  // }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      {/* {isCompleted ? `${title} ⭐️` : title} */}
      {/* {title} {!isCompleted && "🤯"} */}
      {/* {newTitle}
      {count > 0 && <span>hello</span>} */}
      {/* {isCompleted ? <del>{title} ✅</del> : title} */}
      {/* {isCompleted && <del>{title}</del>} */}
      {newTitle}
      {time ?? new Date().getFullYear()}
    </div>
  );
}
