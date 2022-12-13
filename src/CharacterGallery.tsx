import Card from "./Card";
import CharacterCard from "./CharacterCard";

export default function CharacterGallery ({
  characters,
  onDelete
} : {
  characters: Card[];
  onDelete: (id: number) => void
}) {
  return (
    <div className={"character-gallery"}>
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          {...character}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}