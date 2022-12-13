type Card = {
  title: string,
  imageUrl: string,
  description: string,
  onLike: (title: string) => void
};

export default Card;