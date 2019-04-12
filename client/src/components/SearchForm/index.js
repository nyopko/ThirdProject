import React from 'react';
import './style.css';

function SearchForm(props) {
    return (
        <div className="searchForm">
            <div className="row">
                <div className="col s12 m9">
                    <div className="row">
                        <div className="col s12">
                        <div className="card-panel">
                            <div className="container">
                                <form>
                                    <div className="input-group">
                                        <div className="input-field">
                                            <input
                                            onChange={props.handleInputChange}
                                            value={props.value}
                                            search="search"
                                            name="search"
                                            />
                                            <label className="label-icon" forHTML="search">
                                                {/* <i className="material-icons">search</i> */}
                                            </label>
                                        </div>
                                        <button onClick={props.handleFormSubmit} id="searchButton" class="input-group-addon btn">search</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default SearchForm;