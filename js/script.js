const { createApp } = Vue;

createApp({
    data() {
        return {
            emailList: [],
            listLength: "" // scleta lungheza lista email
        }
    },
    methods: {
        getEmails() {

            // controllo inserimento numero
            if (parseInt(this.listLength)) {

                this.emailList = [] // creo nuova lista ad ogni chiamata di funzione

                // creazione email della lista
                for (i = 0; i < parseInt(this.listLength); i++) {
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                        .then((resp) => {
                            this.emailList.push(resp.data.response)
                        })
                }
            } else {//se non è stato inserito un numero
                
                alert("inserire un numero nell'input");
                this.listLength = ""
            }
        }
    },
}).mount("#app")