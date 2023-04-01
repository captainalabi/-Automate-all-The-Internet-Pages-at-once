import Internet from "../pageobjects/Add_Remove_Elements.page.js";

describe('Test https://the-internet.herokuapp.com//add_remove_elements/', ()=>{

it('test add/remove element', async ()=>{

   //await browser.url('/add_remove_elements/')
   await Internet.open()

   await Internet.clickAddElement()
   await expect(Internet.deleteButton).toBeDisplayed()
   await expect(Internet.deleteButton).toHaveText('Delete')
})
})