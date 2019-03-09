import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import localforage from 'localforage';
import Header from './components/header';
import ClubInfo from './components/formClub';
import ExecutiveTeam from './components/formExcom';
import MeetingInfo from './components/formMeeting';
import Agenda from './components/formAgenda';

import MeetingAgendaPreview from './components/preview';
import { Main, Container, Row } from './style';
import './layout.scss';

function App({ saveFormData }) {

  // Club Info
  const [ club, setClub ] = useState({ clubName: '', clubNumber: '', clubMission: '' });

  // Executive Team
  const [ excom, setExcom ] = useState({
    president: '',
    vPEducation: '',
    vPMembership: '',
    vPRelation: '',
    secretary: '',
    treasurer: '',
    sergeant: '',
    pastPresident: '',
  });

  // Meeting Object
  const [ meeting, setMeeting ] = useState({ meetingTheme: '', meetingDate: '', meetingDetails: '' });

  // Agenda Object
  const [ agendas, setAgendas ] = useState([ { id: 1, title: '', toastmaster: '', startAt: '', details: '' } ]);

  // Club data on change
  const updateClubData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setClub({
      ...club, [ name ]: value
    });
  }

  // Excome data on change
  const updateExcomData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setExcom({
      ...excom, [ name ]: value
    });
  }

  // Excome data on change
  const updateMeetingData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setMeeting({
      ...meeting, [ name ]: value
    });
  }

  // Update Agendas data on change
  const updateAgendasData = (e, id) => {
    let newAgenda = [];
    if( typeof e === 'string') {
      newAgenda = agendas.map(agenda => {
        if (parseInt(agenda.id, 10) !== id) return agenda;
        return { ...agenda, 'details': e };
      });
    } else {
      newAgenda = agendas.map(agenda => {
        if (parseInt(agenda.id, 10) !== id) return agenda;
        return { ...agenda, [ e.target.name ]: e.target.value };
      });
    }
    setAgendas(newAgenda);
  }

  // Add new agenda
  const addAgenda = () => {
    setAgendas([
      ...agendas, {
        id: agendas.length + 1,
        title: '',
        toastmaster: '',
        startAt: '',
        details: '' }
    ]);
  };

  // Remove current agenda
  const removeAgenda = (e, id) => {
    const newAgenda = agendas.filter((agenda) => agenda.id !== id);
    const message = window.confirm(`Do you want to delete Agenda agenda #${ id } ?`);
    if (message === true) {
      setAgendas(newAgenda);
    }
    return false;
  }

  useEffect(() => {
    localforage.config({
      name: 'zmtm-offline'
    });
    // Club Data
    localforage.getItem('club', function(err, value) {
      if (value !== null ) setClub(value)
    });

    // Executive Team
    localforage.getItem('excom', function(err, value) {
      if (value !== null ) setExcom(value)
    });

    // Meeting Data
    localforage.getItem('meeting', function(err, value) {
      if (value !== null ) setMeeting(value)
    });

    // Agenda Data
    localforage.getItem('agendas', function(err, value) {
      if (value !== null ) setAgendas(value)
    });

    return;
  }, []);  
  return (
      <div className="App">
          <Header siteTitle="Zero Meetings - Toastmasters Meeting Agenda" />
          <Main>
              <Container>
                  <Row>
                      <div className="forms col-5">
                          <ClubInfo
                club={ club }
                updateClubData={ updateClubData }
                saveFormData={ saveFormData } />
                          <ExecutiveTeam
                excom={ excom }
                updateExcomData={ updateExcomData }
                saveFormData={ saveFormData } />
                          <MeetingInfo
                meeting={ meeting }
                updateMeetingData={ updateMeetingData }
								saveFormData={ saveFormData } />
                          <Agenda
                agendas={ agendas }
                updateAgendasData={ updateAgendasData }
                saveFormData={ saveFormData }
                addAgenda={ addAgenda }
                removeAgenda={ removeAgenda } />
                      </div>
                      <MeetingAgendaPreview
              className="col-7 sm-12"
              club={ club }
              excom={ excom }
              meeting={ meeting }
              agendas={ agendas } />
                  </Row>
              </Container>
          </Main>
      </div>
  );
}
App.propTypes = {
  saveFormData: PropTypes.func,
}

export default App;
