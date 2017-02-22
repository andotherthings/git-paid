import {Grid, Col, Row} from 'react-styled-flexboxgrid';

import styled, { ThemeProvider } from 'styled-components';
import Button from '../assets/styled-components/Button';

const primaryTheme = {
  color: 'midnightblue',
  background: 'lightsteelblue',
  borderColor: 'midnightblue',
};

class Header extends React.Component {
  render() {
    return (

      <div>
        <ThemeProvider theme={primaryTheme}>
        <Grid>
          <Row>
            <Col xs={12} sm={6}>
              <Wrapper>Hello</Wrapper>
            </Col>
            <Col xs={12} sm={6}>
              <Wrapper>Hello</Wrapper>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={6} md={3}><SecondaryButton>A</SecondaryButton></Col>
            <Col xs={12} sm={6} md={3}><Button>B</Button></Col>
            <Col xs={12} sm={6} md={3}><SecondaryButton>C</SecondaryButton></Col>
            <Col xs={12} sm={6} md={3}><Button>D</Button></Col>
          </Row>
          <Row>
            <Col xs={12} sm={6} md={3}><SecondaryButton>E</SecondaryButton></Col>
            <Col xs={12} sm={6} md={3}><Button>F</Button></Col>
            <Col xs={12} sm={6} md={3}><SecondaryButton>G</SecondaryButton></Col>
            <Col xs={12} sm={6} md={3}><Button>H</Button></Col>
          </Row>
        </Grid>
        </ThemeProvider>
      </div>
    )
  }
}

export default Header;
