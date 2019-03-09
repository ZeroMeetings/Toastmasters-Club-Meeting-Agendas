import React, { useState } from 'react';
import PropTypes from 'prop-types';
import localforage from 'localforage';
import CollapseAbleItem from './collapseExpand';
import TextField from './textfield';
import { Form, Row, Button } from '../style';

function ExecutiveTeam ({ excom, updateExcomData }) {

	const [ loading, setLoading ] = useState(false);
	const saveFormData = (e) => {
		setLoading(true);
   localforage.setItem('excom', excom).then((value) => {
			setTimeout(() => {
				setLoading(false)
			}, 1500)
		}).catch(function(err) { console.log(err) });
		e.preventDefault();
	}

	return (
    <Form autoComplete="off" onSubmit={ saveFormData }>
        <CollapseAbleItem legend="Club Executive Team">
            <Row>
                <TextField
									className="col-6 sm-6"
									id="president"
									label="President"
									name="president"
									value={ excom.president }
									onChange={ updateExcomData }
									placeholder="President name"
									required />
		
                <TextField
									className="col-6 sm-6"
									id="vPEducation"
									label="VP Education"
									name="vPEducation"
									value={ excom.vPEducation }
									onChange={ updateExcomData }
									placeholder="VP education name"
									required />
      
                <TextField
									className="col-6 sm-6"
									id="vPMembership"
									label="VP Membership"
									name="vPMembership"
									value={ excom.vPMembership }
									onChange={ updateExcomData }
									placeholder="VP membership name"
									required />
		
                <TextField
									className="col-6 sm-6"
									id="vPRelation"
									label="VP Public Relation"
									name="vPRelation"
									value={ excom.vPRelation }
									onChange={ updateExcomData }
									placeholder="VP public relation name"
									required />
		
                <TextField
									className="col-6 sm-6"
									id="secretary"
									label="Secretary"
									name="secretary"
									value={ excom.secretary }
									onChange={ updateExcomData }
									placeholder="Secretary name"
									required />
      
                <TextField
									className="col-6 sm-6"
									id="treasurer"
									label="Treasurer"
									name="treasurer"
									value={ excom.treasurer }
									onChange={ updateExcomData }
									placeholder="Treasurer name" />
      
                <TextField
									className="col-6 sm-6"
									id="sergeant"
									label="Sergeant at Arms"
									name="sergeant"
									value={ excom.sergeant }
									onChange={ updateExcomData }
									placeholder="Sergeant at arms name"
									required />
      
                <TextField
									className="col-6 sm-6"
									id="pastPresident"
									label="Immediate Past President"
									name="pastPresident"
									value={ excom.pastPresident }
									onChange={ updateExcomData }
									placeholder="Immediate past president name" />
            </Row>
            <Button type="submit">Save Executive Team</Button>
            {loading && <i className="fa fa-spinner fa-spin" />}
        </CollapseAbleItem>
    </Form>
	)
}
	ExecutiveTeam.propTypes = {
		excom: PropTypes.object,
		updateExcomData: PropTypes.func,
    saveFormData: PropTypes.func,
    loading: PropTypes.bool,
	}

	export default ExecutiveTeam
