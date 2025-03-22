// This example shows a list of all people.

// Change it to show two separate lists one after another: Chemists and Everyone Else. Like previously, you can determine whether a person is a chemist by checking if person.profession === 'chemist'.
interface GetImageURLProps {
  person: {
    id: number;
    name: string;
    profession: string;
    accomplishment: string;
    imageId: string;
  };
}
export function getImageUrl({ person }: GetImageURLProps) {
  return "https://i.imgur.com/" + person.imageId + "s.jpg";
}

export const people = [
  {
    id: 0,
    name: "Creola Katherine Johnson",
    profession: "mathematician",
    accomplishment: "spaceflight calculations",
    imageId: "MK3eW3A",
  },
  {
    id: 1,
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "chemist",
    accomplishment: "discovery of Arctic ozone hole",
    imageId: "mynHUSa",
  },
  {
    id: 2,
    name: "Mohammad Abdus Salam",
    profession: "physicist",
    accomplishment: "electromagnetism theory",
    imageId: "bE7W1ji",
  },
  {
    id: 3,
    name: "Percy Lavon Julian",
    profession: "chemist",
    accomplishment:
      "pioneering cortisone drugs, steroids and birth control pills",
    imageId: "IOjWm71",
  },
  {
    id: 4,
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrophysicist",
    accomplishment: "white dwarf star mass calculations",
    imageId: "lrWQx8l",
  },
];

export default function List() {
  const chemistPeople = people
    .filter((item) => item.profession === "chemist")
    .map((person) => (
      <li key={person.id}>
        <img src={getImageUrl({ person })} alt={person.name} />
        <p>
          <b>{person.name}:</b>
          {" " + person.profession + " "}
          known for {person.accomplishment}
        </p>
      </li>
    ));
  const otherPeople = people
    .filter((item) => item.profession !== "chemist")
    .map((person) => (
      <li key={person.id}>
        <img src={getImageUrl({ person })} alt={person.name} />
        <p>
          <b>{person.name}:</b>
          {" " + person.profession + " "}
          known for {person.accomplishment}
        </p>
      </li>
    ));
  return (
    <article>
      <h1>Scientists</h1>
      <h2>Chemist</h2>
      <ul>{chemistPeople}</ul>
      <h2>Everyone else</h2>
      <ul>{otherPeople}</ul>
    </article>
  );
}
