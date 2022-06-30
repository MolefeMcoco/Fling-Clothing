import React from 'react';
import './banner.styles.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectCurrentUser } from '../../redux/user/user-selector';
import { createStructuredSelector } from 'reselect';
import CustomButton from '../custom-button/custom-button.component';

const Banner = ({ currentUser }) => {
	return (
		<div className="banner">
			{currentUser ? (
				<h1>Shop Now Get Free Delivery On 1st Order</h1>
			) : (
				<h1>Join Now & Get Free Delivery On 1st Order</h1>
			)}
			<div>
				{currentUser ? (
					<Link to="/shop">
						<CustomButton>Shop Now</CustomButton>
					</Link>
				) : (
					<Link to="/signin">
						<CustomButton>Join Now</CustomButton>
					</Link>
				)}
			</div>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(Banner);
