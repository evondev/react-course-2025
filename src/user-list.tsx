export interface UserListProps {}

export default function UserList(_props: UserListProps) {
  const users = [
    {
      id: 1,
      name: "Johnson",
      age: 20,
      level: "university",
    },
    {
      id: 2,
      name: "Clever",
      age: 30,
      level: "highschool",
    },
  ];
  const usersUnivercity = users.filter((user) => user.level === "university");
  const usersHighschool = users.filter((user) => user.level === "highschool");
  return (
    <div>
      <h2>University</h2>
      {usersUnivercity.map((user) => (
        <div key={user.id}>
          {user.name} - {user.level}
        </div>
      ))}
      <h2>Highschool</h2>
      {usersHighschool.map((user) => (
        <div key={user.id}>
          {user.name} - {user.level}
        </div>
      ))}
    </div>
  );
}
