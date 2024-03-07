import { useState } from "react";
import INput from "../shared/INput";
import ButtonCom from "../shared/Button";
import { Typography } from "@mui/material";
import Text from "../shared/Typography";

export default function Form({ handleSubmit }) {
  const [newTodo, setNewTodo] = useState({
    title: "",
    description: "",
    isComplete: false,
  });

  const { isComplete } = newTodo;
  const handleChange = (e) => {
    console.log(e.target);
    setNewTodo((t) => ({ ...t, [e.target.name]: e.target.value }));
  };
  console.log(newTodo);

  // const data = { name: "Dwas", address: "ktm" };
  // console.log(data.name);
  // console.log(data["name"]);
  return (
    <div className="flex justify-center">
      <div className=" rounded-xl shadow-2xl p-8 h-fit  w-[37rem]">
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
                onClick={(e) => {
                  e.target;
                  setNewTodo({ ...newTodo, isComplete: !isComplete });
                }}
                type="checkbox"
              />
            </div>
          </form>
        </div>

        <ButtonCom name="Submit" handleClick={handleSubmit} />
      </div>
    </div>
  );
}
