// This Gallery component contains some very similar markup for two profiles. Extract a Profile component out of it to reduce the duplication. You’ll need to choose what props to pass to it.

export function getImageUrl(imageId: string, size = "s") {
  return "https://i.imgur.com/" + imageId + size + ".jpg";
}
interface ProfileProps {
  name: string;
  imageId: string;
  size: number;
}
function Profile({ name, imageId, size }: ProfileProps) {
  return (
    <section className="profile">
      <h2>{name}</h2>
      <img
        className="avatar"
        src={getImageUrl(imageId)}
        alt={name}
        width={size}
        height={size}
      />
      <ul>
        <li>
          <b>Profession: </b>
          geochemist
        </li>
        <li>
          <b>Awards: 2 </b>
          (Miyake Prize for geochemistry, Tanaka Prize)
        </li>
        <li>
          <b>Discovered: </b>a method for measuring carbon dioxide in seawater
        </li>
      </ul>
    </section>
  );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile name="Maria Skłodowska-Curie" size={100} imageId="szV5sdG" />
      <Profile name="Maria Skłodowska-Curie" size={100} imageId="szV5sdG" />
    </div>
  );
}
