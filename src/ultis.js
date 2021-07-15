let color = [
  { type: "Bug", color: "#8bd674" },
  { type: "Dark", color: "#6f6e78" },
  { type: "Dragon", color: "#7383b9" },
  { type: "Electric", color: "#f2cb55" },
  { type: "Fairy", color: "#eba8c3" },
  { type: "Fighting", color: "#eb4971" },
  { type: "Fire", color: "#ffa756" },
  { type: "Flying", color: "#83a2e3" },
  { type: "Ghost", color: "#8571be" },
  { type: "Grass", color: "#8bbe8a" },
  { type: "Ground", color: "#f78551" },
  { type: "Ice", color: "#91d8df" },
  { type: "Normal", color: "#b5b9c4" },
  { type: "Poison", color: "#9f6e97" },
  { type: "Psychic", color: "#ff6568" },
  { type: "Rock", color: "#d4c294" },
  { type: "Steel", color: "#4c91b2" },
  { type: "Water", color: "#58abf6" },
]

export const getColorType = (value) => {
  return color.filter(item => item.type == value)[0].color;
}