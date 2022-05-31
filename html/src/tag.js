class Tag {
  constructor(tagName) {
    this.tagName = tagName;
    this.attr = [];
    this.content = '';
  }
  addAttr(attr) {
    this.attr.push(attr);
  }
  setContent(content) {
    this.content = content;
  }
  toString() {
    const attributes = this.attr.map(x => x.toString()).join(' ');
    return `<${this.tagName} ${attributes}>${this.content}</${this.tagName}>`;
  }
}

exports.Tag = Tag;
