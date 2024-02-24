export function GET() {
  const colors = ["red", "blue", "green", "yellow", "orange"];

  //randomly chose one
  const color = colors[Math.floor(Math.random() * colors.length)];
  return Response.json(color);
}
