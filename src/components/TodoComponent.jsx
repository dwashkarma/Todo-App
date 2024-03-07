import React, { useState } from "react";
import ButtonCom from "../shared/Button";

import { Typography } from "@mui/material";
import Text from "../shared/Typography";
import TodoCard from "./TodoCard";
import INput from "../shared/INput";

function TodoComponent() {
  const [newTodo, setNewTodo] = useState({
    title: "",
    description: "",
    isComplete: false,
  });
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    setNewTodo((t) => ({
      ...t,
      [e.target.name]: e.target.value,
    }));
  };
  // console.log(newTodo);

  const handleSubmit = (e) => {
    // e.preventDefault();
    setData((prev) => [...prev, newTodo]);
    setNewTodo({ title: "", description: "", isComplete: false });
  };

  const handleEdit = (index) => {
    console.log(data[index]);
    setNewTodo(data[index])
  };
  const handleDelete = (index) => {
    setData((prev) => prev.filter((_, i) => i !== index));
  };
  // console.log("Data", data);
  return (
    <div className="text-center grid justify-center mt-2">
      <Typography variant="h3" sx={{ color: "green", m: 5, fontWeight: 700 }}>
        Todo App
      </Typography>

      {/* form */}
      <div className="flex gap-6">
        <div className="flex justify-center ">
          <div className=" rounded-xl shadow-2xl  p-8 h-fit  w-[37rem]">
            <h1 className="text-start text-lg font-semibold">Todo Form</h1>
            <div className="mb-5">
              <form>
                <div className="m-2">
                  <Text text={"Title"}></Text>
                  <br />

                  <INput
                    type={"text"}
                    name={"title"}
                    value={newTodo.title}
                    handleChange={handleChange}
                  />
                </div>

                <div className="m-2">
                  <Text text={"Description"}></Text>
                  <br />
                  <INput
                    type={"text"}
                    name={"description"}
                    value={newTodo.description}
                    handleChange={handleChange}
                  />
                </div>

                <div className="flex">
                  <Text text={"Complete"}></Text>
                  <input
                    className="p-6 ml-5"
                    onChange={(e) =>
                      setNewTodo({ ...newTodo, isComplete: e.target.checked })
                    }
                    checked={newTodo.isComplete}
                    type="checkbox"
                  />
                </div>
              </form>
            </div>

            <ButtonCom name="Submit" handleClick={handleSubmit} />
          </div>
        </div>

        {/* List of Todo */}
        <TodoCard
          data={data}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default TodoComponent;
