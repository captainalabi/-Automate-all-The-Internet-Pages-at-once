import MainPagePage from "../pageobjects/MainPage.page.js"
//import expect from "chai"

describe('navigate the links', ()=>{

    it('should navigate any link', async()=>{

MainPagePage.open()

//1. A/B Testing

//await MainPagePage.firstLink.click()

await MainPagePage.clickAnchorLink(1)
await expect(browser).toHaveUrl('https://the-internet.herokuapp.com/abtest')
await expect(MainPagePage.testVariation).toHaveTextContaining('A/B Test')
   
await browser.pause(2000)
    })
})