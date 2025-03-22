// Use the conditional operator (cond ? a : b) to render a 🎁 if isPacked isn’t true.
interface ItemProps {
  name: string;
  isPacked: boolean;
}
function Item({ name, isPacked }: ItemProps) {
  return (
    <li className="item">
      {name} {isPacked ? "✅" : "🎁"}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}
