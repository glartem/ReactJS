import Btn from "./button.js"

export const Info = class {
    constructor(data) {
        let { name, btn = 'test', click =  () => alert('click')} = data;

        this.name = name;
        this.btn = btn;
        this.click = click;
    }
    render() {
        const el = document.createElement("div");

        el.setAttribute('class', "container");
        el.innerHTML = `<div class='name'>${this.name}</div>`;

        var btn = new Btn(this.btn, this.click);
        el.appendChild(btn.render());

        return el;
    }
}
export default Info;