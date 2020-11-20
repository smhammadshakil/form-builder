import React from 'react'
import { Form, Button } from 'react-bootstrap'

export class Element extends React.Component {
	render () {
	const { ele } = this.props
	let element = null
	switch (ele.field) {
		case 'input':
			switch (ele.type) {
				case 'text':
					element = <Form.Group>
							<Form.Label>{ele.label}</Form.Label>
							<Form.Control type={ele.type} placeholder={ele.placeholder} />
						</Form.Group>
					break
				case 'password':
					element = <Form.Group>
							<Form.Label>{ele.label}</Form.Label>
							<Form.Control type={ele.type} placeholder={ele.placeholder} />
						</Form.Group>
					break
				case 'file':
					element = <Form.File
							id="custom-file"
						/>
					break
				case 'submit':
					element = <Button variant="primary" type="submit">
							{ele.label}
						</Button>
					break
				default: 
					element = null
			}
			break
		case 'textarea':
			element = <Form.Group>
					<Form.Label>{ele.label}</Form.Label>
					<Form.Control as="textarea" placeholder={ele.placeholder} rows={3} />
				</Form.Group>
			break
		case 'hr':
			element = <hr />
			break
		default: 
			element = null
	}
	return <div>
		{ element }
	</div>
}
}
export default Element;