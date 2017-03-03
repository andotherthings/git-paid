import React from 'react';
import { Grid, Cell } from 'radium-grid';
import { Link } from 'react-router-dom';
import StyledLink from './StyledLink';
import axios from 'axios';
import Button from './Button';
import FormGroup from './FormGroup';
import Tag from './Tag';

class Dashboard extends React.Component {
  constructor() {
    super()

    this.state = {
      jobApps: [
        {
          companyName: 'Space x',
          jobTitle: 'Rocket Scientist',
          industries: [
            'Space',
            'Rockets',
            'Satellites'
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
        }
      ],
    }
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

  render() {
    const jobApps = this.state.jobApps.map((jobApp, jobIndex) => {
      const industries = jobApp.industries.map((industry, tagIndex) => {
        return (
          <Tag
            key={ tagIndex } >
              { industry }
          </Tag>
        )
      });

      return (
        <StyledLink
          to={`/job/${jobIndex}`}
          key={ jobIndex } >

          <article
            style={styles.tableRow}>

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
        </StyledLink>
      );
    });

    return (
      <section style={styles.section}>
        <Grid width="1/4">
          <Cell align="left">
            <FormGroup
              type="text"
              label="search"
              placeholder="what are you looking for?" />
          </Cell>

          <Cell align="right" width="3/4">
            <Link to='/new-job'>
              <Button type="info">New Job</Button>
            </Link>
          </Cell>
        </Grid>

        <header style={styles.header}>
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
    )
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
}

export default Dashboard;
