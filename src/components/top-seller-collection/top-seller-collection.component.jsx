import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';
import data from './topSeller.data';

import '../collection-preview/collection-preview.styles.css';

const TopSellers = () => {
	console.log(data);
	return (
		<div className="collection-preview">
			<h1 className="title">Top Sellers</h1>
			<div className="preview">{data.map((item) => <CollectionItem key={item.id} item={item} />)}</div>
		</div>
	);
};

export default TopSellers;
