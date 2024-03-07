import React from "react";
import Modal from "@mui/material/Modal";
import { Box, Fade } from "@mui/material";
import { useState } from "react";
import INput from "../shared/INput";
import ButtonCom from "../shared/Button";
import Text from "../shared/Typography";

function ModalCom({ open, Close }) {
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

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    borderRadius: "15px",
    bgcolor: "background.paper",
    // border: "1px solid #000",
    boxShadow: 24,
  };
  return (
    <div>
      <Modal open={open} onClose={Close}>
        <Fade in={open}>
          <Box sx={style}>
            <div className="flex justify-center">
              <div className=" rounded-xl shadow-2xl p-8   w-[37rem]">
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
                    <div>
                      <Text text={"Complete"}></Text>
                      <input
                        className="p-6"
                        onClick={(e) => {
                          e.target;
                          setNewTodo({ ...newTodo, isComplete: !isComplete });
                        }}
                        type="checkbox"
                      />
                    </div>
                  </form>
                </div>

                <ButtonCom name="Submit" />
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default ModalCom;
