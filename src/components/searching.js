import {rules, createComparison} from "../lib/compare.js";


export function initSearching(searchField) {
    // @todo: #5.1 — настроить компаратор
    
    return (data, state, action) => {
        // @todo: #5.2 — применить компаратор
        let searchComparator = createComparison(
            ['skipEmptyTargetValues'],
            [rules.searchMultipleFields(searchField, ['date', 'customer', 'seller'], false)]
        );
        
        return data.filter(row => searchComparator(row, state));

    }
}