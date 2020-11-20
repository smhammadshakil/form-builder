import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons'
import FormUI from './FormUI';

class FormModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }
    handleClose = () => {
        this.setState({ show: false })
    }
    
    handleOpen = () => {
        this.setState({ show: true })
    }

    render() {
        return (
            <>
                <Button onClick={this.handleOpen} className="validateBtn"><FontAwesomeIcon icon={faSyncAlt} /> Validate</Button>
                <Modal
                    dialogClassName="modalSize"
                    show={this.state.show}
                    onHide={this.handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                <Modal.Header closeButton>
                    <Modal.Title>Preview</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <FormUI
                            form={{ json: this.props.json }}
                        />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary">Submit</Button>
                </Modal.Footer>
                </Modal>
            </>
          );
    }
}

export default FormModal