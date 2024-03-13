import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { AdminLayout, InputField } from "../../components";
import { Box, Button, Container, Divider, Grid } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});


const Dashboard = () => {
  const [todoValue, setTodoValue] = useState("");
  const [todoCollection, setTodoCollection] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const addTodo = async () => {
    try {
      const docRef = await addDoc(collection(db, "todos"), {
        value: todoValue,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  useEffect(() => {
    fetchData();
  }, [refresh]);

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "todos"));
    const tempArr = [];
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      console.log(doc.data());
      tempArr.push({
        id: doc.id,
        todo: doc.data(),
      });
    });

    setTodoCollection([...tempArr]);
  };

  console.log("todoCollection", todoCollection);
  const deletTodo = async (id) => {
    try {
      await deleteDoc(doc(db, "todos", id));
      setRefresh(!refresh);
      console.log("delete ");
    } catch (error) {
      console.log("error", error.message);
    }
  };
  return (
    // <div>
    //   <input
    //     onChange={(e) => setTodoValue(e.target.value)}
    //     type="text"
    //     placeholder="Enter Todo"
    //   />
    //   <button onClick={addTodo}>ADD</button>
    //   {/* <button>Delete</button> */}

    //   {todoCollection?.map((obj, index) => {
    //     return (
    //       <p key={obj.id}>
    //         {" "}
    //         {index + 1} {obj.todo.value}{" "}
    //         <button onClick={() => deletTodo(obj.id)}>Del</button>
    //       </p>
    //     );
    //   })}
    // </div>

    <>
      <AdminLayout>
        <h1>Add Student</h1>
        <Divider />

        {/* <Container> */}
        <Grid container mt={2} columnSpacing={5} rowSpacing={5} >
          <Grid item sm={6} >
            <InputField label="Full Name" />
          </Grid>
          <Grid item sm={6} >
            <InputField label="Course Name" />
          </Grid>
          <Grid item sm={6} >
            <InputField label="Email" />
          </Grid>
          <Grid item sm={6} >
            <InputField label="Password" type="password" />
          </Grid>
          <Grid item sm={12} >
            {/* <InputField label="Password" /> */}
            {/* <input type="file" /> */}
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              Upload file
              <VisuallyHiddenInput type="file" />
            </Button>
          </Grid>

          <Grid item sm={12} >
            {/* <InputField label="Password" /> */}
            <Button sx={{ width: "100%" }} variant="contained" >ADD STUDENT</Button>
          </Grid>


        </Grid>
        {/* </Container> */}

      </AdminLayout >

      {/* <div>
      <h1></h1>
    </div> */}
    </>

  );
};

export default Dashboard;
