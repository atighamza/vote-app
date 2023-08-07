import Modal from "@mui/joy/Modal";
import Sheet from "@mui/joy/Sheet";
import Box from "@mui/material/Box";
import { Button } from "@mui/joy";
import { useState } from "react";
interface Props {
  open: boolean;
  players: string[];
  setOpen: (value: boolean) => void;
  setPlayers: (value: string[]) => void;
}

const AddPlayerModal = ({ open, setOpen, players, setPlayers }: Props) => {
  const [playerName, setPlayerName] = useState<string>("");
  const [error, setError] = useState<string>("");
  const handleAddPlayer = () => {
    let str = playerName.trim();
    console.log("str:", str);
    console.log("str:", str.length);
    if (str.length <= 0) {
      setError("player name shouldn't be empty ");
    } else {
      if (players.length <= 0) {
        console.log("empty arr");
        setError("");
        players.push(str);
        console.log(players);
        setPlayers(players);
        localStorage.setItem("players", JSON.stringify(players));
      } else {
        if (players.includes(str)) {
          setError("player already exists");
        } else {
          setError("");
          players.push(str);
          console.log(players);
          setPlayers(players);
          localStorage.setItem("players", JSON.stringify(players));
        }
      }
    }
    setPlayerName("");
  };
  return (
    <div>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => {
          setOpen(false);
          setError("");
        }}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "15rem",
        }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 500,
            borderRadius: "md",
            p: 6,
            boxShadow: "lg",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <input
            type="text"
            placeholder="player name"
            className="border-[2px] border-[#b6b3b3] rounded placeholder:p-2 p-3 mb-3"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          />
          <p
            className={`text-[#D32F2F] mb-2 ${error ? "visible" : "invisible"}`}
          >
            {error}
          </p>
          <Button
            className="bg-[#18181B] text-white  hover:bg-[#18181B] "
            size="md"
            variant="solid"
            onClick={handleAddPlayer}
          >
            Add player
          </Button>
        </Sheet>
      </Modal>
    </div>
  );
};

export default AddPlayerModal;
