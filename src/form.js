import React from "react";
import "./form.css"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

class FormSelect extends React.Component {
  render (){
    return (
      <>
    <Form onSubmit={this.props.filterHorns}>
    <Form.Group controlId="selectHorns"  >

      <Form.Label>
      Show # of horns
      </Form.Label>
      <Form.Select name="select" onChange={this.props.select}>
        <option value="all">All</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4+</option>
      </Form.Select>
    <Button type="submit">Submit</Button>
    </Form.Group>
  </Form>
  </>
)

  }



}

export default FormSelect;