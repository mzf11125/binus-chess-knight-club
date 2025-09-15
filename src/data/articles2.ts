export interface Article {
  id: string;
  title: string;
  author: string;
  authorRole: string;
  ratingRange: string;
  excerpt: string;
  content: string;
  publishedDate: string;
  readTime: string;
  tags: string[];
  authorImage?: string;
}

export const articles: Article[] = [
  {
    id: "beginner-guide-0-400",
    title: "Chess Basics: Your Journey from 0 to 400 Rating",
    author: "Sia Malvino Al Keane",
    authorRole: "Club Activist",
    ratingRange: "0 → 400",
    excerpt: "Master the fundamentals of chess - piece movement, basic rules, and essential opening principles to build your foundation.",
    content: `
# Chess Basics: Your Journey from 0 to 400 Rating

Welcome to the wonderful world of chess! This guide will help you build a solid foundation and reach your first milestone of 400 rating.

## Chapter 1: Learning the Pieces

Understanding how each piece moves is your first step:

### The Pieces and Their Powers
- **Pawn**: Moves forward one square, captures diagonally
- **Rook**: Moves horizontally and vertically any number of squares
- **Bishop**: Moves diagonally any number of squares
- **Knight**: Moves in an L-shape (2+1 squares)
- **Queen**: Combines rook and bishop movements
- **King**: Moves one square in any direction

## Chapter 2: Basic Rules

### Special Moves
- **Castling**: A special king and rook move for safety
- **En Passant**: A special pawn capture
- **Promotion**: When pawns reach the end, they become queens (usually)

### Winning the Game
- **Checkmate**: When the king is attacked and cannot escape
- **Draw conditions**: Stalemate, insufficient material, repetition

## Chapter 3: Opening Principles

Follow these golden rules in the opening:

1. **Control the center** with pawns (e4, d4)
2. **Develop knights before bishops**
3. **Castle early** for king safety
4. **Don't move the same piece twice**
5. **Don't bring your queen out too early**

## Practice Exercises

1. Play 10 games focusing only on following opening principles
2. Practice basic checkmate patterns: Queen + King vs King
3. Solve 5 basic tactics puzzles daily

## Recommended Next Steps

Once you consistently apply these fundamentals, you'll naturally progress toward 400 rating. Focus on playing regularly and reviewing your games!
    `,
    publishedDate: "2024-01-15",
    readTime: "8 min read",
    tags: ["Beginner", "Fundamentals", "Opening"],
    authorImage: "activist/scaled/malvino.png"
  },
  {
    id: "tactical-awareness-400-700",
    title: "Tactical Awareness: Climbing from 400 to 700",
    author: "Stanley Christian Gunawan",
    authorRole: "Club Activist",
    ratingRange: "400 → 700",
    excerpt: "Learn essential tactical patterns and improve your board vision to start winning material consistently.",
    content: `
# Tactical Awareness: Climbing from 400 to 700

Now that you know the basics, it's time to sharpen your tactical skills. This phase is all about pattern recognition and avoiding blunders.

## Chapter 1: Essential Tactical Motifs

### The Big Five Tactics
1. **Pin**: Attacking a piece that cannot move without exposing a more valuable piece
2. **Fork**: Attacking two pieces simultaneously
3. **Skewer**: Forcing a valuable piece to move and capturing the piece behind it
4. **Discovered Attack**: Moving one piece to reveal an attack from another
5. **Double Attack**: Attacking two targets at once

### Knight Forks - Your Best Friend
Knights are fantastic forking pieces because of their unique movement. Look for opportunities to fork:
- King and Queen
- King and Rook
- Two major pieces

## Chapter 2: Blunder Prevention

### Common Mistakes to Avoid
- **Hanging pieces**: Always check if your pieces are protected
- **Back rank weaknesses**: Ensure your king has escape squares
- **Overloaded pieces**: Don't give one piece too many defensive duties
- **Tactical shots**: Look for your opponent's threats before moving

### The Blunder Check Process
Before every move, ask yourself:
1. Is this piece I'm moving protected?
2. Am I leaving any pieces undefended?
3. What is my opponent threatening?
4. Can I improve my position while defending?

## Chapter 3: Simple Endgames

Learn these essential endgames:
- **King and Queen vs King**
- **King and Rook vs King**
- **King and Pawn vs King**

## Daily Practice Routine

1. **Solve 10 tactical puzzles** (focus on pins, forks, skewers)
2. **Play 2-3 games** with longer time controls (15+10 or 30 minutes)
3. **Analyze your games** - identify where you hung pieces or missed tactics
4. **Practice basic endgames** for 10 minutes

## Rating Milestone Goals

- 500: Consistently spot 1-move tactics
- 600: Recognize 2-move tactical sequences
- 700: Rarely hang pieces, win most tactical exchanges

Keep practicing these patterns, and you'll see steady improvement!
    `,
    publishedDate: "2024-01-20",
    readTime: "10 min read",
    tags: ["Tactics", "Intermediate", "Pattern Recognition"],
    authorImage: "activist/scaled/stanley.png"
  },
  {
    id: "positional-understanding-700-1000",
    title: "Building Positional Understanding: 700 to 1000",
    author: "Hibattulah Dony Ananda",
    authorRole: "Club Activist",
    ratingRange: "700 → 1000",
    excerpt: "Develop your positional sense and learn to evaluate positions beyond just material count.",
    content: `
# Building Positional Understanding: 700 to 1000

Welcome to the intermediate level! Here we shift focus from pure tactics to understanding chess positions and long-term planning.

## Chapter 1: Pawn Structure Basics

Pawns are the soul of chess. Understanding pawn structures will dramatically improve your play.

### Key Pawn Concepts
- **Pawn Chains**: Connected pawns supporting each other
- **Isolated Pawns**: Pawns without friendly pawns on adjacent files
- **Doubled Pawns**: Two pawns on the same file
- **Passed Pawns**: Pawns with no enemy pawns blocking their advance

### Pawn Structure Strategy
- **Attack the base** of pawn chains
- **Create passed pawns** in the endgame
- **Avoid unnecessary pawn weaknesses**
- **Use pawns to control key squares**

## Chapter 2: Piece Activity

### Rook Principles
- Rooks belong on **open files**
- Rooks love the **7th rank** (attacking pawns and restricting the king)
- **Double rooks** on open files for maximum pressure
- Rooks need **space to operate**

### Bishop Principles
- Bishops are **long-range pieces**
- **Keep bishops on open diagonals**
- **Bishops of opposite colors** favor the attacking side
- **Good vs Bad bishops** - is your bishop restricted by your own pawns?

### Knight Principles
- Knights need **outposts** - strong squares that can't be attacked by pawns
- Knights on the **rim are dim**
- Knights are excellent **blockaders** of passed pawns
- Knights love **closed positions**

## Chapter 3: King Safety

### Middle Game King Safety
- **Complete castling early**
- **Keep pawn shelter** intact when possible
- **Watch for back rank mates**
- **Create escape squares** (luft) when needed

### When to Keep the King in the Center
- When you can **castle both ways** (flexibility)
- In **opposite-side castling** attacks
- When the **center is closed** and safe

## Chapter 4: Planning

### How to Make a Plan
1. **Assess the position**: What are the key features?
2. **Identify weaknesses**: In both your and opponent's position
3. **Choose targets**: What can you attack or improve?
4. **Create a plan**: How will you achieve your goals?
5. **Execute flexibly**: Be ready to adapt

### Common Plans
- **Attack the King**: When opponent's king is exposed
- **Improve worst piece**: Activate passive pieces
- **Create passed pawns**: Especially in endgames
- **Control key squares**: Outposts and central squares

## Study Plan

### Weekly Schedule
- **Monday**: Pawn structure exercises
- **Tuesday**: Tactical puzzles (2-3 moves)
- **Wednesday**: Endgame practice
- **Thursday**: Opening repertoire
- **Friday**: Analyze master games
- **Weekend**: Play longer games (30+ minutes)

### Monthly Goals
- Month 1: Master basic pawn structures
- Month 2: Improve piece coordination
- Month 3: Learn your first complete opening system

## Rating Targets

- **800**: Understand basic pawn weaknesses
- **900**: Coordinate pieces effectively
- **1000**: Make simple but sound plans

Remember: At this level, avoiding blunders is still crucial, but now you're adding positional understanding to your toolkit!
    `,
    publishedDate: "2024-01-25",
    readTime: "12 min read",
    tags: ["Positional Play", "Strategy", "Pawn Structure"],
    authorImage: "activist/scaled/hibatullah.png"
  },
  {
    id: "advanced-tactics-1000-1200",
    title: "Advanced Tactics and Opening Theory: 1000 to 1200",
    author: "Josevan NoeleDave",
    authorRole: "Club Activist", 
    ratingRange: "1000 → 1200",
    excerpt: "Master complex tactical combinations and develop a solid opening repertoire to reach the next level.",
    content: `
# Advanced Tactics and Opening Theory: 1000 to 1200

Congratulations on reaching 1000! Now it's time to deepen your tactical vision and build a solid opening foundation.

## Chapter 1: Complex Tactical Motifs

### Multi-Move Combinations
Moving beyond simple one-move tactics to combinations involving 3+ moves:

#### Deflection and Decoy
- **Deflection**: Forcing a piece away from defending something important
- **Decoy**: Luring a piece to a bad square
- **Clearance**: Moving pieces out of the way for a tactical shot

#### Interference and Blocking
- **Interference**: Placing a piece between attacker and defender
- **Blocking**: Cutting off escape routes or defensive lines

### Sacrifice Patterns
- **Exchange sacrifices**: Rook for Bishop/Knight in specific positions
- **Piece sacrifices**: For attack or positional compensation
- **Pawn storms**: Breaking through with pawn advances

## Chapter 2: Opening Repertoire Development

### Choosing Your Openings

#### As White (Pick One System)
1. **Italian Game** (1.e4 e5 2.Nf3 Nc6 3.Bc4)
   - Lead in development
   - Quick castling
   - Central pressure

2. **London System** (1.d4, Bf4, e3, Bd3)
   - Solid and flexible
   - Easy to learn
   - Works against most Black setups

#### As Black (Against 1.e4)
1. **Italian Defense** (1.e4 e5)
   - Classical and principled
   - Rich in tactical ideas
   - Leads to balanced positions

2. **French Defense** (1.e4 e6)
   - Solid pawn structure
   - Counter-attacking chances
   - Less theory to memorize

#### As Black (Against 1.d4)
1. **Queen's Gambit Declined**
   - Solid and reliable
   - Good piece activity
   - Classic central play

### Opening Principles Review
- **Control the center** with pawns and pieces
- **Develop with threats** when possible
- **Castle early** but think about king placement
- **Connect your rooks**
- **Don't grab pawns** at the expense of development

## Chapter 3: Middlegame Strategy

### Weak Squares and Outposts
- **Identifying weak squares**: Squares that can't be defended by pawns
- **Creating outposts**: Maneuvering pieces to strong squares
- **Knight vs Bishop**: Understanding when each piece is superior

### Attack and Defense
- **Classical attack**: Building up slowly with all pieces
- **Pawn storms**: When to advance pawns in attack
- **Defensive techniques**: Simplification, counterplay, fortress building

### Time Management
- **Critical moments**: Spend more time on crucial decisions
- **Pattern recognition**: Use known patterns to move quickly
- **Endgame timing**: Save time for complex endings

## Chapter 4: Essential Endgames

### King and Pawn Endgames
- **Opposition**: Key concept for king and pawn endings
- **Triangulation**: Gaining the opposition
- **Pawn races**: When to push vs when to block

### Rook Endgames
- **Lucena Position**: Win with rook and pawn vs rook
- **Philidor Position**: Drawing technique
- **Rook activity**: Keeping your rook active

## Training Schedule

### Daily (30-45 minutes)
- **15 minutes**: Tactical puzzles (3-5 move combinations)
- **15 minutes**: Opening study (learn one line per day)
- **15 minutes**: Endgame practice

### 3 Games per Week
- Use your studied openings
- **Time control**: 15+10 or 30 minutes
- **Always analyze** after playing

### Weekly Review
- **Review all games** played
- **Study one master game** in your openings
- **Practice weak areas** identified during play

## Common Mistakes to Avoid
- **Opening knowledge without understanding**
- **Neglecting the endgame**
- **Playing too fast in critical positions**
- **Focusing only on your own plans**

## Milestones
- **1100**: Solve 3-move tactical combinations consistently
- **1150**: Know main lines of your openings 8-10 moves deep
- **1200**: Win most clearly better endgames

Your chess understanding is becoming sophisticated. Trust your growing intuition while continuing to calculate concrete variations!
    `,
    publishedDate: "2024-02-01",
    readTime: "15 min read",
    tags: ["Advanced Tactics", "Opening Theory", "Endgames"],
    authorImage: "activist/scaled/noele.png"
  }
];

