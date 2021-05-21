import React, { useState } from "react";
/* import "./App.css"; */
import { connect } from "react-redux";
import { addTask, removeTask, doneTask } from "../actions";

const App = (props) => {
  const [task, setTask] = useState("");

  const createTask = (e) => {
    setTask(e.target.value);
  };

  return (
    <React.Fragment>
      <h1>todoリスト</h1>
      <input value={task} onChange={createTask} />
      <button onClick={() => props.addTask(task)}>追加</button>
      <ul>
        {props.lists.map((list, index) => (
          <li key={index}>
            {list.done ? <del>{list.task}</del> : list.task}
            <button onClick={() => props.doneTask(index)}>完了</button>
            <button onClick={() => props.removeTask(index)}>削除</button>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  lists: state.counter.lists,
});

const mapDispatchToProps = (dispatch) => ({
  addTask: (task) => dispatch(addTask(task)),
  removeTask: (index) => dispatch(removeTask(index)),
  doneTask: (index) => dispatch(doneTask(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

/* class App extends React.Component {
  state = {
    task: "",
  };

  createTask(e) {
    this.setState({ task: e.target.value });
  }

  render() {
    const props = this.props;
    const task = this.state.task;
    return (
      <React.Fragment>
        <h1>todoリスト</h1>
        <input
          type="text"
          value={task}
          onChange={(e) => {
            this.createTask(e);
          }}
        />
        <button onClick={() => props.addTask(task)}>追加</button>
        <ul>
          {props.lists.map((list, index) => (
            <li key={index}>
              {list.task}
              <button onClick={() => props.doneTask(index)}>完了</button>
              <button onClick={() => props.removeTask(index)}>削除</button>
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
} */
