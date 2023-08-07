"use client";
import { useEffect, useState } from "react";
import VotePlayers from "@/components/VotePlayers";
import VoteResult from "@/components/VoteResult";
import GamePlayersList from "@/components/GamePlayersList";
import HomeIcon from "@mui/icons-material/Home";
import Link from "next/link";

interface Vote {
  name: string;
  playerVoted: string[];
}
const page = () => {
  const [players, setPlayers] = useState<string[]>([]);
  const [currPlayers, setCurrPlayers] = useState<string[]>([]);
  const [currIndex, setCurrIndex] = useState(0);
  const [voteData, setVoteData] = useState<Vote[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [showPlayersList, setShowPlayersList] = useState(false);
  const [showVoteDashboard, setShowVoteDashboard] = useState(true);
  const incrementIndex = () => {
    setCurrIndex((prev) => prev + 1);
  };

  const handleVote = (voter: string, voted: string) => {
    let found = false;
    let arr = voteData;

    for (let i = 0; i < voteData.length; i++) {
      if (voteData[i].name == voted) {
        found = true;
        break;
      }
    }

    if (!found) {
      arr = [...arr, { name: voted, playerVoted: [voter] }];
      setVoteData(arr);
    } else {
      arr = arr.map((item) => {
        if (item.name == voted) {
          item.playerVoted.push(voter);
        }
        return item;
      });
      setVoteData(arr);
    }

    //console.log(voteData);
  };
  useEffect(() => {
    let arr: string[] = JSON.parse(localStorage.getItem("players")!);

    if (arr) {
      setPlayers(arr);
      let arr2 = arr.filter((name) => name !== arr[currIndex]);

      setCurrPlayers(arr2);
    }
  }, []);

  useEffect(() => {
    console.log("voteData : ", voteData);
  }, [voteData]);

  useEffect(() => {
    console.log("players : ", players);
    //console.log("indx : ", currIndex);
    let arr2 = players.filter((name) => name !== players[currIndex]);
    //console.log("curr players :", arr2);
    setCurrPlayers(arr2);
  }, [players]);

  useEffect(() => {
    console.log("curr index : ", currIndex);
    console.log(players);
    console.log("players ", players.length);
    if (currIndex > 0) {
      let arr = players.filter((name) => name !== players[currIndex]);
      setCurrPlayers(arr);
    }
    if (currIndex < players.length) {
      setShowResult(true);
      //setShowVoteDashboard(false);
    }
    if (players.length > 0) {
      if (currIndex >= players.length) {
        console.log("waaaa");
        setShowVoteDashboard(false);
      }
    }
  }, [currIndex]);

  useEffect(() => {
    console.log("result : ", showResult);
  }, [showResult]);

  return (
    <div className="bg-white flex flex-col items-center">
      {showVoteDashboard ? (
        <VotePlayers
          players={currPlayers}
          setCurrIndex={setCurrIndex}
          name={players[currIndex]}
          handleVote={handleVote}
        />
      ) : (
        <>
          {showResult && (
            <VoteResult
              result={voteData}
              setShowPlayersList={setShowPlayersList}
              setShowResult={setShowResult}
              setCurrIndex={setCurrIndex}
            />
          )}
        </>
      )}
      {showPlayersList && (
        <GamePlayersList
          players={players}
          setPlayers={setPlayers}
          setShowPlayersList={setShowPlayersList}
          setVoteData={setVoteData}
          setShowVoteDashboard={setShowVoteDashboard}
        />
      )}

      <Link href="/" className="mt-[4rem]">
        <HomeIcon sx={{ fontSize: 40, textAlign: "center" }} />
        <p>Home</p>
      </Link>
    </div>
  );
};

export default page;
