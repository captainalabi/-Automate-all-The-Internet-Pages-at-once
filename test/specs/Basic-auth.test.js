// filename: test/basic-auth.spec.js
// ...
//const assert = require("assert");
//const { Builder, By, Key } = require("selenium-webdriver");
//import Builder from "selenium-webdriver"

describe("Basic Authentication", function() {
    
  it("should visit basic auth secured page directly with username=admin and password=admin", async function() {

   await browser.url("http://admin:admin@the-internet.herokuapp.com/basic_auth");

    const page_message = await $(".example p")
     
    await expect(page_message).toHaveText("Congratulations! You must have the proper credentials.")

   await browser.pause(5000)
});
});