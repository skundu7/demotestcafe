import { Selector, t } from 'testcafe'

class ForgotPasswordPage {
       constructor() {
        this.forgotPassLink = Selector('a').withText('Forgot your password ?')
        this.inputEmail = Selector('#user_email')
        this.message = Selector('div').innerText
    }

    async forgotPassword(email) {
        await t
            .click(this.forgotPassLink)
            .typeText(this.inputEmail,email)
            .pressKey('enter')  
    }
}

export default ForgotPasswordPage