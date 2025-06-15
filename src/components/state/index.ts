const info = {};

const artwork = {
  title: "Blue Nana",
  city: "Hamburg",
  image:
    "https://images.unsplash.com/photo-1744137285276-57ca4048f805?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};
const person = {
  name: "Sanji",
  artwork1: {
    ...artwork,
    info,
  },
};
const person2 = {
  name: "Luffy",
  artwork2: artwork,
};
const person3 = {
  name: "Zoro",
  artwork3: artwork,
};
