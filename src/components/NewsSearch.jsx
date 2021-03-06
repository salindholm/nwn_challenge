import React, { useState } from "react";
import { useDispatch } from "react-redux";
import NewsService from "../modules/NewsService";
import { Input, Button } from "semantic-ui-react";

const NewsSearch = () => {
	const dispatch = useDispatch();
	const [searchQuery, setSearchQuery] = useState();
	const searchNews = async () => {
		let searchResponse = await NewsService.search(searchQuery);
		dispatch({ type: "SET_NEWS_FEED", payload: searchResponse });
	};

	return (
		<>
			<Input
				data-cy="search-input"
				type="text"
				placeholder="Search..."
				onChange={(event) => setSearchQuery(event.target.value)}
			/>
			<Button data-cy="search-button" onClick={searchNews}>
				Search
			</Button>
		</>
	);
};

export default NewsSearch;
