import { LightningElement, track } from 'lwc';

export default class Calculator extends LightningElement {

    @track result=0;

    handleAdd()
    {
        var num1=parseInt(this.template.querySelector('[data-id="num1"]').value);
        var num2=parseInt(this.template.querySelector('[data-id="num2"]').value);
        this.result=num1+num2;
 
    }

    handleSub()
    {
        var num1=parseInt(this.template.querySelector('[data-id="num1"]').value);
        var num2=parseInt(this.template.querySelector('[data-id="num2"]').value);
        this.result=num1-num2;
    }

}