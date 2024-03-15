import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { auth, db } from "../../firebase";
import { AdminLayout, InputField } from "../../components";
import { Box, Button, Container, Divider, Grid } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import { ToastAlert } from "../../utils/toast";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { uploadFile } from "../../utils/uploadImage";

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

  // const addTodo = async () => {
  //   try {
  //     const docRef = await addDoc(collection(db, "todos"), {
  //       value: todoValue,
  //     });
  //     console.log("Document written with ID: ", docRef.id);
  //   } catch (e) {
  //     console.error("Error adding document: ", e);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, [refresh]);

  // const fetchData = async () => {
  //   const querySnapshot = await getDocs(collection(db, "todos"));
  //   const tempArr = [];
  //   querySnapshot.forEach((doc) => {
  //     console.log(`${doc.id} => ${doc.data()}`);
  //     console.log(doc.data());
  //     tempArr.push({
  //       id: doc.id,
  //       todo: doc.data(),
  //     });
  //   });

  //   setTodoCollection([...tempArr]);
  // };

  // console.log("todoCollection", todoCollection);
  // const deletTodo = async (id) => {
  //   try {
  //     await deleteDoc(doc(db, "todos", id));
  //     setRefresh(!refresh);
  //     console.log("delete ");
  //   } catch (error) {
  //     console.log("error", error.message);
  //   }
  // };

  const [fullname, setfullname] = useState("")
  const [course, setcourse] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [stdimage, setstdimage] = useState("")


  console.log("stdimage", stdimage)

  const handleAddStd = async () => {
    try {
      // console.log("handleAddStd",
      //   fullname,
      //   course,
      //   email,
      //   password,
      // )
      if (!fullname || !course || !email || !password) {
        ToastAlert("required fields are missing", "error")
        return
      }


      //AUTH
      const stdData = await createUserWithEmailAndPassword(auth, email, password)
      const userID = stdData.user.uid


      // Image 
      const imageURL = await uploadFile(stdimage)

      const obj = {
        email,
        name: fullname,
        type: "std",
        course,
        imageURL
      }

      await setDoc(doc(db, "users", userID), obj)
      ToastAlert("Std Created!", "success")


    } catch (error) {
      ToastAlert(error.code || error.message, "error")
    }


  }

  return (

    <>
      <AdminLayout>
        <h1>Add Student</h1>
        <Divider />

        {/* <Container> */}
        <Grid container mt={2} columnSpacing={5} rowSpacing={5} >
          <Grid item sm={6} >
            <InputField label="Full Name" onChange={(e) => setfullname(e.target.value)} />
          </Grid>
          <Grid item sm={6} >
            <InputField label="Course Name"
              onChange={(e) => setcourse(e.target.value)}
              value={course}
            />
          </Grid>
          <Grid item sm={6} >
            <InputField label="Email"
              onChange={(e) => setemail(e.target.value)} />
          </Grid>
          <Grid item sm={6} >
            <InputField label="Password" type="password" onChange={(e) => setpassword(e.target.value)} />
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
              <VisuallyHiddenInput type="file" onChange={(e) =>
                setstdimage(e.target.files[0])} />
            </Button>
          </Grid>

          <Grid item sm={12} >
            {/* <InputField label="Password" /> */}
            <Button onClick={handleAddStd} sx={{ width: "100%" }} variant="contained" >ADD STUDENT</Button>
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
