import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import { Alert, IconButton } from "@mui/joy";
//import CloseIcon from "@mui/icons-material/Close";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  players: string[];
  setPlayers: (value: string[]) => void;
}

const PlayerName = ({ players, setPlayers }: Props) => {
  const handleRemovePlayer = (name: string) => {
    players = players.filter((player) => player !== name);
    setPlayers(players);
    localStorage.setItem("players", JSON.stringify(players));
  };
  return (
    <>
      {players.length <= 0 ? (
        <p>no players</p>
      ) : (
        players.map((name) => (
          <Alert
            key={name}
            variant="plain"
            color="neutral"
            sx={{
              fontSize: "1.2rem",
              marginBottom: "7px",
              border: "2px solid black",
            }}
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
        ))
      )}
    </>
  );
};

export default PlayerName;
