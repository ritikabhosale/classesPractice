class Tag {
  constructor(tag) {
    this.tag = tag;
    this.attributes = [];
  }

  addStyle(style) {
    this.attributes.push(style);
  }

  createTag() {
    const style = this.appendStyles();
    return `<${this.tag} style="${style}"></${this.tag}>`;
  }

  appendStyles() {
    return this.attributes.map(
      ({ attribute, value }) => `${attribute}:${value}`).join(';');
  }

  removeStyle(attributeToRemove) {
    for (let index = 0; index < this.attributes.length; index++) {
      const { attribute } = this.attributes[index];
      if (attribute === attributeToRemove) {
        return this.attributes.splice(index, 1);
      }
    }
  }
}

exports.Tag = Tag;
