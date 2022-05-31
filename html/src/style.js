class Style {
  constructor() {
    this.styles = {};
  }

  addStyle(property, value) {
    this.styles[property] = value;
  }

  addStyles(styles) {
    this.styles = { ...this.styles, ...styles };
  }

  toString() {
    const styles = Object.entries(this.styles);
    return styles.map(([property, value]) => `${property}:${value}`).join(';');
  }

  removeStyle(property) {
    delete this.styles[property];
  }

  editStyle(property, newValue) {
    this.styles[property] = newValue;
  }
}

exports.Style = Style;
