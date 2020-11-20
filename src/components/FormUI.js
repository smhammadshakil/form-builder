import React from 'react';
import { Form } from 'react-bootstrap';
import ElementUI from './ElementUI'
class FormUI extends React.Component {
    render () {
      return (
        <div className="formUI">
			<Form>
				{
					this.props.form && this.props.form.json && this.props.form.json.length ? this.props.form.json.map((ele) =>
						<ElementUI
							ele={ele}
							key={ele.id}
						/>
					) :
					<div>Nothing to Show</div>
				}
			</Form>
		</div>
      );
    }
  }
  
  export default FormUI;