import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsAlt } from '@fortawesome/free-solid-svg-icons'
import FormBuilderComponent from './FormBuilderComponent'
import FormModal from './FormModal'

import { saveFormAction } from '../actions'
import { inputText, inputPassword, inputFile, textArea, submitButton, divider } from '../constants'

class CreateForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			json: [],
			editElement: null
		}
	}
	clearForm = () => {
		this.setState({
			json: []
		})
    }
    saveForm = () => {
        this.props.saveForm(this.state.json)
        this.setState({
			json: []
		})
    }
	addElement = (ele) => {
		const { json } = this.state
		ele.id = Math.random()
		json.push(ele)
		this.setState({json})
	}
	updateElement = (ele, index) => {
        const { json } = this.state
        if (json[index].hasOwnProperty('label')) {
            json[index].label = ele.label
        }
        if (json[index].hasOwnProperty('placeholder')) {
            json[index].placeholder = ele.placeholder
        }
		this.setState({json})
	}
	duplicate = (ele, index) => {
		const { json } = this.state
		const element = {
			...ele,
			id: Math.random()
		}
		json.splice(index + 1, 0, element)
		this.setState({json})
	}
	
	deleteElement = (element) => {
		let { json } = this.state
		json = json.filter(ele => ele.id !== element.id)
		this.setState({json})
	}
	onDrag = (event, element) => {
		event.preventDefault();
		this.setState({
			editElement: element
		});
	}
	onDragOnBtn = (event, element) => {
		event.preventDefault();
		const { json } = this.state
		element.id = Math.random()
		json.push(element)
		this.setState({
			json,
			editElement: element
		})
	}
	onDragOver = (event) => {
		event.preventDefault();
	}
	onDrop = (event) => {
		const { editElement, json } = this.state;
		const elements = Array.from(document.getElementsByClassName('elementWrapper'))
		const allYAxis = []
		elements.forEach(ele => {
			allYAxis.push(ele.getBoundingClientRect().top)
		})
		const closest = allYAxis.reduce((prev, curr) => {
			return (Math.abs(curr - event.clientY) < Math.abs(prev - event.clientY) ? curr : prev);
		});
		const index = allYAxis.indexOf(closest)
		let newJson = json.filter(ele => ele.id !== editElement.id)
		newJson.splice(index, 0 , editElement)
		this.setState({
			editElement: null,
			json: newJson
		});
	}
	render () {
		return (
			<Container fluid className="createForm">
				<Row>
					<Col lg={2} className="leftCol">
						<div>
                            <FormModal json={this.state.json} />
							<div className="listHeading">Form Component</div>
							<ButtonGroup vertical>
								<Button
                                    className="eleBtn"
                                    draggable
                                    onDragOver={(event => this.onDragOver(event))}
                                    onDragEnd={(event) => this.onDragOnBtn(event, { ...inputText })}>
                                    <FontAwesomeIcon className="icons" icon={faArrowsAlt} />
                                        Text
                                </Button>
								<Button
                                    className="eleBtn"
                                    draggable
                                    onDragOver={(event => this.onDragOver(event))}
                                    onDragEnd={(event) => this.onDragOnBtn(event, { ...inputPassword })}>
                                    <FontAwesomeIcon className="icons" icon={faArrowsAlt} />
                                        Password
                                </Button>
								<Button
                                    className="eleBtn"
                                    draggable
                                    onDragOver={(event => this.onDragOver(event))}
                                    onDragEnd={(event) => this.onDragOnBtn(event, { ...textArea })}>
                                    <FontAwesomeIcon className="icons" icon={faArrowsAlt} />
                                        Textarea
                                </Button>
								<Button
                                    className="eleBtn"
                                    draggable
                                    onDragOver={(event => this.onDragOver(event))}
                                    onDragEnd={(event) => this.onDragOnBtn(event, { ...submitButton })}>
                                    <FontAwesomeIcon className="icons" icon={faArrowsAlt} />
                                        Submit
                                </Button>
								<Button
                                    className="eleBtn"
                                    draggable
                                    onDragOver={(event => this.onDragOver(event))}
                                    onDragEnd={(event) => this.onDragOnBtn(event, { ...inputFile })}>
                                    <FontAwesomeIcon className="icons" icon={faArrowsAlt} />
                                        Upload
                                </Button>
                                <Button
                                    className="eleBtn"
                                    draggable
                                    onDragOver={(event => this.onDragOver(event))}
                                    onDragEnd={(event) => this.onDragOnBtn(event, { ...divider })}>
                                    <FontAwesomeIcon className="icons" icon={faArrowsAlt} />
                                        Divider
                                </Button>
							</ButtonGroup>
						</div>
					</Col>
					<Col lg={10}>
						<div className="formContainer" id="formWrapper">
							<FormBuilderComponent
								json={this.state.json}
								onDrag={this.onDrag}
                                onDragOver={this.onDragOver}
                                updateElement={this.updateElement}
								onDrop={this.onDrop}
								deleteElement={this.deleteElement}
								duplicate={this.duplicate}
							/>
						</div>
						<div>
							<Button className="saveBtn" onClick={this.saveForm}>Save</Button>
							<Button className="clearBtn" onClick={this.clearForm}>Clear</Button>
						</div>
					</Col>
				</Row>
		</Container>
		);
	}
}

const mapDispatchToProps = dispatch => {
    return {
        saveForm: (json) => dispatch(saveFormAction(json))
    }
}

export default connect(null, mapDispatchToProps)(CreateForm);