export type Vertice = {
  x: number;
  y: number;
  movementX: number;
  movementY: number;
};

function getRandomInteger(min: number, max: number) {
  return Math.round(Math.random() * (max - min) + min);
}

function getRandomMovement() {
  return Math.random() >= 0.5 ? getRandomInteger(1, 2) : getRandomInteger(-1, -2);
}

export function initializeVertices(
  amount: number,
  minPosition: number,
  maxPosition: number,
) {
  let vertices: Vertice[] = [];

  for (let i = 0; i < amount; i++) {
    vertices.push({
      x: getRandomInteger(0, minPosition),
      y: getRandomInteger(0, maxPosition),
      movementX: getRandomMovement(),
      movementY: getRandomMovement(),
    });
  }

  return vertices;
}
