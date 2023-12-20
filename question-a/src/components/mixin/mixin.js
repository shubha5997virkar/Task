export default {
        //We are using mixin to share data between sibling component
        //this is child -child communication.

    methods: {
        showInAlert() {
            alert(`count is ${this.count}`)
        }
    },
}