const formatStyles = function (styles) {
  const stylesList = Object.entries(styles);
  return stylesList.map(([property, value]) =>
    `${property}:${value}`).join(';');
};

class Tag {
  constructor(tag) {
    this.tag = tag;
    this.styles = {};
    this.content = '';
  }

  addStyle(property, value) {
    this.styles[property] = value;
  }

  addStyles(styles) {
    this.styles = { ...this.styles, ...styles };
  }

  toHTML() {
    return `<${this.tag} style="${formatStyles(this.styles)}">${this.content}</${this.tag}>`;
  }

  removeStyle(property) {
    delete this.styles[property];
  }

  editStyle(property, newValue) {
    this.styles[property] = newValue;
  }

  addContent(content) {
    this.content += content;
  }
}

exports.Tag = Tag;
