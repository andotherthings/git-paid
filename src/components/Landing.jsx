import React from 'react';

import {Grid, Col, Row} from 'react-styled-flexboxgrid';

import styled, { ThemeProvider } from 'styled-components';
import LandingButton from '../assets/styled-components/LandingButton';

const primaryTheme = {
  color: '#047251',
  background: '#C2E1C2',
  borderColor: '#047251',
};

class Landing extends React.Component {
  render() {
    return (
      <div>
        <ThemeProvider theme={primaryTheme}>
        <Grid>
          <Row>
            <Col xs={12}>
              <h1>git-paid</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <LandingButton>Now</LandingButton>
            </Col>
          </Row>
        </Grid>
      </ThemeProvider>

      </div>
    );
  }
}

export default Landing;
