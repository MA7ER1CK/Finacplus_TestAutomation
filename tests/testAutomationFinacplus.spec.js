import { test, expect } from '@playwright/test';
const bookApplication = require("../pageObjects/pages")

test('test book application', async({page})=>{

    const bookap = new bookApplication(page)

    await bookap.navigateAndLogin()
    await bookap.searchForBookandValidateResults()
})