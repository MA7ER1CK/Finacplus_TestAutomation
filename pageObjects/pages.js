const {expect,page} = require ('@playwright/test')


class bookApp {


    constructor (page){
        this.page=page
        this.url = 'https://demoqa.com'
        this.bookCard = '.card-body:has-text("Book Store Application")'
        this.loginButton = '#login'
        this.usernameText = 'testautomation'
        this.username = '#userName'
        this.passwordText = 'Test@automation123'
        this.password = '#password'
        this.usernameValueKey = '#userName-value'
        this.submitKey = '#submit'
        this.bookSearch = '#searchBox'
        this.bookSearchText = 'Learning JavaScript Design Patterns'
        this.bookName = 'a[href="/books?book=9781449331818"]'
        this.bookAuthor = '//div[normalize-space()="Addy Osmani"]'
        // this.bookPublisher = '//div[normalize-space()='O'Reilly Media"]'
        this.book = '#see-book-Learning JavaScript Design Patterns'
    }

    async navigateAndLogin (){
        await this.page.goto(this.url)
        await this.page.locator(this.bookCard).click()
        await this.page.locator(this.loginButton).click()
        await this.page.locator(this.username).fill(this.usernameText)
        await this.page.locator(this.password).fill(this.passwordText)
        await this.page.locator(this.loginButton).click()
        await this.page.locator(this.usernameValueKey)
        const usernameValue = await this.page.locator(this.usernameValueKey).textContent()
        const submitValue = await this.page.locator(this.submitKey).textContent()
        expect(usernameValue.trim()).toBe('testautomation')
        expect(submitValue).toBe('Log out')
    }
    async searchForBookandValidateResults (){
        await this.page.locator(this.bookSearch).fill(this.bookSearchText)
        const book = await this.page.locator(this.bookname)
        expect(book).toBeTruthy()
        const title = await this.page.locator(this.bookName).textContent()
        const author = await this.page.locator(this.bookAuthor).textContent()
        const bookTitleElement = this.page.locator("#see-book-Learning\\ JavaScript\\ Design\\ Patterns")
        const publisher = await bookTitleElement.locator("xpath=../../following-sibling::div[2]").textContent()
        expect (publisher).toBe("O'Reilly Media")
        console.log(publisher,title,author)
        
        //writing the book details into a file

        const fs = require ('fs')
        const data = `${publisher},${title},${author}`
        fs.writeFileSync('Bookdata/outputBookData.txt',data)
        
    }


}
module.exports=bookApp
