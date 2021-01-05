import{Selector,t} from 'testcafe'

class SearchResultsPage{

    constructor(){
        this.searchResults = Selector('.top_offset')     
    }
}
export default SearchResultsPage