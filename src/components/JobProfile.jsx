import React from 'react';
import { Grid, Cell } from 'radium-grid';
import axios from 'axios';
import FormGroup from './FormGroup';
import Tag from './Tag';
import Select from './Select';

class JobProfile extends React.Component {
  constructor() {
    super()

    this.state = {
      company: {
        name: 'ACME',
      },
      job: {
        title: 'Boss Man',
        description: 'Cool stuff and things',
        notes: 'Here are some notes',
        techStack: ['react', 'javascript', 'express'],
        industries: ['space', 'Sass', 'magic'],
      },
      interactions: [
        'Applied',
        'Phone Screen',
        'In Person'
      ],
    }

    this.updateInteractions = this.updateInteractions.bind(this);
  }

  componentDidMount() {
    axios.get(`SOME_ENDPOINT with ID ${this.props.match.params.id}`)
      .then(res => {
        console.log('MISSING API ENDPOINT - JobProfile', res)
      })
      .catch(err => {
        console.log(err);

        //const nextState;
        //this.setState(nextState)
      });
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

  render() {
    const interactions = this.state.interactions.map((interaction, index) => {
      return (
        <Cell
          key={ index }>
          <Select
            value={ interaction }
            data={[
              'Choose Interaction Type',
              'Informational',
              'Applied',
              'Phone Screen',
              'In Person Interview',
              'Custom...'
            ]}
            data-index={ index }
            onChange={ this.updateInteractions } />
          <i>⨁</i>
          <i>⊖</i>
        </Cell>
      )
    });

    const techStack = this.state.job.techStack.map((tech, tagIndex) => {
      return (
        <Tag key={ tagIndex } >
          { tech }
        </Tag>
      )
    });

    const industryTags = this.state.job.industries.map((industry, industryIndex) => {
      return (
        <Tag key={ industryIndex } >
          { industry }
        </Tag>
      )
    });

    return (
      <Grid width="1/4" style={ styles.section }>
        <Cell width="3/4">
          <Grid width="1">
            <Cell>
              <h2>{this.state.job.title} - {this.state.company.name}</h2>
            </Cell>

            <Cell>
              <FormGroup
                name="job.description"
                value={ this.state.job.description }
                label="description"
                type="textarea"
                placeholder="lorum ipsum"
                onChange={ this.handleUpdate } />
            </Cell>

            <Cell>
              <article>
                <h3>Interactions</h3>

                <div>
                  ⊙====⊙====Ⓞ=---⊙----⊙
                </div>

                <Grid width="1">
                  { interactions }
                </Grid>
              </article>
            </Cell>

            <Cell>
              <FormGroup
                name="job.notes"
                value={ this.state.job.notes }
                type="textarea"
                label="Notes"
                placeholder="What cha thinkin'?"
                onChange={ this.handleUpdate } />
            </Cell>
          </Grid>
        </Cell>

        <Cell>
          <Grid width="1">
            <Cell>
              Map
            </Cell>

            <Cell>
              { techStack }
            </Cell>

            <Cell>
              { industryTags }
            </Cell>
          </Grid>
        </Cell>
      </Grid>
    )
  }
}

// placeholder styles
const styles = {
  section: {
    background: '#1A1624',
    color: 'white',
    padding: 10,
  }
}

export default JobProfile;
