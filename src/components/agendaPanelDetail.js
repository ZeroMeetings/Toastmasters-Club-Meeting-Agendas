import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row } from '../style';

/**
 * Collapse & Expand
 */
function AgendaPanelDetail ({ children }) {
  const [ hideDetail, setHideDetail ] = useState(true);
  const minimizeAgendaDetail = () => {
    setHideDetail(!hideDetail);
  };
  return (
      <>
          <small className={ `hide-detail-panel ${ hideDetail ? '' : 'active' }` } onClick={ minimizeAgendaDetail }>{hideDetail ? 'More' : 'Less'}
              <i className={ `fa ${ hideDetail ? 'fa-angle-down' : 'fa-angle-up' }` }></i>
          </small>
          <Row className={ `agenda-detail-panel ${ hideDetail ? '' : 'show' }` }>
              {children}
          </Row>
      </>
  )
}
AgendaPanelDetail.propTypes = {
  children: PropTypes.any,
}

export default AgendaPanelDetail
