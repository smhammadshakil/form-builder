import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClone, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import EditElementProps from './EditElementProps'
class Icons extends React.Component {
  render() {
	  const { element, updateElement, duplicate, index } = this.props
		return (
			<div className="wrapperIcons">
				<FontAwesomeIcon className="icons" onClick={() => duplicate(element, index)} icon={faClone} />
				<EditElementProps index={index} updateElement={updateElement} element={element}/>
				<FontAwesomeIcon className="icons" onClick={() => this.props.delete(element)} icon={faTrashAlt} />
			</div>
		)
	}
}

export default Icons;