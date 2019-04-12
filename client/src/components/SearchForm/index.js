import React from 'react';
import './style.css';

function SearchForm(props) {
    return (
        <div className="main">
            <div className="row">
                <div className="col s12 m9">
                    <div className="row">
                        <div className="col s12">
                        <div className="card-panel">
                            <div class="container">
                                <form>
                                    <div class="input-group">
                                        <div class="input-field">
                                            <input
                                            onChange={props.handleInputChange}
                                            value={props.value}
                                            search="search"
                                            name="search"
                                            />
                                            <label class="label-icon" for="search">
                                                <i class="material-icons">search</i>
                                            </label>
                                        </div>
                                        <button onClick={props.handleFormSubmit} class="input-group-addon btn">search</button>
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