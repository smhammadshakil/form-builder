import React from 'react';
import { Form } from 'react-bootstrap';
import Element from './Element'
class FormBuilderComponent extends React.Component {
    render () {
      return (
        <div className="formBuilder">
			<Form>
				<div>Drag & Create</div>
				{this.props.json && this.props.json.length ? this.props.json.map((ele, i) =>
					<Element
						ele={ele}
						index={i}
						key={ele.id}
						{...this.props}
					/>
				) : <div></div>}
			</Form>
		</div>
      );
    }
  }
  
  export default FormBuilderComponent;