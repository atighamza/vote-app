"use client";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import AddPlayerModal from "@/components/AddPlayerModal";
import PlayerName from "@/components/PlayerName";
import Link from "next/link";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function Home() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#18181B",
      },
    },
  });
  const [players, setPlayers] = useState<string[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  useEffect(() => {
    let arr = JSON.parse(localStorage.getItem("players")!);
    if (arr) {
      setPlayers(arr);
    }
  }, []);

  /*useEffect(() => {
    console.log("players : ", players);
  }, [players]);*/

  return (
    <div className="flex justify-center">
      <div className="mb-3 text-2xl font-semibold text-center">
        <div className="mb-5">
          <PlayerName players={players} setPlayers={setPlayers} />
        </div>
        <ThemeProvider theme={theme}>
          <Button
            className=" text-white "
            size="medium"
            variant="contained"
            sx={{ backgroundColorcolor: "#18181B" }}
            onClick={() => setOpen(true)}
          >
            Add player
          </Button>

          <Link href="/game">
            <Button
              className=" text-white  hover:bg-[#18181B] ml-5"
              size="medium"
              variant="contained"
              sx={{ backgroundColorcolor: "#18181B" }}
            >
              Start game
            </Button>
          </Link>
        </ThemeProvider>
      </div>
      <AddPlayerModal
        open={open}
        setOpen={setOpen}
        players={players}
        setPlayers={setPlayers}
      />
    </div>
  );
}
