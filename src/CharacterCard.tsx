import Card from "./Card";

export default function CharacterCard ({
  title,
  imageUrl,
  description,
  onLike,
  onDelete
} : {
  title: string,
  imageUrl: string,
  description: string,
  onLike: (title: string) => void,
  onDelete: () => void
}) {
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

      <div>
        <button onClick={() => onLike(title)}>Like</button>
        <button onClick={() => onDelete()}>Delete</button>
      </div>
    </div>
  )
}