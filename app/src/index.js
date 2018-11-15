import "./index.css";
import DeveloperInfo from "./components/info.js"

const component = new DeveloperInfo({
    name: 'Artem Gladkiy',
    // btn: 'test',
    // click:  () => alert('click')
});
//debugger;
document.body.appendChild(component.render());
