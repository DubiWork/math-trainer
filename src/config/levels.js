export const LEVELS = [
  { id: 1,  name: 'First Steps',     operators: ['+'],           minNumber: 1, maxNumber: 5,   ageTarget: '5-6'  },
  { id: 2,  name: 'Addition Hero',   operators: ['+'],           minNumber: 1, maxNumber: 10,  ageTarget: '6'    },
  { id: 3,  name: 'Minus Magic',     operators: ['-'],           minNumber: 1, maxNumber: 10,  ageTarget: '6-7'  },
  { id: 4,  name: 'Mixed Warrior',   operators: ['+', '-'],      minNumber: 1, maxNumber: 10,  ageTarget: '7'    },
  { id: 5,  name: 'Cross the 10',    operators: ['+'],           minNumber: 1, maxNumber: 20,  ageTarget: '7'    },
  { id: 6,  name: 'Subtract 20',     operators: ['-'],           minNumber: 1, maxNumber: 20,  ageTarget: '7-8'  },
  { id: 7,  name: 'Mixed 20',        operators: ['+', '-'],      minNumber: 1, maxNumber: 20,  ageTarget: '8'    },
  { id: 8,  name: 'Tens Master',     operators: ['+', '-'],      minNumber: 10, maxNumber: 100, ageTarget: '8-9', multiplesOf: 10 },
  { id: 9,  name: 'Century Runner',  operators: ['+', '-'],      minNumber: 1, maxNumber: 100, ageTarget: '9'    },
  { id: 10, name: 'Speed of 2s',     operators: ['*'],           minNumber: 2, maxNumber: 10,  ageTarget: '9-10', multipliers: [2,5,10] },
  { id: 11, name: 'Times Tables',    operators: ['*'],           minNumber: 2, maxNumber: 10,  ageTarget: '10-11', multipliers: [3,4,6,7,8,9] },
  { id: 12, name: 'Division Quest',  operators: ['/'],           minNumber: 2, maxNumber: 10,  ageTarget: '11-12', divisors: [2,5,10] },
  { id: 13, name: 'Math Champion',   operators: ['+','-','*','/'], minNumber: 1, maxNumber: 100, ageTarget: '12-13' },
]

// NOTE: Level map is PROVISIONAL — update from real school workbooks before launch.
// See docs/plans/2026-03-07-adaptive-math-trainer-design.md Section 2.

export function getLevelConfig(levelId) {
  if (levelId < 1 || levelId > LEVELS.length) {
    throw new Error(`Invalid level: ${levelId}. Must be 1-${LEVELS.length}`)
  }
  return LEVELS[levelId - 1]
}

export default LEVELS
