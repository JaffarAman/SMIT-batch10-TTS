import React, { useState } from "react";
import styles from "./style.module.css";
import {
  Box,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import { ToastAlert } from "../../utils/toast";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

const Signup = () => {
  const navigate = useNavigate();

  const [passwordShow, setPasswordShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signupHandler = (event) => {
    event.preventDefault();
    console.log("login form");
    if (!email || !password) {
      console.log("required field are missing");
      return;
    }


    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user.uid, "user");
        const obj = {
          name: "Super Admin",
          email,
          password,
          type: "admin"  //admin | std
        }

        const createUser = await setDoc(doc(db, "users", user.uid), obj)


        console.log("createUser", createUser)


        // ToastAlert("Successfully signup", "success");
        // navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        ToastAlert(errorCode, "error");
        // ..
      });

    console.log("email,password", email, password);
  };
  return (
    <Box className={styles.loginWrapper}>
      <Box sx={{ textAlign: "center" }} className={styles.loginForm}>
        <h1>Signup</h1>

        <Divider sx={{ mt: "10px" }} />

        <Box component={"form"} mt={"80px"} onSubmit={signupHandler}>
          <TextField
            label="Email Address"
            variant="outlined"
            fullWidth
            onChange={(e) => setEmail(e.target.value)}
          // className={styles.inputField}
          />

          <TextField
            type={passwordShow ? "text" : "password"}
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
            variant="outlined"
            fullWidth
            sx={{
              mt: "20px",
            }}
            helperText={
              <Typography
                textAlign={"right"}
                color={"black"}
                sx={{ cursor: "pointer" }}
              >
                Already Account?
              </Typography>
            }
            InputProps={{
              endAdornment: (
                <InputAdornment
                  position="end"
                  onClick={() => setPasswordShow(!passwordShow)}
                >
                  {!passwordShow ? <VisibilityOff /> : <Visibility />}
                </InputAdornment>
              ),
            }}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: "50px" }}
          >
            SIGNUP
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
