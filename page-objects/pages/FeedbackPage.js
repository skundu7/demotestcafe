import {Selector, t} from 'testcafe'

class FeedbackPage{

    constructor(){
    this.feedback = Selector('#feedback')
    this.name = Selector('#name')
    this.email = Selector('#email')
    this.subject = Selector('#subject')
    this.comment = Selector('#comment')
    this.sendMessage = Selector("input").withAttribute('value','Send Message')
    this.thankYou = Selector('div').innerText
    }

    async fillFeedBackForm(){
        await t
        .click(this.feedback)
        .typeText(this.name,'Sunil')
        .typeText(this.email,'Sunil@tst.com')
        .typeText(this.subject,'Feedback from sunil')
        .typeText(this.comment,'Testing zero bank site feedback')
        .click(this.sendMessage)
    }

}

export default FeedbackPage