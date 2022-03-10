import { ReactElement, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Box,
  Button,
  useTheme,
  Card,
  TextField,
} from "@mui/material";
import { GridImages } from "../components";
import useSWR from "swr";
import { useGuest } from "~/hooks";

interface BoxContainerProps {
  children: ReactElement;
  justifyContent?: string;
}

const BoxContainer = ({
  children,
  justifyContent = "flex-start",
}: BoxContainerProps): ReactElement => {
  return (
    <Box
      margin={1}
      display="flex"
      alignItems="center"
      justifyContent={justifyContent}
    >
      {children}
    </Box>
  );
};

export default function Index() {
  const navigate = useNavigate();
  const [code, setCode] = useState<string>("");
  const { id } = useGuest(code);

  return (
    <Box display="flex" flexDirection="column">
      <Box
        style={{
          zIndex: 1,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <BoxContainer>
          <Card>
            <Box p={2}>
              <Typography variant="h3" fontWeight="500" gutterBottom>
                Hey! R u available on March 26th?
                <br />
                Please type your code above and get more information!
              </Typography>
            </Box>
          </Card>
        </BoxContainer>

        <BoxContainer>
          <Box display="flex" justifyContent="flex-end" width="100%">
            <Card
              style={{
                padding: 8,
                display: "flex",
                gap: 8,
                alignItems: "center",
              }}
            >
              <TextField
                id="outlined-basic"
                label="Code"
                variant="outlined"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
              <Button
                size="large"
                variant="outlined"
                disabled={!id}
                onClick={() => navigate(`/guest/${code}`)}
              >
                {id ? "You got it, click me!" : "Type your code"}
              </Button>
            </Card>
          </Box>
        </BoxContainer>
      </Box>

      <Box position="fixed">
        <Box position="relative">
          <GridImages />
          <Box
            position="absolute"
            style={{
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: "#00000038",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
