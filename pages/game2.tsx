import type { NextPage } from "next";

const Game2: NextPage<PageProps> = () => {
  return (
    <div>
      <h1>Game</h1>
      <iframe
        id="game"
        style={{ overflow: "hidden", height: "400px" }}
        src="https://www.gamezop.com/g/HJP4afkvqJQ?id=4419"
      ></iframe>
    </div>
  );
};

interface PageProps {}

export default Game2;
