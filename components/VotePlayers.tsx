import { List, ListItem, Radio, RadioGroup, Sheet, Typography } from "@mui/joy";
import { Button } from "@mui/material";
import { useState } from "react";

interface Props {
  players: string[];
  name: string;
  setCurrIndex: (value: number | ((prevVar: number) => number)) => void;
  handleVote: (value1: string, value2: string) => void;
}

const VotePlayers = ({ players, name, setCurrIndex, handleVote }: Props) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [error, setError] = useState("");
  //console.log("voteplayers  : ", players);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div>
      <Sheet
        sx={{
          borderRadius: "0.5rem",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Typography level="h1" sx={{ m: 5 }}>
          {name} <span className="text-[1.4rem] font-medium"> is voting</span>
        </Typography>

        <RadioGroup
          aria-label="Your plan"
          name="people"
          defaultValue="Individual"
          className="w-[100%]"
        >
          <List
            sx={{
              "--List-gap": "0.5rem",
              "--ListItem-paddingY": "",
              "--ListItem-radius": "8px",
              "--ListItemDecorator-size": "32px",
            }}
          >
            {players.map((item) => (
              <ListItem variant="outlined" key={item} sx={{ boxShadow: "sm" }}>
                <Radio
                  overlay
                  value={item}
                  label={item}
                  onChange={handleChange}
                  checked={selectedValue === item}
                  sx={{ flexGrow: 1, flexDirection: "row-reverse" }}
                  slotProps={{
                    action: ({ checked }) => ({
                      sx: (theme) => ({
                        ...(checked && {
                          inset: -1,
                          border: "2px solid",
                          borderColor: theme.vars.palette.primary[500],
                        }),
                      }),
                    }),
                  }}
                />
              </ListItem>
            ))}
          </List>
        </RadioGroup>
        <p className={`text-[#D32F2F] mb-2 ${error ? "visible" : "invisible"}`}>
          {error}
        </p>
        <Button
          className=" text-white  hover:bg-[#18181B] mt-5 px-7"
          sx={{ backgroundColorcolor: "#18181B" }}
          size="medium"
          variant="contained"
          onClick={() => {
            if (selectedValue.length > 0) {
              setError("");
              handleVote(name, selectedValue);
              setCurrIndex((prev) => prev + 1);
              setSelectedValue("");
            } else {
              setError("please select a player");
            }
          }}
        >
          Next
        </Button>
      </Sheet>
    </div>
  );
};

export default VotePlayers;
