import React from 'react';
import { Grid, Cell } from 'radium-grid';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from './Button';
import FormGroup from './FormGroup';
import Tag from './Tag';

class Dashboard extends React.Component {
  constructor() {
    super();
    this.handleSearch = this.handleSearch.bind(this);

    this.state = {
      jobApps: [
        {
          companyName: 'Space x',
          jobTitle: 'Rocket Scientist',
          industries: [
            'Space',
            'Rockets',
            'Satellites',
          ],
        }, {
          companyName: 'Planetary Resources',
          jobTitle: 'Space Data Miner',
          industries: [
            'Space',
            'Rocks',
          ],
        }, {
          companyName: 'Thought Bot',
          jobTitle: 'Googler',
          industries: [
            'SaaS',
            'Consultancy',
          ],
        },
      ],
      search: '',
    };
  }


  componentDidMount() {
    axios.get('SOME_ENDPOINT')
      .then(res => {
        console.log('MISSING API ENDPOINT', res);

        //const nextState;
        //this.setState(nextState)
      })
      .catch(err => {
        console.log('ERR', err);
      });
  }

  handleSearch(event) {
    const searchTerm = event.target.value;

    this.setState({ search: searchTerm });
  }

  render() {
    const jobApps = this.state.jobApps.filter(job => {
      const company = job.companyName.toLowerCase();
      const title = job.jobTitle.toLowerCase();
      const search = this.state.search;

      if (company.indexOf(search) !== -1 || title.indexOf(search) !== -1) {
        return job;
      }
    })
    .map((jobApp, jobIndex) => {
      const industries = jobApp.industries.map((industry, tagIndex) => {
        return (
          <Tag
            key={ tagIndex }
          >
            { industry }
          </Tag>
        );
      });

      return (
        <Link
          to={ `/job/${jobIndex}` }
          key={ jobIndex }
          style={ Object.assign(
            {},
            styles.link,
          ) }
        >

          <article
            style={ styles.tableRow }
          >

            <Grid width="1/3">
              <Cell>
                { jobApp.companyName }
              </Cell>

              <Cell>
                { jobApp.jobTitle }
              </Cell>

              <Cell>
                { industries }
              </Cell>
            </Grid>
          </article>
        </Link>
      );
    });

    return (
      <section style={ styles.section }>
        <Grid width="1/4">
          <Cell align="left">
            <FormGroup
              type="text"
              label="search"
              placeholder="what are you looking for?"
              onChange={ this.handleSearch }
            />

          </Cell>

          <Cell align="right" width="3/4">
            <Link to="/new-job">
              <Button type="info">New Job</Button>
            </Link>
          </Cell>
        </Grid>

        <header style={ styles.header }>
          <Grid width="1/3">
            <Cell>
              Company Name
            </Cell>

            <Cell>
              Job Title
            </Cell>

            <Cell>
              Industries
            </Cell>
          </Grid>
        </header>

        { jobApps }

      </section>
    );
  }
}

const styles = {
  section: {
    marginBottom: 20,
  },

  header: {
    backgroundColor: '#006699',
    padding: 8,
    color: 'white',
  },

  tableRow: {
    padding: 8,
  },
  link: {
    color: 'black',
    display: 'block',
    margin: 0.5,
    fontSize: 14,
    fontFamily: 'Poppins',
    letterSpacing: 1,
    textTransform: 'uppercase',
    textDecoration: 'none',
  },
};

export default Dashboard;
