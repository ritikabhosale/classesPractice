const { Style } = require('./html/src/style.js');
const { Tag } = require('./html/src/tag.js');
const { Attribute } = require('./html/src/attribute.js');

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
    const styles = new Style();
    styles.addStyles({
      'background-color': this.color,
      'height': `${this.height}px`,
      'width': `${this.height}px`,
      'top': `${this.points.x}px`,
      'left': `${this.points.y}px`,
      'position': 'absolute'
    });
    const style = new Attribute('style', styles);
    div.addAttr(style);
    return div.toString();
  }
}

const getShade = hsl => {
  hsl.resetLight(randomInt(90));
  return hsl.inhsl();
};

const colorfulSquares = ({ hue, saturation }, { x, y }) => {
  const hsl = new HSL(hue, saturation);
  return Array(1000).fill(1).map(() => {
    const height = 10;
    const color = getShade(hsl);
    const points = { x: randomInt(x), y: randomInt(y) };
    return new Square(points, height, color).toHTML();
  }).join('');
};

const mosaic = () => {
  let lowerLimit = 0;
  const blockWidth = 360;

  return Array(5).fill(1).map(() => {
    const hue = randomInt(360);
    const saturation = randomInt(100);
    const upperLimit = lowerLimit + blockWidth;
    const cordinates = { x: 900, y: randomIntBetween(lowerLimit, upperLimit) };
    lowerLimit += blockWidth;
    return colorfulSquares({ hue, saturation }, cordinates);
  }).join('');
};

console.log(mosaic());
