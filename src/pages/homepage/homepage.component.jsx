import React from 'react';
import HeaderBanner from '../../components/header-banner/header-banner.component';
import HeroImage from '../../components/heroImage/heroImage.component';
import TopSeller from '../../components/top-seller-collection/top-seller-collection.component';
import Banner from '../../components/banner/banner.component';
import Directory from '../../components/directory/directory.component';
import NewLetter from '../../components/news-letter/news-letter.component';

import './homepage.styles.css';

const HomePage = () => (
	<div className="homepage">
		<HeaderBanner />
		<HeroImage />
		<Directory />
		<Banner />
		<TopSeller />
		<NewLetter />
	</div>
);

export default HomePage;
