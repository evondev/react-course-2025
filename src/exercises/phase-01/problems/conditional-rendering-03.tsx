// This Drink component uses a series of ? : conditions to show different information depending on whether the name prop is "tea" or "coffee". The problem is that the information about each drink is spread across multiple conditions. Refactor this code to use a single if statement instead of three ? : conditions.
function Drink({ name }) {
  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{name === "tea" ? "leaf" : "bean"}</dd>
        <dt>Caffeine content</dt>
        <dd>{name === "tea" ? "15–70 mg/cup" : "80–185 mg/cup"}</dd>
        <dt>Age</dt>
        <dd>{name === "tea" ? "4,000+ years" : "1,000+ years"}</dd>
      </dl>
    </section>
  );
}

export default function DrinkList() {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  );
}
