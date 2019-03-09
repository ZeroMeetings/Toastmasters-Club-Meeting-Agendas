import React, { useState } from 'react';
import PropTypes from 'prop-types';
import localforage from 'localforage';
import CollapseAbleItem from './collapseExpand';
import TextField from './textfield';
import TextareaField from './textarea';
import { Form, Row, Button } from '../style';

function ClubInfo ({ club, updateClubData }) {

	const [ loading, setLoading ] = useState(false);
	const saveFormData = (e) => {
		setLoading(true);
   localforage.setItem('club', club).then((value) => {
			setTimeout(() => {
				setLoading(false)
			}, 1500)
		}).catch(function(err) { console.log(err) });
		e.preventDefault();
	}

	return (

    <Form name="clubInfoData" autoComplete="off" onSubmit={ saveFormData }>
        <CollapseAbleItem legend="Club Info">
            <Row>
                <TextField
									className="col-8 sm-6"
									id="clubName"
									label="Club Name"
									name="clubName"
									value={ club.clubName }
									onChange={ updateClubData }
									placeholder="Your club name"
									required />
                <TextField
									className="col-4  sm-6"
									id="clubNumber"
									label="Club Number"
									name="clubNumber"
									value={ club.clubNumber }
									onChange={ updateClubData }
									placeholder="Your club number"
									required />
            </Row>
            <TextareaField
							id="clubMission"
							size="small"
							label="Club Mission"
							name="clubMission"
							value={ club.clubMission }
							onChange={ updateClubData }
							placeholder="Mission of your club"
							required />
            <Button type="submit">Save Club Info</Button>
            {loading && <i className="fa fa-spinner fa-spin" />}
        </CollapseAbleItem>
    </Form>)
}

	ClubInfo.propTypes = {
		club: PropTypes.object,
		updateClubData: PropTypes.func,
		saveFormData: PropTypes.func,
		loading: PropTypes.bool,
	}

	export default ClubInfo
