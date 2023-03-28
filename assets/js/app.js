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
            title: 'Hello Vue!',
            message: "boh na roba temporanea",
            picsum: "https://picsum.photos/200/200",
            pstyle: "fst-italic",
            active: false,
            blue: "text-primary"
        }
    },
    methods: {
        changeColor() {
            this.active = !this.active;
        }
    }
}).mount('#app')
