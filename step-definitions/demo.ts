import { Given, Then, When } from "cucumber";
import { browser, ExpectedConditions } from "protractor";
import HomePageObjcet from '../page-objects/home-pageobjects'
import chai from "chai";
const expect = chai.expect;

Given('I launch w3 schools website', async () => {
    await browser.get(browser.params.url)
}) 

When('I click learnHTML link', async () => {
    const EC = ExpectedConditions;
    let condition = EC.elementToBeClickable(await HomePageObjcet.btnLearnHTML());
    await browser.wait(condition, 30000);
    await HomePageObjcet.btnLearnHTML().click();
})

Then('I should land on html learning page', async () => {
    await browser.sleep(5000);
    expect(await browser.getTitle()).to.equal('W3Schools Online Web Tutorials');
})