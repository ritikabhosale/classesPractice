const Tag = require('./styles.js').Tag;

const randomInt = limit => Math.floor(Math.random() * limit);

const randomIntBetween = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

class HSL {
  constructor(hue, saturation, lightness) {
    this.hue = hue;
    this.saturation = saturation;
    this.lightness = lightness;
  }

  resetLight(lightness) {
    this.lightness = lightness;
  }

  inhsl() {
    return `hsl(${this.hue},${this.saturation}%,${this.lightness}%)`;
  }
}

class Square {
  constructor(points, height, color) {
    this.points = points;
    this.height = height;
    this.color = color;
  }

  toHTML() {
    const div = new Tag('div');
    div.addStyles({
      'background-color': this.color,
      'height': `${this.height}px`,
      'width': `${this.height}px`,
      'top': `${this.points.x}px`,
      'left': `${this.points.y}px`,
      'position': 'absolute'
    });
    return div.toHTML();
  }
}

const getShade = hsl => {
  hsl.resetLight(randomInt(90));
  return hsl.inhsl();
};

const colorfulSquares = ({ hue, saturation }, { x, y }, blockWidth) => {
  const hsl = new HSL(hue, saturation);
  return Array(2000).fill(1).map(() => {
    const height = 10;
    const color = getShade(hsl);
    const points = { x: randomInt(x), y: randomIntBetween(y, y + blockWidth) };
    return new Square(points, height, color).toHTML();
  }).join('');
};

const mosaic = () => {
  let lowerLimit = 0;
  const blockWidth = 360;

  return Array(5).fill(1).map(() => {
    const hue = randomInt(360);
    const saturation = randomInt(100);
    const cordinates = { x: 900, y: lowerLimit };
    lowerLimit += blockWidth;
    return colorfulSquares({ hue, saturation }, cordinates, blockWidth);
  }).join('');
};

console.log(mosaic());
