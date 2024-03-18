export function getTypeClass(type) {
  switch (type) {
    case "normal":
      return "normal-type";
    case "fire":
      return "fire-type";
    case "water":
      return "water-type";
    case "electric":
      return "electric-type";
    case "grass":
      return "grass-type";
    case "ice":
      return "ice-type";
    case "fighting":
      return "fighting-type";
    case "poison":
      return "poison-type";
    case "ground":
      return "ground-type";
    case "flying":
      return "flying-type";
    case "psychic":
      return "psychic-type";
    case "bug":
      return "bug-type";
    case "rock":
      return "rock-type";
    case "ghost":
      return "ghost-type";
    case "dragon":
      return "dragon-type";
    case "dark":
      return "dark-type";
    case "steel":
      return "steel-type";
    case "fairy":
      return "fairy-type";

    default:
      return ""; 
  }
}
