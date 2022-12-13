type Card = {
  id: number,
  title: string,
  imageUrl: string,
  description: string,
  onLike: (title: number) => void
};

export default Card;