import { Selector } from 'testcafe'
import Navbar from '../page-objects/components/Navbar'
import LoginPage from '../page-objects/pages/LoginPage'
import ForgotPasswordPage from '../page-objects/pages/ForgotPasswordPage'

const navbar = new Navbar()
const loginPage = new LoginPage()
const forgotPasswordPage = new ForgotPasswordPage()

fixture`Forgot password functionality`
    .page`http://zero.webappsecurity.com/index.html`



test('To test the forgot password feture', async t => {

    //const signInLink = Selector('#signin_button')


    //const forgotPassLink = Selector('a').withText('Forgot your password ?')
    //const inputEmail = Selector('#user_email')
    const email = 'Test@mail.com'
    await t.click(navbar.signInLink)
    forgotPasswordPage.forgotPassword(email)
    const message = Selector('div')
    
 
    //await t.click(navbar.signInLink)
    //await t.click(loginPage.forgotPassLink)
   //. await t.typeText(inputEmail, 'test@gmai.com')
    //await t.click(forgotPasswordPage.inputEmail,'test@gmail.com')
    //await t.pressKey('enter')
    await t.expect(message.innerText).contains(email)

})