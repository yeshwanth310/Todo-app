import React, { useState } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [tasklist, setTaskList] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const AddTask = () => {
    if (task !== "") {
      const taskDetails = {
        id: Math.floor(Math.random() * 1000),
        value: task,
        isCompleted: false,
      };

      setTaskList([...tasklist, taskDetails]);
    }
  };

  const deletetask = (e, id) => {
    e.preventDefault();
    setTaskList(tasklist.filter((t) => t.id !== id));
  };

  const taskCompleted = (e, id) => {
    e.preventDefault();
    //let's find index of element
    const element = tasklist.findIndex((elem) => elem.id === id);

    //copy array into new variable
    const newTaskList = [...tasklist];

    //edit our element
    newTaskList[element] = {
      ...newTaskList[element],
      isCompleted: true,
    };

    setTaskList(newTaskList);
  };

  return (
    <div className="todo">
      <div className="wrapper">
        <h1
          style={{
            color: "white",
            textAlign: "center",
            borderBottom: "1px solid white",
            backgroundColor: "#ff878d",
          }}
        >
          Todo List <i class="fas fa-list-alt"></i>
        </h1>
        <div className="inputwrap">
          <input
            type="text"
            name="text"
            id="text"
            onChange={(e) => handleChange(e)}
            placeholder="Add task here..."
          />
          <button className="add-btn" onClick={AddTask}>
            Add
          </button>
        </div>
        <br />
        <div className="displaywrap">
          {tasklist !== [] ? (
            <ul className="ul">
              {tasklist.map((t) => (
                <li className={t.isCompleted ? "crossText" : "listitem"}>
                  {t.value}

                  <button
                    className="completed"
                    style={{ float: "right" }}
                    onClick={(e) => taskCompleted(e, t.id)}
                  >
                    Completed
                  </button>

                  <button
                    className="delete"
                    style={{ float: "right" }}
                    onClick={(e) => deletetask(e, t.id)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Todo;
