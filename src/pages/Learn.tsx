import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import Chessboard from "chessboardjsx";
import { Chess, Square } from "chess.js";

const Learn = () => {
  const [game, setGame] = useState(new Chess());
  const [position, setPosition] = useState(game.fen());
  const [selectedSquare, setSelectedSquare] = useState<string | null>(null);
  const [legalMoves, setLegalMoves] = useState<string[]>([]);

  const onSquareClick = (square: string) => {
    const clickedPiece = game.get(square as Square);
    
    // If clicking on a piece of the current player, always select it
    if (clickedPiece && clickedPiece.color === game.turn()) {
      setSelectedSquare(square);
      const moves = game.moves({ square: square as Square, verbose: true });
      setLegalMoves(moves.map(move => move.to));
      return;
    }
    
    // If we have a selected square and clicked on an empty square or opponent piece
    if (selectedSquare) {
      const move = game.move({
        from: selectedSquare as Square,
        to: square as Square,
        promotion: 'q' // Always promote to queen for simplicity
      });

      if (move) {
        setPosition(game.fen());
        setSelectedSquare(null);
        setLegalMoves([]);
      } else {
        // Invalid move - clear selection
        setSelectedSquare(null);
        setLegalMoves([]);
      }
    } else {
      // No piece selected and clicked on empty square or opponent piece - clear selection
      setSelectedSquare(null);
      setLegalMoves([]);
    }
  };

  const onDrop = ({ sourceSquare, targetSquare }: { sourceSquare: string; targetSquare: string }) => {
    // Clear selection when dragging
    setSelectedSquare(null);
    setLegalMoves([]);
    
    const move = game.move({
      from: sourceSquare as Square,
      to: targetSquare as Square,
      promotion: 'q' // Always promote to queen for simplicity
    });

    if (move) {
      setPosition(game.fen());
      return true;
    }
    return false;
  };

  const resetBoard = () => {
    const newGame = new Chess();
    setGame(newGame);
    setPosition(newGame.fen());
    setSelectedSquare(null);
    setLegalMoves([]);
  };

  const getSquareStyles = () => {
    const styles: { [square: string]: any } = {};
    
    // Highlight selected square with yellow
    if (selectedSquare) {
      styles[selectedSquare] = {
        backgroundColor: 'rgba(255, 255, 0, 0.6)',
        boxShadow: 'inset 0 0 3px rgba(255, 255, 0, 0.8)'
      };
    }

    // Show legal moves with gray circles
    legalMoves.forEach(square => {
      const piece = game.get(square as Square);
      if (piece) {
        // Target square has an opponent piece - show capture indicator
        styles[square] = {
          background: 'radial-gradient(circle, rgba(255,0,0,.3) 85%, transparent 85%)',
          borderRadius: '50%'
        };
      } else {
        // Empty square - show move indicator
        styles[square] = {
          background: 'radial-gradient(circle, rgba(0,0,0,.2) 25%, transparent 25%)',
          borderRadius: '50%'
        };
      }
    });

    return styles;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Learn Chess</h1>
            <p className="text-lg text-muted-foreground">
              Practice your moves on our interactive chessboard
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="lg:w-2/3">
              <div className="bg-card rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-semibold mb-4 text-card-foreground">Interactive Chessboard</h2>
                <div className="max-w-lg mx-auto">
                  <Chessboard
                    position={position}
                    onDrop={onDrop}
                    onSquareClick={onSquareClick}
                    squareStyles={getSquareStyles()}
                    boardStyle={{
                      borderRadius: "8px",
                      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                    }}
                    lightSquareStyle={{ backgroundColor: "#f0d9b5" }}
                    darkSquareStyle={{ backgroundColor: "#b58863" }}
                  />
                </div>
                <div className="mt-4 text-center space-x-4">
                  <button
                    onClick={resetBoard}
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Reset Board
                  </button>
                  <div className="mt-2 text-sm text-muted-foreground">
                    Current turn: {game.turn() === 'w' ? 'White' : 'Black'}
                    {game.isCheck() && <span className="text-red-500 ml-2">Check!</span>}
                    {game.isCheckmate() && <span className="text-red-500 ml-2">Checkmate!</span>}
                    {game.isDraw() && <span className="text-yellow-500 ml-2">Draw!</span>}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3">
              <div className="bg-card rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-card-foreground">Chess Basics</h3>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <div>
                    <h4 className="font-medium text-card-foreground">How to Play:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Click on your pieces to select them and see legal moves</li>
                      <li>Click on another piece to switch selection</li>
                      <li>Gray dots show available moves, red circles show captures</li>
                      <li>You can also drag and drop pieces</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-card-foreground">Basic Rules:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Each piece has its own movement pattern</li>
                      <li>The goal is to checkmate the opponent's king</li>
                      <li>Protect your own king from threats</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-card-foreground">Tips for Beginners:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Control the center of the board</li>
                      <li>Develop your pieces early</li>
                      <li>Castle to protect your king</li>
                      <li>Don't move the same piece twice in the opening</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Learn;