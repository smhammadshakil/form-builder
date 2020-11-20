import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import ListFormName from './ListFormName'
import FormUI from './FormUI';

class Dashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedForm: props.allForms.length ? props.allForms[0] : {},
			selectedFormId: props.allForms.length ? props.allForms[0].id : null
		}
	}
	selectForm = (index) => {
		this.setState({
			selectedForm: this.props.allForms[index],
			selectedFormId: this.props.allForms[index].id
		})
	}
	render() {
		return (
			<Container fluid>
				<Row>
					<Col lg={2} className="leftCol">
						<ListFormName selectForm={this.selectForm} selectedFormId={this.state.selectedFormId} forms={this.props.allForms} />
					</Col>
					<Col lg={10}>
						<FormUI
                            form={this.state.selectedForm || {}}
                        />
					</Col>
				</Row>
			</Container>
		);
	}
}

export default connect((state) => ({ allForms: state.formReducer }), null)(Dashboard);
