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
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import { ToastAlert } from "../../utils/toast";
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";

const Login = () => {
  const navigate = useNavigate();

  const [passwordShow, setPasswordShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = (event) => {
    event.preventDefault();

    if (!email || !password) {
      console.log("required field are missing");
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const userID = userCredential.user.uid;
        // console.log(userID, "user")

        // get data 
        const userData = await getDoc(doc(db, "users", userID))
        console.log(userData.data(), "userData")
        
        localStorage.setItem("uid", userID);
        localStorage.setItem("user", JSON.stringify(userData.data()));
        ToastAlert("user login", "success");
        if (userData.type == "admin") {
          navigate("/dashboard");
        } else {
          navigate("/portal");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        ToastAlert(errorCode, "error");
      });
  };
  return (
    <Box className={styles.loginWrapper}>
      <Box sx={{ textAlign: "center" }} className={styles.loginForm}>
        <h1>LOGIN</h1>

        <Divider sx={{ mt: "10px" }} />

        <Box component={"form"} mt={"80px"} onSubmit={loginHandler}>
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
                Forget password
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
            LOGIN
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
