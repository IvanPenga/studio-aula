import type { Vertice } from "./drawing";

export function canvasRenderer(canvas: HTMLCanvasElement, vertices: Vertice[]) {
  const context = canvas.getContext("2d") as CanvasRenderingContext2D;

  context.fillStyle = '#ebebeb';
  context.strokeStyle = '#dbdbdb';

  function drawVertices() {
    vertices.forEach((vertice) => context.fillRect(vertice.x, vertice.y, 2, 2));
  }

  function drawLine(x1: number, y1: number, x2: number, y2: number) {
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
  }

  function drawEdges() {
    context.beginPath();

    vertices.forEach((currentVerice) => {
      vertices.forEach((connectedVertice, index) => {
        if (index % 2 === 0) return;

        drawLine(
          currentVerice.x,
          currentVerice.y,
          connectedVertice.x,
          connectedVertice.y,
        );
      });
    });

    context.stroke();
  }

  function moveVertices() {
    vertices.forEach((vertice) => {
      vertice.x += vertice.movementX;
      vertice.y += vertice.movementY;

      if (vertice.x >= canvas.width || vertice.x <= 0)
        vertice.movementX = -vertice.movementX;

      if (vertice.y >= canvas.height || vertice.y <= 0)
        vertice.movementY = -vertice.movementY;
    });
  }

  function clear() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  return { drawVertices, moveVertices, clear, drawEdges };
}
