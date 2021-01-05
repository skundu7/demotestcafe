import { Selector } from 'testcafe'
import { login } from '../helper.js'
import LoginPage from '../page-objects/pages/LoginPage'

fixture`Login TEST`
    .page`http://zero.webappsecurity.com/index.html`

const loginPage = new LoginPage()

test('User can not login with valid login creds', async t => {
    loginPage.loginToApp('invalid username', 'invalid password')
     await t.expect(loginPage.errorMessage.innerText).contains('Login and/or password are wrong.')
})


test('User is able to login successfully', async t => {
    loginPage.loginToApp('username','password')
    const acntSummaryTab = Selector('#account_summary_tab')
    const userIcon = Selector('.icon-user')
    const logout = Selector('#logout_link')
    const homeMenu = Selector('#homeMenu')
    const loginForm = Selector('#login_form')
    await t.expect(acntSummaryTab.exists).ok()
    await t.click(userIcon)
    await t.click(logout)
    await t.expect(homeMenu.exists).ok()

})