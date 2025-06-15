import { ChangeEvent } from "react";
import { useImmer } from "use-immer";

export default function StateFormV2() {
  const [person, setPerson] = useImmer({
    name: "Niki de Saint Phalle",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image:
        "https://images.unsplash.com/photo-1744137285276-57ca4048f805?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      info: {
        age: 20,
      },
    },
  });
  // person.artwork.city = "newyork"

  function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
    setPerson((draft) => {
      draft.name = e.target.value;
    });
  }

  function handleTitleChange(e: ChangeEvent<HTMLInputElement>) {
    setPerson((draft) => {
      draft.artwork.title = e.target.value;
    });
  }

  function handleCityChange(e: ChangeEvent<HTMLInputElement>) {
    setPerson((draft) => {
      draft.artwork.info.age = 25;
    });
  }

  function handleImageChange(e: ChangeEvent<HTMLInputElement>) {
    setPerson((draft) => {
      draft.artwork.image = e.target.value;
    });
  }

  return (
    <div className="flex flex-col gap-5 p-5 w-[500px] mx-auto">
      <label>
        Name:
        <input
          className="p-3 rounded-lg border border-white/20"
          value={person.name}
          onChange={handleNameChange}
        />
      </label>
      <label>
        Title:
        <input
          className="p-3 rounded-lg border border-white/20"
          value={person.artwork.title}
          onChange={handleTitleChange}
        />
      </label>
      <label>
        City:
        <input
          className="p-3 rounded-lg border border-white/20"
          value={person.artwork.city}
          onChange={handleCityChange}
        />
      </label>
      <label>
        Image:
        <input
          className="p-3 rounded-lg border border-white/20"
          value={person.artwork.image}
          onChange={handleImageChange}
        />
      </label>
      <p>
        <i>{person.artwork.title}</i>
        {" by "}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img src={person.artwork.image} alt={person.artwork.title} />
    </div>
  );
}
