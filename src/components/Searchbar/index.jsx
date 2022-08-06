import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SearchbarBox, SearchbarInput } from './Searchbar.styled';

const Searchbar = ({ onSubmitFom }) => {
  const [searchQuery, setSearchQuery] = useSearchParams();
  const queryValue = searchQuery.get('query') ?? '';

  const handleInput = e => {
    if (e.currentTarget.value.toLowerCase() !== searchQuery)
      setSearchQuery({ query: e.currentTarget.value.toLowerCase() });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (queryValue.trim() === '') {
      return toast.error('Write something!');
    }

    onSubmitFom(queryValue);
  };

  return (
    <SearchbarBox>
      <form onSubmit={handleSubmit}>
        <SearchbarInput
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search movies"
          name="query"
          value={queryValue}
          onChange={handleInput}
        />
        <button type="submit">Search</button>
      </form>
    </SearchbarBox>
  );
};

Searchbar.propTypes = {
  onSubmitFom: PropTypes.func.isRequired,
};

export default Searchbar;
