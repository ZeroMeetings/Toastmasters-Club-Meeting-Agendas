import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import logo from '../toastmasters-logo.png';
import { dateConvert, timeConvert } from '../helpers';

import {
    AgendaLivePreview,
    ClubName,
    AgendaHeader,
    TMILogo,
    AgendaSideBar,
    Agendas,
    AgendaItem,
    AgendaItemTitle,
    AgendaItemContent,
    Ballots
} from '../style';

  const time = new Date().toLocaleTimeString('en-US', { hour12: false, hour: 'numeric', minute: 'numeric' });

  function MeetingAgendaPreview ({ className, club, excom, meeting, agendas }) {
    return (
        <AgendaLivePreview className={ `${ className } print-preview` }>
            <AgendaHeader>
                <hr className="border-header"></hr>
                <hr className="border-header-thin"></hr>
                <hr className="border-white"></hr>
                <hr className="border-light"></hr>

                <TMILogo>
                    <img src={ logo } className="App-logo" alt="logo" />
                </TMILogo>
            </AgendaHeader>
            <AgendaSideBar>
                <dl>
                    <dt>President</dt>
                    <dd>{excom.president || 'John Doe'}</dd>
                    <dt>VP Education</dt>
                    <dd>{excom.vPEducation || 'John Doe'}</dd>
                    <dt>VP Membership</dt>
                    <dd>{excom.vPMembership || 'John Doe'}</dd>
                    <dt>VP Public Relations</dt>
                    <dd>{excom.vPRelation || 'John Doe'}</dd>
                    <dt>Secretary</dt>
                    <dd>{excom.secretary || 'John Doe'}</dd>
                    <dt>Treasurer</dt>
                    <dd>{excom.treasurer || 'John Doe'}</dd>
                    <dt>Sergeant-At-Arms</dt>
                    <dd>{excom.sergeant || 'John Doe'}</dd>
                    { excom.pastpresident && <>
                        <dt>Past President</dt>
                        <dd>{excom.pastpresident || 'John Doe'}</dd>
                    </> }
                </dl>
                <p className="lead">{ meeting.meetingDetails ? `${ meeting.meetingDetails }` : <>We meet every <del>Day</del>day of the week <del>From</del>from 00:00 to 00:00</> }
                </p>
                <p className="lead">
                    <strong className="d-block">Club Mission</strong>
                    {club.clubMission || 'We provide a supportive and positive learning experience in which members are empowered to develop communication and leadership skills, resulting in greater self-confidence and personal growth.'}
                </p>
            </AgendaSideBar> 
            <Agendas>
                <ClubName>
                    <span className="d-block club-title">{club.clubName || 'Club Name'} {club.clubNumber || 'Club Number'}</span>
                    <small className="d-block">{dateConvert(meeting.meetingDate || new  Date()) }</small>
                    <p className="d-block club-meetingTheme">{meeting.meetingTheme || 'Club Meeting Theme'}</p>
                </ClubName>
                <div className="agendas-wrap">
                    { agendas.map(agenda => 
                        <AgendaItem className="agenda" key={ agenda.id }>
                            <AgendaItemTitle>
                                <time className="agenda-time">{timeConvert(agenda.startAt || time )}</time>
                                <h4 className="agenda-title">{agenda.title || 'Chair Calls Meeting to Order'}</h4>
                                <span className="agenda-TM">{agenda.toastmaster || 'John Doe'}</span>
                            </AgendaItemTitle>
                            <AgendaItemContent className="agenda-content">
                                <ReactMarkdown
                          source={ agenda.details }
                          escapeHtml={ false }
                        />
                            </AgendaItemContent>
                        </AgendaItem>
                )
              }
                </div>
            </Agendas>
            <Ballots className="print-block">
                <p><span>Better Table Topics Speaker</span></p>
                <p><span>Better Featured Speaker</span></p>
                <p><span>Better Evaluator</span></p>
            </Ballots>
        </AgendaLivePreview>
    )
  }

MeetingAgendaPreview.propTypes = {
  className: PropTypes.string,
  club: PropTypes.object,
  excom: PropTypes.object,
  meeting: PropTypes.object,
  agendas: PropTypes.array,
}

export default MeetingAgendaPreview
