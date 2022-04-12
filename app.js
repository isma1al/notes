const App = {
    data(){
        return{
            placeholderString: 'Введите название заметки',
            title: 'Список заметок',
            inputValue: '',
            notes: [],
            state: 'ok'
        }        
    },
    methods: {
        inputChangeHandler(event){
            this.inputValue = event.target.value
        },

        addNewNote(){
            if(this.inputValue){
                this.notes.push(this.inputValue)
                this.inputValue = ''
                this.state = 'ok'
            } else {
                this.state = ''
            }  
        },

        toUpperCase(item){
          return item.toUpperCase()
        },

        removeNote(index){
           this.notes.splice(index,1)
        },
        clearNote(){
            this.notes.splice(0,this.notes.length)
            console.log(this.notes);
        }
    }
}



const app = Vue.createApp(App);

app.mount('#app')
