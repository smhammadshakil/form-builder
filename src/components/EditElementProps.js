import React from 'react'
import { Form, Modal, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'

class EditElementProps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            label: props.element.label,
            placeholder: props.element.placeholder
        }
    }
    handleClose = () => {
        this.setState({ show: false })
    }
    
    handleOpen = () => {
        this.setState({
            show: true,
            label: this.props.element.label,
            placeholder: this.props.element.placeholder
        })
    }
    labelChange = (e) => {
        this.setState({ label: e.target.value })
    }
    placeholderChange = (e) => {
        this.setState({ placeholder: e.target.value })
    }
    save = () => {
        const { element, index } = this.props
        const { label, placeholder } = this.state
        const newElement = {
            ...element,
            placeholder,
            label
        }
        this.props.updateElement(newElement, index)
        this.handleClose()
    }
    render() {
        const { element } = this.props
        const { label, placeholder } = this.state
        return (
            <>
                <FontAwesomeIcon className="icons" icon={faPencilAlt} onClick={this.handleOpen} />
                <Modal
                    show={this.state.show}
                    onHide={this.handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                <Modal.Header closeButton>
                    <Modal.Title>Edit</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        element.hasOwnProperty('label') ?
                            <Form.Group>
                                <Form.Label>Label</Form.Label>
                                <Form.Control type="text" placeholder="Enter value" onChange={this.labelChange} value={label} />
                            </Form.Group> :
                            null
                    }
                    {
                        element.hasOwnProperty('placeholder') ?
                            <Form.Group>
                                <Form.Label>Placeholder</Form.Label>
                                <Form.Control type="text" placeholder="Enter value" onChange={this.placeholderChange} value={placeholder} />
                            </Form.Group> :
                            null
                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={this.save}>Save</Button>
                </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default EditElementProps;