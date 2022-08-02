import PropTypes from 'prop-types';
import { SearchbarBox, SearchbarInput } from './Searchbar.styled';

const Searchbar = ({ onSubmitFom }) => { 
    return (
        <SearchbarBox>
            <form onSubmit={onSubmitFom}>
                <SearchbarInput
                    type="text"
                    name="serch"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movies"
                />
                <button type="submit">
                    <label>Search</label>
                </button>
            </form>
            
        </SearchbarBox>   
    )
};

Searchbar.propTypes = {
    onSubmitFom: PropTypes.func.isRequired,
};

export default Searchbar;