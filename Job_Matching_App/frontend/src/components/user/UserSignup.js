import React from "react";
import classes from "./UserSignup.module.css";
import {
  TextField,
  Button,
  Container,
  Link,
  Stack,
  MenuItem,
  FormControl,
  Typography,
  Tooltip,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useState } from "react";
import { getCode, getNames } from "country-list";
import { useTheme } from "../layout/ThemeContext";

const UserSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("US");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [stateName, setStateName] = useState("");
  const { theme } = useTheme();

  const themeStyle = theme === "light" ? classes.light : classes.dark;

  const countryNames = getNames();
  const countries = countryNames.map((name) => ({
    label: name,
    value: getCode(name),
  }));

  // now you can use `phoneValidation.isValid` to check if phone is valid

  function handleSubmit(event) {
    event.preventDefault();
    console.log(firstName, lastName, email, selectedDate, password, phone);
  }

  return (
    <section className={`${classes.user} ${themeStyle}`}>
      <h2 style={{ color: theme === "light" ? "#273746" : "#03DAC5" }}>
        Let's find a job match for you!
      </h2>
      <form onSubmit={handleSubmit} action={<Link to="/login" />}>
        <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
          <TextField
            InputLabelProps={{
              style: { color: "#808B96" },
            }}
            type="text"
            variant="outlined"
            label="First Name"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            fullWidth
            required
            sx={{
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
            type="text"
            variant="outlined"
            label="Last Name"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            fullWidth
            required
            sx={{
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
        </Stack>
        <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
          <TextField
            InputLabelProps={{
              style: { color: "#808B96" },
            }}
            type="email"
            variant="outlined"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            sx={{
              width: "50%",
              marginBottom: 4,
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
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Date of Birth"
              value={selectedDate}
              onChange={(newValue) => {
                setSelectedDate(newValue);
              }}
              slotProps={{
                textField: {
                  sx: {
                    width: "50%",
                    "& .MuiInputLabel-root": {
                      color: theme === "light" ? "#808B96" : "#808B96",
                    },
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
                  },
                },
              }}
            />
          </LocalizationProvider>
        </Stack>
        <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
          <TextField
            InputLabelProps={{
              style: { color: "#808B96" },
            }}
            label="Address 1"
            value={address1}
            onChange={(e) => setAddress1(e.target.value)}
            fullWidth
            required
            margin="normal"
            sx={{
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
            label="Address 2"
            value={address2}
            onChange={(e) => setAddress2(e.target.value)}
            fullWidth
            required
            margin="normal"
            sx={{
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
        </Stack>
        <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
          <TextField
            InputLabelProps={{
              style: { color: "#808B96" },
            }}
            label="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            fullWidth
            margin="normal"
            sx={{
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
            select
            label="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
              style: { color: "#808B96" },
            }}
            style={{ textAlign: "left" }}
            sx={{
              "& label": { color: theme === "light" ? "#808B96" : "#808B96" },
              "& .MuiInputBase-input": {
                color: theme === "light" ? "black" : "#808B96",
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
          >
            {countries.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Stack>
        <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
          <TextField
            InputLabelProps={{
              style: { color: "#808B96" },
            }}
            label="State"
            value={stateName}
            onChange={(e) => setStateName(e.target.value)}
            fullWidth
            margin="normal"
            sx={{
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
            label="Zip Code"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            fullWidth
            margin="normal"
            sx={{
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
        </Stack>
        <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
          <TextField
            InputLabelProps={{
              style: { color: "#808B96" },
            }}
            type="password"
            variant="outlined"
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            fullWidth
            sx={{
              marginBottom: 4,
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
            type="password"
            variant="outlined"
            label="Renter Password"
            onChange={(e) => setRepassword(e.target.value)}
            value={repassword}
            required
            fullWidth
            sx={{
              marginBottom: 4,
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
        </Stack>
        <Tooltip title="Register" placement="right" arrow>
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
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-user-round-plus"
            >
              <path d="M2 21a8 8 0 0 1 13.292-6" />
              <circle cx="10" cy="8" r="5" />
              <path d="M19 16v6" />
              <path d="M22 19h-6" />
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
        Already have an account?{" "}
        <Link
          href="/login"
          underline="hover"
          style={{
            color: theme === "light" ? "#273746" : "#03DAC5",
            fontFamily: "'Roboto', sans-serif",
          }}
        >
          Login Here
        </Link>
      </small>
    </section>
  );
};

export default UserSignup;
