import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import InitialPage from './InitialPage';
import Header from '../Header/Header';
import Main from './Main';
import CourseDetailsPage from '../CourseDetails/CourseDetailsPage';
import Footer from '../Footer/Footer';
import AboutPage from "../Header/AboutPage";
import ContactsPage from "../Header/ContactsPage";
import FeedbackPage from "../Header/FeedbackPage";
import PathPage from "../Header/PathPage";
import Materials from '../Footer/Materials';
import '../../styles/App.css';

class App extends Component {

    state = {
        loading: true
    };

    componentDidMount() {
        setTimeout(() => this.setState({ loading: false }), 2000);
    }

    render() {
        return (
            <Router basename={process.env.PUBLIC_URL}>
                {this.state.loading ? <InitialPage /> :
                    <div className="app">
                        <Header />
                        <Switch>
                            <Redirect exact from="/" to="/courses" />
                            <Route path="/courses/" component={Main} />
                            <Route path="/about" component={AboutPage} />
                            <Route path="/path" component={PathPage} />
                            <Route path="/feedback" component={FeedbackPage} />
                            <Route path="/contacts" component={ContactsPage} />
                            <Route path="/:id" component={CourseDetailsPage} />
                            <Route path="/materials" component={Materials} />
                            <Route render={() => <h1>404 Page not found</h1>}/>
                        </Switch>
                        <Footer/>
                    </div>
                }
            </Router>
        );
    }
}

export default App;
