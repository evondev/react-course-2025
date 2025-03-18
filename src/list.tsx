export interface ListProps {}

export default function List(_props: ListProps) {
  const studentNames = [
    "Creola Katherine Johnson: mathematician",
    "Mario José Modivna-Pasquel Henríquez: chemist",
    "Mohammad Abdus Salam: physicist",
  ];
  return (
    <div>
      {studentNames.map((item, index) => {
        const activeClassName = index === 0 ? "red" : "";
        return (
          <div key={`${item}-${index}`} className={`item ${activeClassName}`}>
            {item}
          </div>
        );
      })}
    </div>
  );
}
