import React, { useState } from 'react';
import PropTypes from 'prop-types';
import localforage from 'localforage';
import CollapseAbleItem from './collapseExpand';
import TextField from './textfield';
import TextareaField from './textarea';
import { Form, Row, Button, FormGroup, Label, Field } from '../style';

const date = new Date();
const year =  date.getFullYear();
const minDate = date.toISOString().substr(0, 10);
const maxDate = `${ year }-12-31`;

function MeetingInfo ({ meeting, updateMeetingData }) {

  const [ loading, setLoading ] = useState(false);
	const saveFormData = (e) => {
		setLoading(true);
   localforage.setItem('meeting', meeting).then((value) => {
			setTimeout(() => {
				setLoading(false)
			}, 1500)
		}).catch(function(err) { console.log(err) });
		e.preventDefault();
	}

  return (
      <Form autoComplete="off" onSubmit={ saveFormData }>
          <CollapseAbleItem legend="Meeting Information">
              <Row>
                  <TextField
                  className="col-8 sm-7"
                  id="meetingTheme"
                  label="Meeting Theme"
                  name="meetingTheme"
                  value={ meeting.meetingTheme }
                  onChange={ updateMeetingData }
                  placeholder="Club meeting theme"
                  required />
                  <FormGroup className="col-4 sm-5">
                      <Label htmlFor="">Meeting Date</Label>
                      <Field
                    type="date"
                    id="meetingDate"
                    label="Meeting Date"
                    name="meetingDate"
                    min={ minDate }
                    max={ maxDate }
                    value={ meeting.meetingDate || minDate }
                    onChange={ updateMeetingData }
                    placeholder="Date"
                    required />
                  </FormGroup>
              </Row>
              <TextareaField
              size="small"
              id="meetingDetails"
              label="Date, Time &amp; Venue"
              name="meetingDetails"
              value={ meeting.meetingDetails }
              onChange={ updateMeetingData }
              placeholder="We meet every Wednesday from 6:00pm to 7:00pm at XYZ Restaurant, Kathmandu, Nepal."
              required />
              <Button type="submit">Save Executive Team</Button>
              {loading && <i className="fa fa-spinner fa-spin" />}

          </CollapseAbleItem>
      </Form>)
  }
	MeetingInfo.propTypes = {
		meeting: PropTypes.object,
		updateMeetingData: PropTypes.func,
		saveFormData: PropTypes.func,
		loading: PropTypes.bool,
	}

	export default MeetingInfo
