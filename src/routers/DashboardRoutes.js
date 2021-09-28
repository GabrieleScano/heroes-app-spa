import {
    Switch,
    Route,
    Redirect,
  } from 'react-router-dom';
import { DCScreen } from '../component/dc/DCScreen'
import { HeroScreen } from '../component/heroes/HeroScreen'
import { MarvelScreen } from '../component/marvel/MarvelScreen'
import { SearchScreen } from '../component/search/SearchScreen'
import { Navbar } from '../component/ui/Navbar'

export const DashboardRoutes = () => {
    return (
        <>
        <Navbar />
        <div className="container mt-2">
            <Switch>
                <Route exact path="/marvel" component={MarvelScreen} />
                <Route exact path="/dc" component={DCScreen} />
                <Route exact path="/search" component={SearchScreen} />
                <Route exact path="/hero/:heroeId" component={HeroScreen} />
                <Redirect to="/marvel" />
            </Switch>
        </div>
        </>
    )
}
