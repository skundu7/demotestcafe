import Navbar from '../page-objects/components/Navbar'
import SearchResultsPage from '../page-objects/pages/SearchResultsPage'

const navbar = new Navbar()
const searchPage = new SearchResultsPage();

fixture`Search box`
    .page`http://zero.webappsecurity.com/index.html`

test('To test the serch box fucntionality', async t => {
    navbar.search('Money')
    await t.expect(searchPage.searchResults.innerText).contains('Money')
})