let pessoa = {
    name: '',
    setName: function (newName){
        this.name = newName
    },
    getName: function (){
        return console.log(this.name);
    }
}
pessoa.setName("Murilo");
pessoa.getName();