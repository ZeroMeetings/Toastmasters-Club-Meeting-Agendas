import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BlockTitle, CollapseExpand } from '../style';

const Collapse = styled.div``;
/**
 * Collapse & Expand
 */

function CollapseAbleItem( { children, legend }) {
  const [ collapse, setCollapse ] = useState(true);
  const expandCollapse = () => {
    setCollapse(!collapse);
  };
  return (
      <>
          <BlockTitle className={ collapse ? '' : 'text-muted' }>
              <span className="block-title">{legend}</span>
              <CollapseExpand className={ collapse ? '' : 'collapsed' } onClick={ expandCollapse }>
                  {collapse ? 'Collapse' : 'Expand'}
              </CollapseExpand>
          </BlockTitle>
          <Collapse className={ `collapse ${ collapse ? 'show' : '' }` }>
              {children}
          </Collapse>
      </>
  )
}
CollapseAbleItem.propTypes = {
	children: PropTypes.any,
	legend: PropTypes.string,
}

export default CollapseAbleItem
