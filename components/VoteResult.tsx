import { List, ListItem, Radio, RadioGroup, Sheet, Typography } from "@mui/joy";
import { Button } from "@mui/material";
interface Vote {
  name: string;
  playerVoted: string[];
}

interface Props {
  result: Vote[];
  setShowPlayersList: (value: boolean) => void;
  setShowResult: (value: boolean) => void;
  setCurrIndex: (value: number) => void;
}
const VoteResult = ({
  result,
  setShowPlayersList,
  setShowResult,
  setCurrIndex,
}: Props) => {
  return (
    <>
      <Sheet
        sx={{
          borderRadius: "0.5rem",

          display: "flex",
          flexDirection: "column",
          textAlign: "left",
          alignItems: "center",
          height: "100%",
          justifyContent: "start",
        }}
      >
        <Typography level="h1" sx={{ m: 5 }}>
          Vote Result
        </Typography>
        {result.map((vote) => (
          <div key={vote.name}>
            <Typography level="h2" sx={{}}>
              {vote.name}
            </Typography>
            <ul className="list-disc">
              {vote.playerVoted.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
        <Button
          className="bg-[#18181B] text-white  hover:bg-[#18181B] mt-5 px-7"
          size="medium"
          variant="contained"
          onClick={() => {
            setShowPlayersList(true);
            setCurrIndex(0);
            setShowResult(false);
          }}
        >
          Players List
        </Button>
      </Sheet>
    </>
  );
};

export default VoteResult;
