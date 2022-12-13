export default function CharacterCard ({
  id,
  title,
  imageUrl,
  description,
  onLike,
  onDelete
} : {
  id: number,
  title: string,
  imageUrl: string,
  description: string,
  onLike: (id: number) => void,
  onDelete: (id: number) => void
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
        <button onClick={() => onLike(id)}>Like</button>
        <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    </div>
  )
}