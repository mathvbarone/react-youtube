import React from 'react';

class SearchBar extends React.Component {

    state = { term: '' };


    onInputChange = event => {
        const term = event.target.value;
        this.setState({ term });
        return this.props.onInputChange(term);
    }



    render() {
        return (
            <section className="search-bar ui segment">
                <form onSubmit={e => e.preventDefault()} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </section>
        );
    }
}

export default SearchBar;