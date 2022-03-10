import { Box, Paper, Typography, TextField } from "@mui/material";
import { useParams } from "remix";
import { useGuest } from "~/hooks";
import { backgroundStyle, imageStyles } from "~/styles";
import moment from "moment";
import AdapterMoment from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StaticDatePicker from "@mui/lab/StaticDatePicker";

const SHARED_MESSAGE: string[] = [
  "I'd like to invite you a couple hours on March 26th to Trout Lake Park, at 1:00PM,",
  "We are planning to be there if the weather is ok until 6-7PM",
  "Feel free to bring your own drinks/candies and a chair",
];

export default function GuestIdView() {
  const { id } = useParams<{ id: string }>();
  const { name, url_dog, code, description } = useGuest(id ?? "");

  if (!name) return null;

  return (
    <>
      <Box style={backgroundStyle} />
      <Box p={2}>
        <Typography variant="h1" fontWeight="800" gutterBottom>
          Hi {name}!
        </Typography>
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="space-around"
          mb={4}
        >
          <Paper
            style={{
              display: "flex",
              alignItems: "center",
              padding: 8,
            }}
          >
            <Typography variant="h3" fontWeight="500" gutterBottom>
              I have added a dog that I believe identifies you.
            </Typography>
          </Paper>
          <img src={url_dog} alt={code} style={imageStyles} />
        </Box>

        <Box>
          <Paper style={{ padding: 16 }}>
            {[description, ...SHARED_MESSAGE].map((text, idx) => (
              <Typography
                key={`text-${idx}-${code}`}
                variant="h4"
                fontWeight="800"
              >
                {text}
              </Typography>
            ))}
          </Paper>
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <StaticDatePicker
              disabled={true}
              orientation="landscape"
              openTo="day"
              value={moment("2022-03-26")}
              onChange={(e) => console.log(e)}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Box>
      </Box>
    </>
  );
}
