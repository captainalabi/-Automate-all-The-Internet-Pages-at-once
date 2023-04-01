import Page from './page.js';

class Internet extends Page{

//pageobject for https://the-internet.herokuapp.com/

//add/remove element
get addElement(){ 
    return $( '#content button');
}
get deleteButton(){
    return $( '#elements button:nth-child(1)');
}

async clickAddElement(){
   await this.addElement.click()
}

/**
     * overwrite specific options to adapt it to page object
     */
async open () {
   await super.open('add_remove_elements/');
}
}
export default new Internet();