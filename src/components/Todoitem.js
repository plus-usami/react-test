import React, {Component} from 'react';
import PropTypes from 'prop-types';


export class Todoitem extends Component {
  getStyle = () => {
    return {
      backgroundColor:"#f4f4f4",
      textDecoration: this.props.todo.completed ?
      "line-through" : "none",
      padding:'10px',
      borderBottom:"1px #ccc dotted"
    }
  }

  render() {
    const { id, title } = this.props.todo;

    return (
      <div style={this.getStyle()}>
      <p>
        <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
        {title}
        <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}>x</button>
      </p>
      </div>
    )
  }
}

Todoitem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func,
  delTodo:PropTypes.func
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default Todoitem;
