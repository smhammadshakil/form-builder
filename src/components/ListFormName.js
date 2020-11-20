import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

class ListFormName extends React.Component {
    render () {
      return (
        <div>
          <Button
            className="createBtn"
						onClick={this.gotToCreateForm}
        	>
						<NavLink to="/create">
              <FontAwesomeIcon icon={faPlus} /> Create
						</NavLink>
        	</Button>
					<div className="listHeading">Forms</div>
					{
            this.props.forms.map((form, i) =>
              <div key={form.id} onClick={() => this.props.selectForm(i)} className={this.props.selectedFormId === form.id ? 'listFormSelected' : 'listForm'}>Form {i+1}</div>)
          }
        </div>
      );
    }
  }
  
  export default ListFormName;