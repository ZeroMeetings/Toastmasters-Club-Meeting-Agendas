import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Container, Button } from '../style.js'

const SiteHeader = styled.header`
  background-color: #192027;
  position: fixed;
  width: 100%;
  height: 4rem;
  box-sizing: border-box;
  z-index: 9999;
  @media print {
    display: none;
  }
`;
const SiteName = styled.h1`
  margin: 0;
  font-size: 1rem;
  padding: 1.25rem;
  font-weight: normal;
  a {
    color: #ffffff;
    text-decoration: none;
  }
`;

  const printMyAgenda = () => {
    window.print();
  }
  
  const Header = ({ siteTitle }) => (
      <SiteHeader>
          <SiteName>
              <Container>
                  <span
            style={ {
              color: 'white',
              textDecoration: 'none',
            } }
          >
                      {siteTitle}
                  </span>
                  <Button className="bg-primary btn-print" onClick={ printMyAgenda }>
                      <i className="fa fa-print"></i>
                      <span>Print</span>
                  </Button>
              </Container>
          </SiteName>
      </SiteHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
}
export default Header
