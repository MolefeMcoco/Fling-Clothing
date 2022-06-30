import React from 'react';
import { Link } from 'react-router-dom';
import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.css';

const CollectionPreview = ({ title, items }) => {
	return (
		<div className="collection-preview">
			<div className="top">
				<h1 className="title">{title.toUpperCase()}</h1>
				<Link to={'shop/' + title.toLowerCase()}>See all</Link>
			</div>
			<div className="preview">
				{items.filter((item, idx) => idx < 4).map((item) => <CollectionItem key={item.id} item={item} />)}
			</div>
		</div>
	);
};

export default CollectionPreview;
