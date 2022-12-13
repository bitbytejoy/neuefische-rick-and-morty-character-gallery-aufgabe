import Card from "./Card";

export default function CharacterCard ({
  title,
  imageUrl,
  description
} : Card) {
  return (
    <div className={"character-card"}>
      <div>
        <h3>{title}</h3>
      </div>

      <div>
        <img src={imageUrl} alt={title}/>
      </div>

      <div>
        {description}
      </div>
    </div>
  )
}