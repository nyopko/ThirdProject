import React from 'react';
import './style.css';

function SearchForm() {
    return (
        <div className="main">
            <div className="row">
                <div className="col s12 m9">
                    <div className="row">
                        <div className="col s12">
                        <div className="card-panel">
                            <div class="container">
                                <form id="search-site" action='search' method='get'>
                                    <div class="input-group">
                                        <div class="input-field">
                                            <input id="search" type="search" name='q' />
                                            <label class="label-icon" for="search">
                                                <i class="material-icons" >search</i>
                                            </label>
                                        </div>
                                        <button type="submit" class="input-group-addon btn">search</button>
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