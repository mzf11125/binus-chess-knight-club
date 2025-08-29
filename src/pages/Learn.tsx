import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import Chessboard from "chessboardjsx";

const Learn = () => {
  const [position, setPosition] = useState("start");

  const onDrop = ({ sourceSquare, targetSquare }: { sourceSquare: string; targetSquare: string }) => {
    // Basic move validation could be added here
    return true;
  };

  const resetBoard = () => {
    setPosition("start");
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
                    boardStyle={{
                      borderRadius: "8px",
                      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                    }}
                    squareStyles={{}}
                    lightSquareStyle={{ backgroundColor: "#f0d9b5" }}
                    darkSquareStyle={{ backgroundColor: "#b58863" }}
                  />
                </div>
                <div className="mt-4 text-center">
                  <button
                    onClick={resetBoard}
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Reset Board
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3">
              <div className="bg-card rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-card-foreground">Chess Basics</h3>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <div>
                    <h4 className="font-medium text-card-foreground">How to Move Pieces:</h4>
                    <p>Click and drag pieces to move them on the board.</p>
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