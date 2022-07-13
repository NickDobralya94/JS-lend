import {Sidebar} from "./sidebar";
import {Site} from "./site";


export class app {
    constructor(model) {
        this.model = model
    }
        init () {
           const site = new Site('#site')

            site.render(this.model)

            const updateCallback = newBlock => {
                this.model.push(newBlock)
                site.render(this.model)
            }

            new Sidebar('#panel', updateCallback)
    }
}