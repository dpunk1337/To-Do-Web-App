
var app=new Vue({
  el:'#app',
  data:{
    entry:'',
    entryFavorite:false,
    todoList:[],
    mouseOver:false
  },
  methods:{
    addItem(){
      console.log(this.entry)
      if(this.entry !==''){
        let date= new Date;
        let newEntry={
          id: date.getTime(),
          title: this.entry,
          favorite: this.entryFavorite,
          complete: false
        }
        if(newEntry.favorite)
        {
          this.todoList.splice(0, 0, newEntry);
        }
        else{
          this.todoList.push(newEntry);
        }
      }
      this.entry="";
    },
    setPos(item){
      if(item.favorite)
      {
        let index=this.todoList.findIndex(element=> element.id === item.id)
        this.todoList.splice(index, 1);
        this.todoList.splice(0, 0, item);
      }
    },
    resetPos(item){
      if(item.complete)
      {
        item.favorite=false;
        let index=this.todoList.findIndex(element=> element.id === item.id)
        this.todoList.splice(index, 1);
        this.todoList.push(item);
      }
    },
    clearAll(){
      this.todoList=[];
    },
    removeItem(item){
      let index=this.todoList.findIndex(element=> element.id === item.id)
      this.todoList.splice(index,1);
    }
  }

})
