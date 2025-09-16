import React, { useState, useEffect } from 'react';
import { Chessboard } from 'react-chessboard';
import { Chess } from 'chess.js';

const PGNViewer = ({ pgn }: { pgn: string }) => {
  const [game, setGame] = useState<Chess | null>(null);
  const [boardFen, setBoardFen] = useState<string>('start');
  const [currentMoveIndex, setCurrentMoveIndex] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [boardWidth, setBoardWidth] = useState<number>(500);

  // Handle responsive board width
  useEffect(() => {
    const updateBoardWidth = () => {
      const width = window.innerWidth;
      if (width <= 600) {
        setBoardWidth(Math.min(width * 0.8, 350));
      } else if (width <= 900) {
        setBoardWidth(Math.min(width * 0.7, 450));
      } else {
        setBoardWidth(500);
      }
    };

    updateBoardWidth();
    window.addEventListener('resize', updateBoardWidth);
    return () => window.removeEventListener('resize', updateBoardWidth);
  }, []);

  useEffect(() => {
    try {
      const newGame = new Chess();
      newGame.loadPgn(pgn);
      setGame(newGame);
      setBoardFen(newGame.fen());
      setCurrentMoveIndex(0);
      setError(null);
    } catch (e) {
      console.error('Failed to load PGN:', e);
      setGame(null);
      setBoardFen('start');
      setCurrentMoveIndex(0);
      setError('Invalid PGN format. Please check the input.');
    }
  }, [pgn]);

  useEffect(() => {
    if (!game) return;

    const moves = game.history({ verbose: true });
    if (currentMoveIndex === moves.length) {
      setBoardFen(game.fen());
    } else if (currentMoveIndex >= 0 && currentMoveIndex < moves.length) {
      setBoardFen(moves[currentMoveIndex].after);
    } else {
      setBoardFen('start');
    }
  }, [currentMoveIndex, game]);

  const handleNext = () => {
    if (game && currentMoveIndex < game.history().length) {
      setCurrentMoveIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (game && currentMoveIndex > 0) {
      setCurrentMoveIndex((prev) => prev - 1);
    }
  };

  const goToStart = () => {
    setCurrentMoveIndex(0);
  };

  const goToEnd = () => {
    if (game) {
      setCurrentMoveIndex(game.history().length);
    }
  };

  const handleMoveClick = (index: number) => {
    setCurrentMoveIndex(index);
  };

  const getMovePairs = () => {
    if (!game) return [];
    const moves = game.history();
    const pairs: { moveNumber: number; white: string; black: string | null }[] = [];
    for (let i = 0; i < moves.length; i += 2) {
      pairs.push({
        moveNumber: Math.floor(i / 2) + 1,
        white: moves[i],
        black: moves[i + 1] || null,
      });
    }
    return pairs;
  };

  if (error) {
    return <div className="text-red-500 text-center font-medium">{error}</div>;
  }

  if (!game) {
    return <div className="text-gray-600 text-center font-medium">Loading game...</div>;
  }

  const isStart = currentMoveIndex === 0;
  const isEnd = currentMoveIndex === game.history().length;
  const movePairs = getMovePairs();

  return (
    <>
      <style>
        {`
          .chessboard-container {
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            border: 1px solid #e5e7eb;
            background: #ffffff;
          }
          .move-list-item:hover {
            background-color: #374151;
            transition: background-color 0.2s;
          }
          .move-list-item.active {
            background-color: #60a5fa;
            font-weight: 600;
          }
        `}
      </style>
      <div className="flex flex-col items-center py-6">
  <div className="flex flex-col md:flex-row gap-4 md:gap-8 max-w-4xl w-full px-4 h-full">
    <div className="flex-1 flex flex-col items-center">
      <div className="chessboard-container">
        <Chessboard position={boardFen} boardWidth={boardWidth} />
      </div>
      <div className="flex justify-center gap-2 mt-4 flex-wrap mb-0">
        <button
          onClick={goToStart}
          disabled={isStart}
          className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium text-sm bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors ${
            isStart ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          <span className="font-bold">&lt;&lt;</span> Start
        </button>
        <button
          onClick={handlePrevious}
          disabled={isStart}
          className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium text-sm bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors ${
            isStart ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          <span className="font-bold">&lt;</span> Prev
        </button>
        <button
          onClick={handleNext}
          disabled={isEnd}
          className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium text-sm bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors ${
            isEnd ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          Next <span className="font-bold">&gt;</span>
        </button>
        <button
          onClick={goToEnd}
          disabled={isEnd}
          className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium text-sm bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors ${
            isEnd ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          End <span className="font-bold">&gt;&gt;</span>
        </button>
      </div>
    </div>
    <div className="w-full md:w-64 bg-gray-800 text-white p-4 rounded-lg shadow-lg max-h-[500px] overflow-y-auto flex-shrink-0">
      {movePairs.map((pair, index) => {
        const whiteIndex = index * 2;
        const blackIndex = whiteIndex + 1;
        return (
          <div key={index} className="flex gap-2 items-center text-sm">
            <span className="w-6 text-gray-300">{pair.moveNumber}.</span>
            <span
              className={`flex-1 p-1 rounded cursor-pointer move-list-item ${
                currentMoveIndex === whiteIndex ? 'active' : ''
              }`}
              onClick={() => handleMoveClick(whiteIndex)}
            >
              {pair.white}
            </span>
            {pair.black && (
              <span
                className={`flex-1 p-1 rounded cursor-pointer move-list-item ${
                  currentMoveIndex === blackIndex ? 'active' : ''
                }`}
                onClick={() => handleMoveClick(blackIndex)}
              >
                {pair.black}
              </span>
            )}
          </div>
        );
      })}
    </div>
  </div>
</div>
    </>
  );
};

export default PGNViewer;