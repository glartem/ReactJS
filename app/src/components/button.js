export const Button = class {
    constructor(name, click) {
        this.name = name;
        this.click = click;
      }
      render() {
        const el = document.createElement("input", {
            'class': 'button',
            'type': 'button',
            'text': this.name,
            'onClick': this.click
        });

        el.setAttribute('class', "button");
        el.setAttribute('type', "button");
        el.setAttribute('value', this.name);

        return el;
    }
}

export default Button;