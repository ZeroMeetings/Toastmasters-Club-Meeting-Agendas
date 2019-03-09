import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import localforage from 'localforage';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';

import CollapseAbleItem from './collapseExpand';
import AgendaPanelDetail from './agendaPanelDetail';

import TextField from './textfield';
import { Form, Row, Button, FormGroup, Label, Field } from '../style';

function Agenda ({ agendas, updateAgendasData, addAgenda, removeAgenda }) {

    const [ loading, setLoading ] = useState(false);
    const [ showButtons, setShowButtons ] = useState(false);

	const saveFormData = (e) => {
		setLoading(true);
        localforage.setItem('agendas', agendas).then((value) => {
			setTimeout(() => {
				setLoading(false)
			}, 1500)
		}).catch(function(err) { console.log(err) });
		e.preventDefault();
    }
    const handleScroll = (e) => {
        const lastScrollY = e.target.scrollTop + e.target.offsetHeight;
        const agendaFormPostionY = document.getElementById('agnd-form').offsetTop;
        if (lastScrollY > agendaFormPostionY) {
            setShowButtons(true)
        } else {
            setShowButtons(false)
        }
    
    }

    const time = new Date().toLocaleTimeString('en-US', { hour12: false, hour: 'numeric', minute: 'numeric' });
    useEffect(() => {
        document.querySelector('.forms').addEventListener('scroll', handleScroll);
    })
    
    return (
        <Form id="agnd-form" className="form-agenda" autoComplete="off" onSubmit={ saveFormData }>
            <CollapseAbleItem legend="Meeting Agendas">
                { agendas.map((agenda)  =>
                    <div className="agenda-item-new" key={ agenda.id }>
                        <Row className="new-agenda">
                            <FormGroup className="col-3 sm-12">
                                <Label htmlFor={ `startAt_${ agenda.id }` }>Start at</Label>
                                <Field
                                    type="time"
                                    id={ `startAt_${ agenda.id }` }
                                    name="startAt"
                                    value={ agenda.startAt || time }
                                    step="900"
                                    onChange={ (e) => updateAgendasData(e, agenda.id) }
                                    placeholder="Time"
                                    required />
                            </FormGroup>
                            <FormGroup className="col sm-12">
                                <Label htmlFor={ `title_${ agenda.id }` }>Agenda Title
                                    { agenda.id !== 1 &&
                                    <small onClick={ (e) => removeAgenda(e, agenda.id) } className="remove">Remove agenda</small>
                                }

                                </Label>
                                <Field
                  type="text" id={ `title_${ agenda.id }` }
                  name="title"
                  value={ agenda.title }
                  placeholder={ `Agenda #${ agenda.id }` }
                  onChange={ (e) => updateAgendasData(e, agenda.id) }
                  required />
                            </FormGroup>
                        </Row>
                        <AgendaPanelDetail>
                            <TextField
                className="col-12 sm-12"
                label="Toastmaster &amp; Grade"
                id={ `toastmaster_${ agenda.id }` }
                name="toastmaster"
                value={ agenda.toastmaster }
                onChange={ (e) => updateAgendasData(e, agenda.id) }
                placeholder="Toastmaster name (CC, ALB)"
              />
                            <FormGroup className="col-12 sm-12">
                                <Label htmlFor={ `details_${ agenda.id }` }>Agenda Details</Label>
                                <SimpleMDE
                  id={ `details_${ agenda.id }` }
                  value={ agenda.details }
                  onChange={ (e) => updateAgendasData(e, agenda.id) }
                  options={ {
                    autofocus: true,
                    spellChecker: false,
                    toolbar: [ 'bold', 'italic', '|', 'quote' ],
                  } }
                />
                            </FormGroup>
                        </AgendaPanelDetail>
                    </div>)}
                { showButtons &&
                    <div className="buttons">
                        <Button type="submit">Save Agendas</Button>
                        {loading && <i className="fa fa-spinner fa-spin" />}
                        <Button className="btn-add" style={ { float: 'right' } } type="button" onClick={ addAgenda }>Add New Agenda</Button>
                    </div>
                    }
            </CollapseAbleItem>
        </Form>)
}

  Agenda.propTypes = {
    agendas: PropTypes.array,
    updateAgendasData: PropTypes.func,
    saveFormData: PropTypes.func,
    addAgenda: PropTypes.func,
    removeAgenda: PropTypes.func,
    loading: PropTypes.bool,
  }

  export default Agenda;
