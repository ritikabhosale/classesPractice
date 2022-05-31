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
exports.HSL = HSL;
