import { Redirect, Route, Switch } from 'react-router-dom';
import { StoreRouter } from './StoreRouter';
import { NoFound } from '../pages/PageNoFound';
import ContainerLogin from '../pages/Login/ContainerLogin';

export const AppRouter = () => {
    return (
        <Switch>
            <Route exact path="/" render={() => <Redirect to="/store" />} />
            <Route path="/store" component={StoreRouter} />
            <Route path="/login" component={ContainerLogin} />
            <Route path="*">
                <NoFound />
            </Route>
        </Switch>
    );
};
