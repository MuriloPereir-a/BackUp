class Products  {

    constructor() {

        this.id = 1;
        this.products = [];

    }
   save(){
        let product = this.rData();
        this.adicionar();
        this.adicionar(product);
        this.insercao();

   }
   insercao(){
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';
        for(let i = 0; i<this.products.length; i++){  //Para percorrer nosso array;
            let tr = tbody.insertRow();             //Para cada percorrida, uma linha de acordo;

            let td_id = tr.insertCell();                //variável qualquer para criar uma coluna no TR;
            let td_name = tr.insertCell();
            let td_price = tr.insertCell();

            td_id.innerText = this.products[i].id;
            td_name.innerText = this.products[i].name;
            td_price.innerText = this.products[i].price;

        }
}
   adicionar(){
        this.products.push(product);
        this.id++
   }
   rData(){
       let product = {}

       product.id = this.id;
       product.name = document.getElementById('produto').value;
       product.price = document.getElementById('preco').value;
       return product;
   }

   cancelar(){

   }

}
let product = new Products();

