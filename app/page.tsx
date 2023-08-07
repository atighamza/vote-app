"use client";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import AddPlayerModal from "@/components/AddPlayerModal";
import PlayerName from "@/components/PlayerName";
import Link from "next/link";

export default function Home() {
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

        <Button
          className="bg-[#18181B] text-white  hover:bg-[#18181B]"
          size="medium"
          variant="contained"
          onClick={() => setOpen(true)}
        >
          Add player
        </Button>

        <Link href="/game">
          <Button
            className="bg-[#18181B] text-white  hover:bg-[#18181B] ml-5"
            size="medium"
            variant="contained"
          >
            Start game
          </Button>
        </Link>
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
