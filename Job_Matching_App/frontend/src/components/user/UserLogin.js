import React from "react";
import classes from "./UserLogin.module.css";
import { TextField, Button, Link, Tooltip } from "@mui/material";
import { useState } from "react";
import { useTheme } from "../layout/ThemeContext";
import JobListingsSlider from '../layout/JobListingsSlider'

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const { theme } = useTheme();

  const themeStyle = theme === "light" ? classes.light : classes.dark;

  const handleSubmit = (event) => {
    event.preventDefault();

    setEmailError(false);
    setPasswordError(false);

    if (email === "") {
      setEmailError(true);
    }
    if (password === "") {
      setPasswordError(true);
    }

    if (email && password) {
      console.log(email, password);
    }
  };

  return (
    <React.Fragment>
      <section className={`${classes.user} ${themeStyle}`}>
        <h2 style={{ color: theme === "light" ? "#273746" : "#03DAC5" }}>
          We missed you :/
        </h2>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            InputLabelProps={{
              style: { color: "#808B96" },
            }}
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
            variant="outlined"
            type="email"
            fullWidth
            value={email}
            error={emailError}
            sx={{
              marginBottom: 3,
              "& label": { color: theme === "light" ? "#808B96" : "white" },
              "& .MuiInputBase-input": {
                color: theme === "light" ? "black" : "white",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: theme === "light" ? "grey" : "#808B96",
                },
                "&:hover fieldset": {
                  borderColor: theme === "light" ? "#808B96" : "#808B96",
                },
                "&.Mui-focused fieldset": {
                  borderColor: theme === "light" ? "#808B96" : "#808B96",
                },
              },
            }}
          />
          <TextField
            InputLabelProps={{
              style: { color: "#808B96" },
            }}
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
            variant="outlined"
            type="password"
            value={password}
            error={passwordError}
            fullWidth
            sx={{
              marginBottom: 3,
              "& label": { color: theme === "light" ? "#808B96" : "white" },
              "& .MuiInputBase-input": {
                color: theme === "light" ? "black" : "white",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: theme === "light" ? "grey" : "#808B96",
                },
                "&:hover fieldset": {
                  borderColor: theme === "light" ? "#808B96" : "#808B96",
                },
                "&.Mui-focused fieldset": {
                  borderColor: theme === "light" ? "#808B96" : "#808B96",
                },
              },
            }}
          />
          <Tooltip title="Login" placement="right" arrow>
            <Button
              sx={{
                borderRadius: 30,
                color: theme === "light" ? "white" : "black",
                backgroundColor: theme === "light" ? "#808B96" : "#03DAC5",
                transform: "translateY(-8px)",
              }}
              variant="contained"
              type="submit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="0.75"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-log-in"
              >
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                <polyline points="10 17 15 12 10 7" />
                <line x1="15" x2="3" y1="12" y2="12" />
              </svg>
            </Button>
          </Tooltip>
        </form>
        <small
          style={{
            color: theme === "light" ? "#273746" : "#03DAC5",
            fontFamily: "'Roboto', sans-serif",
          }}
        >
          Need an account?{" "}
          <Link
            href="/signup"
            underline="hover"
            style={{
              color: theme === "light" ? "#273746" : "#03DAC5",
              fontFamily: "'Roboto', sans-serif",
            }}
          >
            Register Here
          </Link>
        </small>
      </section>
      <JobListingsSlider/>
    </React.Fragment>
  );
};

export default UserLogin;
