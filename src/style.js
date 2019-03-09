import styled from 'styled-components';

/**
 * Global Component - Grid
 * .container
 * .row
 */
export const Main = styled.main``;
export const Container = styled.div.attrs({ className: 'container' })``;
export const Row = styled.div.attrs({ className: 'row' })``;
export const Form = styled.form``;
export const AgendaLivePreview = styled.section``;
export const AgendaSideBar = styled.aside``;
export const Badge = styled.span.attrs({ className: 'badge' })``;

/**
 * Global form elements
 * .form-group
 * .label
 * .form-item
 */
export const Button = styled.button.attrs({ className: 'btn' })``;
export const FormGroup = styled.div.attrs({ className: 'form-group' })``;
export const Label = styled.label.attrs({ className: 'label' })``;
export const Field = styled.input.attrs({ className: 'form-item' })``;
export const Textarea = styled.textarea.attrs({ className: 'form-item' })``;
export const BlockTitle = styled.h4.attrs({ className: 'block-title' })``;
export const ClubName = styled.div.attrs({ className: 'club-name' })``;
export const CollapseExpand = styled.small``;

/**
 * Agenda Previw Styles
 */

export const AgendaHeader = styled.header.attrs({ className: 'agenda-header' })``;
export const TMILogo = styled.div.attrs({ className: 'tm-logo' })``;

export const Agendas = styled.div.attrs({ className: 'preview' })`
    height: 100%;
`;
export const AgendaItem = styled.article`
    font-size: .875rem;
`;
export const AgendaItemTitle = styled.header`
    display: flex;
    margin-bottom: 0;
`;
export const AgendaItemContent = styled.div``;
export const Ballots = styled.div.attrs({ className: 'ballots' })``;
