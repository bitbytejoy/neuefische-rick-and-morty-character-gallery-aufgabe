import Card from "./Card";
import CharacterCard from "./CharacterCard";

export default function CharacterGallery ({
  characters,
  onDelete
} : {
  characters: Card[];
  onDelete: (i: number) => void
}) {
  return (
    <div className={"character-gallery"}>
      {characters.map((character, i) => (
        <CharacterCard
          key={i}
          {...character}
          onDelete={() => onDelete(i)}
        />
      ))}
    </div>
  );
}