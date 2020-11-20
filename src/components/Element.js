import React from 'react'
import { Form, Button } from 'react-bootstrap'
import Icons from './Icons'

class Element extends React.Component {
	render () {
	const { ele, deleteElement, duplicate, index, updateElement } = this.props
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
	return <div 
		className="elementWrapper"
		key={ele.id}
		id={ele.id}
		draggable
		onDrag={(event) => this.props.onDrag(event, ele)}
		onDragOver={(event => this.props.onDragOver(event))}
		onDrop={event => this.props.onDrop(event)}>
			<Icons element={ele} delete={deleteElement} duplicate={duplicate} updateElement={updateElement} index={index}/>
			{ element }
	</div>
}
}
export default Element;