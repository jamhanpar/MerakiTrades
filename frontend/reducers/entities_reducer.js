import { combineReducers } from 'redux';
import users from './entities/users_reducer';
import stocks from './entities/stocks_reducer';
import news from './entities/news_reducer';
import prices from './entities/price_reducer';
import search from './entities/search_reducer';
import company from "./entities/company_reducer";
import watchlists from "./entities/watchlists_reducer";
import quotes from "./entities/quotes_reducer";

export default combineReducers({
    users,
    stocks,
    news,
    prices,
    search,
    company,
    watchlists,
    quotes,
});