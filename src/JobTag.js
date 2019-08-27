import React, { Component } from 'react';
import './JobTag.css';

class JobTag extends Component {

  constructor(props) {
    super(props);
    this.displayFilter = this.displayFilter.bind(this);
  }

  displayFilter(filter) {
    console.log('selected filter: ' + filter);
    return this.props.displayFilter(filter);
  }

  render() {
    return(
      <div className="jobtag-wrapper">
        <FilterAllButton displayFilter={(e) => { this.displayFilter(e); }}/>
        <FilterSalesButton displayFilter={(e) => { this.displayFilter(e); }}/>
        <FilterDirectorButton displayFilter={(e) => { this.displayFilter(e); }}/>
        <FilterEngineerButton displayFilter={(e) => { this.displayFilter(e); }}/>
      </div>
    );
  }
}

class FilterAllButton extends Component {
  constructor(props) {
    super(props);
    this.selectedFilter = this.selectedFilter.bind(this);
  }

  selectedFilter(filter) {
    return this.props.displayFilter(filter);
  }

  render() {
    return(<span className="badge badge-info" onClick={(e) => this.selectedFilter('all', e)}>All</span>);
  }

}

class FilterSalesButton extends Component {
  constructor(props) {
    super(props);
    this.selectedFilter = this.selectedFilter.bind(this);
  }

  selectedFilter(filter) {
    return this.props.displayFilter(filter);
  }

  render() {
    return(<span className="badge badge-red" onClick={(e) => this.selectedFilter('sales', e)}>Sales</span>)
  }
}

class FilterDirectorButton extends Component {
  constructor(props) {
    super(props);
    this.selectedFilter = this.selectedFilter.bind(this);
  }

  selectedFilter(filter) {
    return this.props.displayFilter(filter);
  }

  render() {
    return(<span className="badge badge-blue" onClick={(e) => this.selectedFilter('director', e)}>Director</span>)
  }
}

class FilterEngineerButton extends Component {
  constructor(props) {
    super(props);
    this.selectedFilter = this.selectedFilter.bind(this);
  }

  selectedFilter(filter) {
    return this.props.displayFilter(filter);
  }

  render() {
    return (<span className="badge badge-green" onClick={(e) => this.selectedFilter('engineer', e)}>Engineer</span>)
  }
}

export default JobTag;
