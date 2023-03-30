/**
 * CONSEGNA:
 * Stampare a schermo un messaggio all’interno di un h1 utilizzando una proprietá nell'oggetto restituito dalla funzione data.
 * 
 * BONUS:
 * Aggiungere alla pagina un’immagine, presa anch’essa da un data.
 */

const { createApp } = Vue

createApp({
    data() {
        return {
            tmp: 1,
            title: 'Hello Vue!',
            message: "boh na roba temporanea",
            picsum: "https://picsum.photos/200/200",
            pstyle: "fst-italic",
            active: false,
            count: 0,
            checkedNames: [],
            selected: 'A',
            options: [
                { text: 'One', value: 'A' },
                { text: 'Two', value: 'B' },
                { text: 'Three', value: 'C' }
            ],
        }
    },
    methods: {
        changePic() {
            this.picsum = "";
            console.log(this.picsum);
            this.picsum = "https://picsum.photos/200/200";
        },
        changeColor() {
            this.active = !this.active;
        },
        addOneToCount() {
            this.count++;
        },
        greet(event) {
            // `this` inside methods points to the current active instance
            alert(`${this.title}!`)
            // `event` is the native DOM event
            if (event) {
                alert(event.target.tagName)
            }
        },
    }
}).mount('#app')
