import { LightningElement } from "lwc";

export default class App extends LightningElement {
    

    
    account = {
      primeiroNome: "",
      Sobrenome: "",
      Email: "",
      Website: "",
      Empresa: "",
      ReceitaAnnual: "",

    } ;


    handleInputChange(event){
        
        let name = event.target.name;
        let value = event.detail.value;

        this.account = {
           ...this.account, [name]:value
        } ;

        console.log(this.account);
    }
  
}