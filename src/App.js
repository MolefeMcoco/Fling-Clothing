import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user-selector';
import { GlobalStyle } from './global.styles';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.components';
import Header from './components/header/header.component';
import HeaderBanner from './components/header-banner/header-banner.component';
import HeroImage from './components/heroImage/heroImage.component';
import TopSeller from './components/top-seller-collection/top-seller-collection.component';
import { auth } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;

		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
			if (user) {
				setCurrentUser(user);
			}

			setCurrentUser(user);
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<GlobalStyle />
				<Header />
				<HeaderBanner />
				<HeroImage />
				<TopSeller />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route
						path="/signin"
						render={() => (this.props.currentUser ? <Redirect to="./" /> : <SignInAndSignUpPage />)}
					/>
					<Route exact path="/checkout" component={CheckoutPage} />
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
