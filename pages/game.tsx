import type { NextPage } from "next";

const Game: NextPage<PageProps> = () => {
  return (
    <div>
      <h1>Game</h1>
      <iframe
        id="game"
        style={{ overflow: "hidden", height: "800px", width: "1200px" }}
        src="https://www.gamezop.com/g/HJP4afkvqJQ?id=4419"
      ></iframe>
    </div>
  );
};

interface PageProps {}

export default Game;
