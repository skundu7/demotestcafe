import { Selector } from 'testcafe'
import {xpathToCss} from 'xpath-to-css'


fixture`Add new Payee`
    .page`http://zero.webappsecurity.com/index.html`

test.before(async t => {
    const signInLink = Selector('#signin_button')
    await t.click(signInLink);
    const userName = Selector('#user_login')
    await t.typeText(userName,'username')
    const passWord = Selector('#user_password')
    await t.typeText(passWord,'password')
    const signInBtn = Selector('.btn-primary')
    await t.click(signInBtn)

})
    ('Verify Add new payee Functionality', async t => {

        const payBillLink = Selector('a').withText('Pay Bills')
        await t.click(payBillLink)
        const addNewPayee = Selector('a').withText('Add New Payee')
        await t.click(payBillLink)
        const payeeName = Selector('#np_new_payee_name')
        const payeeAddress = Selector('#np_new_payee_address')
        const payeeAccount = Selector('#np_new_payee_account')
        const payeeDetails = Selector('#np_new_payee_details')
        const addPayeebtn = Selector('#add_new_payee')
        
        await t.typeText(payeeName,'Sunil Kundu')
        await t.typeText(payeeAddress,'Sunil Address')
        await t.typeText(payeeAccount,'Sunil Account')
        await t.typeText(payeeDetails,'Sunil Details')

        await t.click(addPayeebtn)



    })