// Additional articles for higher ratings (condensed for now)
export const upcomingArticles = [
  { ratingRange: "1200 → 1400", author: "Nathanael Vitzgerald", title: "Strategic Planning and Time Management" },
  { ratingRange: "1400 → 1600", author: "Aristo Ardy", title: "Advanced Positional Concepts" },
  { ratingRange: "1600 → 1800", author: "Geoffrey Antonio", title: "Complex Endgame Mastery" },
  { ratingRange: "1800 → 2000", author: "Galvent Chiuwen", title: "Tournament Psychology and Preparation" },
  { ratingRange: "2000 → 2100", author: "Hans Kartawinata", title: "Opening Preparation at Master Level" },
  { ratingRange: "2100 → 2200", author: "Alessandro Moreno", title: "Advanced Calculation Techniques" },
  { ratingRange: "2200 → 2300", author: "Syuja Ardhanu", title: "Strategic Mastery and Long-term Planning" },
  { ratingRange: "2300 → 2400", author: "Dhatuyo Budiarto", title: "Expert-Level Position Assessment" },
  { ratingRange: "2400 → 2500", author: "Ray Mclung", title: "Master-Level Opening Theory" },
  { ratingRange: "2500 → 2600", author: "Joel Suwanto", title: "Grandmaster Techniques and Endgame Mastery" }
];