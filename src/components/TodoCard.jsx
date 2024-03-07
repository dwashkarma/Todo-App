import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ButtonCom from "../shared/Button";
import DeleteIcon from "@mui/icons-material/Delete";
export default function TodoCard({ data, handleDelete, handleEdit }) {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  // console.log("Todo", data);
  return (
    <div className="flex justify-center ">
      <TableContainer>
        <Table sx={{ minWidth: 600 }} aria-label="customized table">
          <TableHead sx={{ minWidth: 600 }}>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell align="left">Todo</StyledTableCell>
              <StyledTableCell align="left">Description</StyledTableCell>
              <StyledTableCell align="left">Completed</StyledTableCell>
              <StyledTableCell align="left">Functions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data || Array.isArray(data) ? (
              <>
                {data.map((item, index) => (
                  <StyledTableRow key={index}>
                    <StyledTableCell component="th" scope="row">
                      {index + 1}
                    </StyledTableCell>
                    <StyledTableCell align="left">{item.title}</StyledTableCell>
                    <StyledTableCell align="left">
                      {item.description}
                    </StyledTableCell>
                    <StyledTableCell
                      sx={{ color: item.isComplete ? "green" : "red" }}
                      align="left"
                    >
                      {item.isComplete ? "Completed" : "Not Completed"}
                    </StyledTableCell>
                    <StyledTableCell>
                      <div className="flex gap-5">
                        <ButtonCom
                          name={"Del"}
                          color={"error"}
                          handleClick={() => handleDelete(index)}
                        >
                          <DeleteIcon />
                        </ButtonCom>
                        <ButtonCom
                          name={"Edit"}
                          color={"success"}
                          handleClick={() => handleEdit(index)}
                        />
                      </div>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </>
            ) : (
              <p>No data</p>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
