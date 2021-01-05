import { selector,t, Selector } from  'testcafe'

fixture `Getting started with testCafe`
   .page`https://devexpress.github.io/testcafe/example/`

   .before(async t=>{

   })

   .beforeEach(async t=>{
    await t.setPageLoadTimeout(0)
    //await t.setTestSpeed(.5)


   })

   .after(async t=>{

   })

   .afterEach(async t=>{
       
   })

   const input = Selector('#developer-name')
   const button = Selector('#submit-button')
   const expectedText = Selector('#article-header')

   test("To test the devexpress site", async t =>{
       await t.typeText(input,'Sunil')
       await t.click(button)
       //await t.takeScreenshot({fullPage:true})
       //await t.takeElementScreenshot(expectedText)
       await t.expect(expectedText.innerText).contains('Sunil')
    

      

   })