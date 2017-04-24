import React, {Component} from 'react';

import './swap.styles.css';


export default class Swap extends Component {
    componentWillMount() {

        const resultListChecked = {};
        const availableListChecked = {};
        const {current, loaded, available} = this.props;
        const search = '';

        this.setState({resultListChecked, availableListChecked, current, loaded, available, search})
    }

    componentWillReceiveProps(props) {
        const {current, loaded, available} = props;

        this.setState({current, loaded, available})
    }

    itemSelection(index, type) {
        const {resultListChecked, availableListChecked} = this.state;
        const reactFeature = {resultListChecked, availableListChecked};
        reactFeature[`${type}ListChecked`][index] ?
            reactFeature[`${type}ListChecked`][index] = false :
            reactFeature[`${type}ListChecked`][index] = true;

        this.setState(reactFeature);
    }

    swapFromCurrent() {
        let {resultListChecked, current, available } = this.state;
        for (let index in resultListChecked) {
            if (!available.includes(current[index])) {
                available.push(current[index]);
            }
            current[index] = null;
        }

        current = current.filter(author => author);
        resultListChecked = {};


        this.setState({resultListChecked, current, available });
        this.props.onSwap(current);
    }

    swapToCurrent() {
        let {availableListChecked, current, available } = this.state;
        for (let index in availableListChecked) {
            if (!current.includes(available[index])) {
                current.push(available[index]);
            }
        }

        availableListChecked = {};

        this.setState({availableListChecked, current, available });
        this.props.onSwap(current);
    }

    onSearch(search) {
        this.setState({search});
    }

    searchAvailable(e) {
        e.preventDefault();
        const {search} = this.state;

        this.props.onSearch(search);
    }

    addNew(e) {
        e.preventDefault();

        const {search} = this.state;

        this.props.onCreate(search);
    }

    render() {
        const {current, loaded, available} = this.state;
        return (
            <div className="swap">
                <div className="authors-edit__list list-group">
                    <div className="swap__head list-group-item active">
                        Actual
                    </div>
                    <div className="swap-show-list">
                        {current.length ?
                            current.map((item, index) => {
                                return (
                                    <div key={`result${index}`}
                                         onClick={() => this.itemSelection(index, 'result')}
                                         className={
                                             this.state.resultListChecked[index] ?
                                                 "authors-edit authors-edit--actual list-group-item list-group-item-warning active"
                                                 : "authors-edit authors-edit--actual list-group-item list-group-item-warning"
                                         }>
                                        {item}
                                    </div>
                                )
                            })
                            : (<div className="swap-show-list--empty list-group-item">
                            Not specified
                        </div>)
                        }

                    </div>
                </div>
                <div className="authors-controls">
                    <ul className="pager">
                        <li className="authors-controls__item">
                            <span className="authors-controls__button authors-controls__button--add"
                                  onClick={() => this.swapToCurrent()}>
                                &larr; Add
                            </span>
                        </li>
                        <li>
                            <span className="authors-controls__button authors-controls__button--remove"
                                  onClick={() => this.swapFromCurrent()}>
                                Remove &rarr;
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="authors-edit__list authors-edit__list--available list-group">
                    <div className="swap__head list-group-item active">
                        Available
                    </div>
                    <form className="authors-search list-group-item">
                        <input type="text"
                               className="authors-search__input form-control"
                               placeholder="Search"
                                onBlur={(e) => this.onSearch(e.target.value)}/>
                        <button className="authors-search__button btn btn-default"
                        onClick={(e) => this.searchAvailable(e)}>
                            Find
                        </button>
                        <button className="authors-search__button btn btn-default"
                                onClick={(e) => this.addNew(e)}>
                            Add new
                        </button>
                    </form>
                    <div className="swap-show-list">
                        { available.length ?
                                available.map((item, index) => {
                                    return (
                                        <div key={`available${index}`}>
                                            <a onClick={() => this.itemSelection(index, 'available')}
                                               className={
                                                   this.state.availableListChecked[index] ?
                                                       "authors-edit author-edit--search list-group-item list-group-item-info active"
                                                       : "authors-edit author-edit--search list-group-item list-group-item-info"
                                               }>
                                                {item}
                                            </a>
                                        </div>
                                    )
                                })
                        :
                            <div className="swap-show-list--empty list-group-item list-group-item-info">

                                {
                                    loaded ?
                                        <span>
                                            Not Founded
                                        </span>
                                        : <span>
                                        <span className="search--loading">Loading...</span>
                                        <img src={"/img/loader.gif"} width="30" height="30"/>
                                      </span>
                                }
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}