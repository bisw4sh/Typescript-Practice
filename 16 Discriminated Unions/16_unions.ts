interface _Square {
  kind: "square";
  size: number;
}

interface Rectangle {
  kind: "rectangle";
  _width: number;
  _height: number;
}

interface Circle {
  kind: "circle";
  radius: number;
}

type _Shape = _Square | Rectangle | Circle;

function area(s: _Shape): number {
  switch (s.kind) {
    case "square":
      return s.size * s.size;
    case "rectangle":
      return s._width * s._height;
    case "circle":
      return Math.PI * s.radius * s.radius;
    default:
      // This line is here to make TypeScript raise an error if there's a missing case
      const _exhaustiveCheck: never = s;
      return _exhaustiveCheck;
  }
}

console.log(area({ kind: "circle", radius: 6 }));