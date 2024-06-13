import { Redirect, Route, Switch } from 'react-router-dom';
import { StoreRouter } from './StoreRouter';
import { NoFound } from '../pages/PageNoFound';

export const AppRouter = () => {
    return (
        <Switch>
            <Route exact path="/" render={() => <Redirect to="/store" />} />
            <Route path="/store" component={StoreRouter} />
            <Route path="*">
                <NoFound />
            </Route>
        </Switch>
    );
};
