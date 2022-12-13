import Card from "./Card";
import CharacterCard from "./CharacterCard";

export default function CharacterGallery ({characters} : { characters: Card[] }) {
  return (
    <div className={"character-gallery"}>
      {characters.map(character => (
        <CharacterCard key={character.title} {...character}/>
      ))}
    </div>
  );
}