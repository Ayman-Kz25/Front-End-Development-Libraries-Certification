export const MoodBoardItem = ({ color, image, description }) => {
  return (
    <div className="mood-board-item" style={{ backgroundColor: color }}>
      <img src={image} className="mood-board-image" />
      <h3 className="mood-board-text">{description}</h3>
    </div>
  );
};

export const MoodBoard = () => {
  const items = [
    {
      color: "#fce7d6",
      image: "https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg",
      description: "Peaceful mountain paths",
    },
    {
      color: "#dbeafe",
      image: "https://cdn.freecodecamp.org/curriculum/labs/shore.jpg",
      description: "Quiet ocean mornings",
    },
    {
      color: "#dcfce7",
      image: "https://cdn.freecodecamp.org/curriculum/labs/grass.jpg",
      description: "Fresh green landscapes",
    },
    {
      color: "#fef3c7",
      image: "https://cdn.freecodecamp.org/curriculum/labs/ship.jpg",
      description: "Adventure on the water",
    },
    {
      color: "#fce7f3",
      image: "https://cdn.freecodecamp.org/curriculum/labs/santorini.jpg",
      description: "Sunny Mediterranean escapes",
    },
    {
      color: "#ede9fe",
      image: "https://cdn.freecodecamp.org/curriculum/labs/pigeon.jpg",
      description: "Slow days in the city",
    },
  ];

  return (
    <div className="mood-board">
      <h1 className="mood-board-heading">Destination Mood Board</h1>
      {items.map((item) => (
        <MoodBoardItem
          color={item.color}
          image={item.image}
          description={item.description}
        />
      ))}
    </div>
  );
};
