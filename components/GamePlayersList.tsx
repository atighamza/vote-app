import { Alert, IconButton, Typography } from "@mui/joy";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
interface Vote {
  name: string;
  playerVoted: string[];
}
interface Props {
  players: string[];
  setPlayers: (value: string[]) => void;
  setShowPlayersList: (value: boolean) => void;
  setVoteData: (value: Vote[]) => void;
  setShowVoteDashboard: (value: boolean) => void;
}

const GamePlayersList = ({
  players,
  setPlayers,
  setShowPlayersList,
  setVoteData,
  setShowVoteDashboard,
}: Props) => {
  const handleRemovePlayer = (name: string) => {
    let arr = players.filter((player) => player !== name);
    console.log(arr);
    setPlayers(arr);
  };
  return (
    <div>
      <Typography level="h1" sx={{ m: 5 }}>
        Game players list
      </Typography>
      {players.map((name) => (
        <Alert
          key={name}
          variant="plain"
          color="neutral"
          sx={{ fontSize: "1.2rem", marginBottom: "7px" }}
          endDecorator={
            <>
              <IconButton
                variant="soft"
                size="sm"
                color="danger"
                onClick={() => handleRemovePlayer(name)}
              >
                <CloseIcon />
              </IconButton>
            </>
          }
        >
          {name}
        </Alert>
      ))}
      <Button
        className="bg-[#18181B] text-white  hover:bg-[#18181B] mt-5 px-7"
        sx={{ backgroundColorcolor: "#18181B" }}
        size="medium"
        variant="contained"
        onClick={() => {
          setShowPlayersList(false);
          setShowVoteDashboard(true);
          setVoteData([]);
        }}
      >
        Vote
      </Button>
    </div>
  );
};

export default GamePlayersList;
