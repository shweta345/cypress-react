import names from '../data/names';

const SearchingPage = () => {
	return (
		<div className="container-wrapper">
			<Autocomplete names={names} />
		</div>
	);
};

export default SearchingPage;
