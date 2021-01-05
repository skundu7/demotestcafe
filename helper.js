import { t, Selector } from 'testcafe'
import {xPathToCss} from 'xpath-to-css'

export async function login(username, password){

    const xPath = `'//button[@id=singin_button]'`
    console.log(xPath)
    const css = xPathToCss(xPath)
    console.log(css)
    await t.click('#signin_button')
    await t.typeText('#user_login',username)
    await t.typeText('#user_password',password)
    await t.click('.btn-primary')

    
    
}