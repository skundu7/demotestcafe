import { Selector, t } from 'testcafe'

class LoginPage {

    constructor() {
        this.signInLink = Selector('#signin_button')
        this.userName = Selector('#user_login')
        this.passWord = Selector('#user_password')
        this.signInBtn = Selector('.btn-primary')
        this.errorMessage = Selector('.alert-error')
        this.forgotPassLink = Selector('a').withText('Forgot your password ?')
    }

    async loginToApp(username, password) {
        await t
            .click(this.signInLink)
            .typeText(this.userName, username)
            .typeText(this.passWord, password)
            .click(this.signInBtn)
    }
}

export default LoginPage