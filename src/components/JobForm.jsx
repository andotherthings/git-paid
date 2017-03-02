import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import JobFormS1 from './JobFormS1';
import JobFormS2 from './JobFormS2';
import JobFormS3 from './JobFormS3';
import JobFormS4 from './JobFormS4';

class JobForm extends React.Component {
  constructor() {
    super()
    this.state = {
      company: {
        name: '',
      },
      companyAddress: {
        street1: '',
        street2: '',
        city: '',
        state: '',
        zip: '',
        country: '',
      },
      job: {
        title: '',
        description: '',
        compensation: '',
        techStack: '',
        industries: '',
        url: '',
      },
      jobAddress: {
        street1: '',
        street2: '',
        city: '',
        state: '',
        zip: '',
        country: '',
      },
      interactions: [
        'Choose Interaction Type',
        'Informational',
        'Applied',
        'Informational',
        'Applied'
      ],
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateState = this.updateState.bind(this);
    this.updateInteractions = this.updateInteractions.bind(this);
  }

  updateState(e) {
    const table = e.target.name.split('.')[0];
    const field = e.target.name.split('.')[1];
    const val = e.target.value;

    const propState = { [field]: val };
    const nextTableState = Object.assign({}, this.state[table], propState);
    const nextState = Object.assign({}, this.state, { [table]: nextTableState });

    this.setState(nextState);
  }

  updateInteractions(e) {
    const index = parseInt(e.target.dataset.index);
    const interactionsList = this.state.interactions;
    const interactions = [
      ...interactionsList.slice(0, index),
      e.target.value,
      ...interactionsList.slice(index + 1)
    ]

    const nextState = Object.assign({}, this.state, { interactions });


    this.setState(nextState);
  }

  handleSubmit() {
    axios.post('SOME_ENDPOINT', this.state)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <section style={{background: '#1f1f1f', padding: 10}}>
        <Route exact path="/new-job" render={() => (
          <JobFormS1
            job={ this.state.job }
            handleUpdate={ this.updateState } />
        )} />
        <Route path="/new-job/part2" render={() => (
          <JobFormS2
            company={ this.state.company }
            companyAddress={ this.state.companyAddress }
            handleUpdate={ this.updateState } />
        )} />
        <Route path="/new-job/part3" render={() => (
          <JobFormS3
            job={ this.state.job }
            jobAddress={ this.state.jobAddress }
            handleUpdate={ this.updateState } />
        )} />
        <Route path="/new-job/part4" render={() => (
          <JobFormS4
            interactions={ this.state.interactions }
            handleUpdate={ this.updateInteractions }
            handleSubmit={ this.handleSubmit } />
        )} />
      </section>
    );
  }
}

export default JobForm;
