const App = {
    data(){
        return{
            placeholderString: 'Введите название заметки',
            title: 'Список заметок',
            inputValue: '',
            notes: []
        }        
    },
    methods: {
        inputChangeHandler(event){
            this.inputValue = event.target.value
        },

        addNewNote(){
            this.notes.push(this.inputValue)
            this.inputValue = ''      
        },
        inputKeyPress(event){
            if(event.key === 'Enter'){
                this.addNewNote()
            }
        }
    }
}



const app = Vue.createApp(App);

app.mount('#app')