import {block} from "../utils";
import {TextBlock, TitleBlock  } from "./blocks";


export class Sidebar {
    constructor(selector, updateCallback) {
        this.$el = document.querySelector(selector)
        this.update = updateCallback

    this.init()
    }

    init () {
        this.$el.insertAdjacentHTML('afterbegin', this.tamplate)
        this.$el.addEventListener('submit', this.add.bind(this))
    }

    get tamplate() {
        return [
            block('Зареєструйтеся')

        ].join('')
    }

    add(event) {
        event.preventDefault()

        const type = event.target.name
        const value = event.target.value
        const styles = event.target.styles.value

       const newBlock = type === 'text'
           ? new TextBlock(value, {styles})
           : new TitleBlock(value, {styles})

        this.update(newBlock)

        event.target.value.value = ''
        event.target.styles.value = ''
    }
}
