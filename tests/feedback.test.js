import { Selector } from 'testcafe'
import FeedbackPage from '../page-objects/pages/FeedbackPage'

fixture `Forgot password`
.page`http://zero.webappsecurity.com/index.html`

const feedbackref = new FeedbackPage()

test('To test the feedback functionlity', async t=>{

    // const feedback = Selector('#feedback')
    // const name = Selector('#name')
    // const email = Selector('#email')
    // const subject = Selector('#subject')
    // const comment = Selector('#comment')
    // const sendMessage = Selector("input").withAttribute('value','Send Message')
    const thankYou = Selector('div').innerText

    // await t.click(feedback)
    // await t.typeText(name,'Sunil')
    // await t.typeText(email,'Sunil@tst.com')
    // await t.typeText(subject,'Feedback from sunil')
    // await t.typeText(comment,'Testing zero bank site feedback')
    // await t.click(sendMessage)
    feedbackref.fillFeedBackForm()
    await t.expect(thankYou).contains('Sunil')








})
