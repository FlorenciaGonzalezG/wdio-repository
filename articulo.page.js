import BasePage from '../pages/base.page';

class ArticuloPage extends BasePage {

   //WebElements
   get dropDownColor(){ return $('select') }

   async seleccionarColor(indice){
    //Elijo el color
    await this.dropDownColor.selectByIndex(indice);
    //Guardo el color
    console.log(await this.dropDownColor.getValue());
   }
}
export default new ArticuloPage();