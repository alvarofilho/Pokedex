let color = [
  { type: "bug", color: "#8bd674" },
  { type: "dark", color: "#6f6e78" },
  { type: "dragon", color: "#7383b9" },
  { type: "electric", color: "#f2cb55" },
  { type: "fairy", color: "#eba8c3" },
  { type: "fighting", color: "#eb4971" },
  { type: "fire", color: "#ffa756" },
  { type: "flying", color: "#83a2e3" },
  { type: "ghost", color: "#8571be" },
  { type: "grass", color: "#8bbe8a" },
  { type: "ground", color: "#f78551" },
  { type: "ice", color: "#91d8df" },
  { type: "normal", color: "#b5b9c4" },
  { type: "poison", color: "#9f6e97" },
  { type: "psychic", color: "#ff6568" },
  { type: "rock", color: "#d4c294" },
  { type: "steel", color: "#4c91b2" },
  { type: "water", color: "#58abf6" },
]

export const getColorType = (value) => {
  return color.filter(item => item.type == value)[0].color;
}