type Card = {
  id: number,
  title: string,
  imageUrl: string,
  description: string,
  onLike: (title: string) => void
};

export default Card;