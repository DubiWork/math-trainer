import { describe, it, expect } from 'vitest';
import { getStrategies, STRATEGY_IDS } from './strategies';
import { getLevelConfig } from '../config/levels';
import { getRandomInt } from './mathProblems';

describe('strategies', () => {
  // ─── STRATEGY_IDS export ──────────────────────────────────────────────────

  describe('STRATEGY_IDS', () => {
    it('exports all 12 strategy identifiers', () => {
      expect(STRATEGY_IDS).toEqual({
        BRIDGING_ADD: 'bridging_add',
        BRIDGING_SUB: 'bridging_sub',
        DOUBLES: 'doubles',
        NEAR_DOUBLES: 'near_doubles',
        COUNT_ON: 'count_on',
        COUNT_BACK: 'count_back',
        REPEATED_ADDITION: 'repeated_addition',
        COMMUTATIVE_MULT: 'commutative_mult',
        TIMES_TEN: 'times_ten',
        DOUBLES_MULT: 'doubles_mult',
        INVERSE_MULT: 'inverse_mult',
        HALVING: 'halving',
      });
    });

    it('has unique values for all IDs', () => {
      const values = Object.values(STRATEGY_IDS);
      expect(new Set(values).size).toBe(values.length);
    });
  });

  // ─── Bridging Addition ────────────────────────────────────────────────────

  describe('bridging_add', () => {
    it('triggers for 8+5 (ones digits sum > 10)', () => {
      const result = getStrategies(8, 5, '+');
      const bridging = result.find(s => s.id === STRATEGY_IDS.BRIDGING_ADD);
      expect(bridging).toBeDefined();
      expect(bridging.name).toBe('Bridge to 10');
    });

    it('produces correct steps for 8+5', () => {
      const result = getStrategies(8, 5, '+');
      const bridging = result.find(s => s.id === STRATEGY_IDS.BRIDGING_ADD);
      expect(bridging.steps).toEqual([
        'Make 10: 8+2=10',
        'Left over: 5-2=3',
        'Add: 10+3=?',
      ]);
    });

    it('triggers for 7+6 (ones sum = 13 > 10)', () => {
      const result = getStrategies(7, 6, '+');
      const bridging = result.find(s => s.id === STRATEGY_IDS.BRIDGING_ADD);
      expect(bridging).toBeDefined();
    });

    it('triggers for 17+5 (ones sum = 12 > 10)', () => {
      const result = getStrategies(17, 5, '+');
      const bridging = result.find(s => s.id === STRATEGY_IDS.BRIDGING_ADD);
      expect(bridging).toBeDefined();
      expect(bridging.steps[0]).toBe('Make 20: 17+3=20');
    });

    it('does NOT trigger for 3+2 (ones sum = 5, no crossing)', () => {
      const result = getStrategies(3, 2, '+');
      const bridging = result.find(s => s.id === STRATEGY_IDS.BRIDGING_ADD);
      expect(bridging).toBeUndefined();
    });

    it('does NOT trigger for 10+10 (ones sum = 0)', () => {
      const result = getStrategies(10, 10, '+');
      const bridging = result.find(s => s.id === STRATEGY_IDS.BRIDGING_ADD);
      expect(bridging).toBeUndefined();
    });

    it('bridges from the larger operand for better pedagogy', () => {
      const result = getStrategies(5, 8, '+');
      const bridging = result.find(s => s.id === STRATEGY_IDS.BRIDGING_ADD);
      // Should bridge from 8 (larger), not 5
      expect(bridging.steps[0]).toBe('Make 10: 8+2=10');
    });
  });

  // ─── Bridging Subtraction ─────────────────────────────────────────────────

  describe('bridging_sub', () => {
    it('triggers for 13-5 (ones digit 3 < subtrahend 5)', () => {
      const result = getStrategies(13, 5, '-');
      const bridging = result.find(s => s.id === STRATEGY_IDS.BRIDGING_SUB);
      expect(bridging).toBeDefined();
      expect(bridging.name).toBe('Bridge to 10');
    });

    it('produces correct steps for 13-5', () => {
      const result = getStrategies(13, 5, '-');
      const bridging = result.find(s => s.id === STRATEGY_IDS.BRIDGING_SUB);
      expect(bridging.steps).toEqual([
        'Go to 10: 13-3=10',
        'Left: 5-3=2',
        'Take away: 10-2=?',
      ]);
    });

    it('triggers for 15-8 (ones digit 5 < subtrahend 8)', () => {
      const result = getStrategies(15, 8, '-');
      const bridging = result.find(s => s.id === STRATEGY_IDS.BRIDGING_SUB);
      expect(bridging).toBeDefined();
    });

    it('does NOT trigger for 15-3 (ones digit 5 >= subtrahend 3)', () => {
      const result = getStrategies(15, 3, '-');
      const bridging = result.find(s => s.id === STRATEGY_IDS.BRIDGING_SUB);
      expect(bridging).toBeUndefined();
    });

    it('does NOT trigger for 20-5 (ones digit is 0)', () => {
      const result = getStrategies(20, 5, '-');
      const bridging = result.find(s => s.id === STRATEGY_IDS.BRIDGING_SUB);
      expect(bridging).toBeUndefined();
    });

    it('does NOT trigger for 100-50 (ones digit is 0)', () => {
      const result = getStrategies(100, 50, '-');
      const bridging = result.find(s => s.id === STRATEGY_IDS.BRIDGING_SUB);
      expect(bridging).toBeUndefined();
    });
  });

  // ─── Doubles ──────────────────────────────────────────────────────────────

  describe('doubles', () => {
    it('triggers for 7+7 (addition)', () => {
      const result = getStrategies(7, 7, '+');
      const doubles = result.find(s => s.id === STRATEGY_IDS.DOUBLES);
      expect(doubles).toBeDefined();
      expect(doubles.name).toBe('Use Doubles');
    });

    it('produces correct steps for 7+7 addition', () => {
      const result = getStrategies(7, 7, '+');
      const doubles = result.find(s => s.id === STRATEGY_IDS.DOUBLES);
      expect(doubles.steps).toEqual([
        "It's a double!",
        'Think: 7+7=?',
      ]);
    });

    it('triggers for 5-5 (subtraction)', () => {
      const result = getStrategies(5, 5, '-');
      const doubles = result.find(s => s.id === STRATEGY_IDS.DOUBLES);
      expect(doubles).toBeDefined();
    });

    it('produces correct steps for 5-5 subtraction', () => {
      const result = getStrategies(5, 5, '-');
      const doubles = result.find(s => s.id === STRATEGY_IDS.DOUBLES);
      expect(doubles.steps).toEqual([
        'Half of 5 is ?',
        '5-?=?',
      ]);
    });

    it('does NOT trigger for 7+8 (not equal)', () => {
      const result = getStrategies(7, 8, '+');
      const doubles = result.find(s => s.id === STRATEGY_IDS.DOUBLES);
      expect(doubles).toBeUndefined();
    });

    it('triggers for 10+10', () => {
      const result = getStrategies(10, 10, '+');
      const doubles = result.find(s => s.id === STRATEGY_IDS.DOUBLES);
      expect(doubles).toBeDefined();
    });
  });

  // ─── Near Doubles ─────────────────────────────────────────────────────────

  describe('near_doubles', () => {
    it('triggers for 6+7 (differ by 1)', () => {
      const result = getStrategies(6, 7, '+');
      const nd = result.find(s => s.id === STRATEGY_IDS.NEAR_DOUBLES);
      expect(nd).toBeDefined();
      expect(nd.name).toBe('Near Doubles');
    });

    it('produces correct steps for 6+7 addition', () => {
      const result = getStrategies(6, 7, '+');
      const nd = result.find(s => s.id === STRATEGY_IDS.NEAR_DOUBLES);
      expect(nd.steps).toEqual([
        'Double 6: 6+6=12',
        'Add 1 more: 12+1=?',
      ]);
    });

    it('triggers for 7-6 (subtraction, differ by 1)', () => {
      const result = getStrategies(7, 6, '-');
      const nd = result.find(s => s.id === STRATEGY_IDS.NEAR_DOUBLES);
      expect(nd).toBeDefined();
    });

    it('produces correct steps for 7-6 subtraction', () => {
      const result = getStrategies(7, 6, '-');
      const nd = result.find(s => s.id === STRATEGY_IDS.NEAR_DOUBLES);
      expect(nd.steps).toEqual([
        'Half of 7 is ~3',
        'Adjust by 1: 7-6=?',
      ]);
    });

    it('uses exact half (no tilde) for even num1 in subtraction', () => {
      const result = getStrategies(6, 5, '-');
      const nd = result.find(s => s.id === STRATEGY_IDS.NEAR_DOUBLES);
      expect(nd.steps[0]).toBe('Half of 6 is 3');
    });

    it('does NOT trigger for 6+9 (differ by 3)', () => {
      const result = getStrategies(6, 9, '+');
      const nd = result.find(s => s.id === STRATEGY_IDS.NEAR_DOUBLES);
      expect(nd).toBeUndefined();
    });

    it('does NOT trigger for 5+5 (differ by 0 — that is doubles)', () => {
      const result = getStrategies(5, 5, '+');
      const nd = result.find(s => s.id === STRATEGY_IDS.NEAR_DOUBLES);
      expect(nd).toBeUndefined();
    });
  });

  // ─── Count On ─────────────────────────────────────────────────────────────

  describe('count_on', () => {
    it('triggers for 9+2 (min operand 2 <= 3)', () => {
      const result = getStrategies(9, 2, '+');
      const co = result.find(s => s.id === STRATEGY_IDS.COUNT_ON);
      expect(co).toBeDefined();
      expect(co.name).toBe('Count On');
    });

    it('produces correct steps for 9+2', () => {
      const result = getStrategies(9, 2, '+');
      const co = result.find(s => s.id === STRATEGY_IDS.COUNT_ON);
      expect(co.steps).toEqual([
        'Start at 9',
        'Count up 2: 10,?',
        'You land on ?',
      ]);
    });

    it('triggers for 3+9 (min operand is first, 3 <= 3)', () => {
      const result = getStrategies(3, 9, '+');
      const co = result.find(s => s.id === STRATEGY_IDS.COUNT_ON);
      expect(co).toBeDefined();
      // Should count from 9 (larger)
      expect(co.steps[0]).toBe('Start at 9');
    });

    it('triggers for 1+1 (min operand 1 <= 3)', () => {
      const result = getStrategies(1, 1, '+');
      const co = result.find(s => s.id === STRATEGY_IDS.COUNT_ON);
      expect(co).toBeDefined();
    });

    it('produces correct steps for count of 1', () => {
      const result = getStrategies(8, 1, '+');
      const co = result.find(s => s.id === STRATEGY_IDS.COUNT_ON);
      expect(co.steps[1]).toBe('Count up 1: ?');
    });

    it('does NOT trigger for 9+5 (min operand 5 > 3)', () => {
      const result = getStrategies(9, 5, '+');
      const co = result.find(s => s.id === STRATEGY_IDS.COUNT_ON);
      expect(co).toBeUndefined();
    });

    it('does NOT apply to subtraction operator', () => {
      const result = getStrategies(9, 2, '-');
      const co = result.find(s => s.id === STRATEGY_IDS.COUNT_ON);
      expect(co).toBeUndefined();
    });
  });

  // ─── Count Back ───────────────────────────────────────────────────────────

  describe('count_back', () => {
    it('triggers for 12-3 (subtrahend 3 <= 3)', () => {
      const result = getStrategies(12, 3, '-');
      const cb = result.find(s => s.id === STRATEGY_IDS.COUNT_BACK);
      expect(cb).toBeDefined();
      expect(cb.name).toBe('Count Back');
    });

    it('produces correct steps for 12-3', () => {
      const result = getStrategies(12, 3, '-');
      const cb = result.find(s => s.id === STRATEGY_IDS.COUNT_BACK);
      expect(cb.steps).toEqual([
        'Start at 12',
        'Count back 3: 11,10,?',
        'You land on ?',
      ]);
    });

    it('triggers for 7-1 (subtrahend 1 <= 3)', () => {
      const result = getStrategies(7, 1, '-');
      const cb = result.find(s => s.id === STRATEGY_IDS.COUNT_BACK);
      expect(cb).toBeDefined();
    });

    it('produces correct steps for count back of 1', () => {
      const result = getStrategies(7, 1, '-');
      const cb = result.find(s => s.id === STRATEGY_IDS.COUNT_BACK);
      expect(cb.steps[1]).toBe('Count back 1: ?');
    });

    it('does NOT trigger for 12-5 (subtrahend 5 > 3)', () => {
      const result = getStrategies(12, 5, '-');
      const cb = result.find(s => s.id === STRATEGY_IDS.COUNT_BACK);
      expect(cb).toBeUndefined();
    });

    it('does NOT apply to addition operator', () => {
      const result = getStrategies(12, 3, '+');
      const cb = result.find(s => s.id === STRATEGY_IDS.COUNT_BACK);
      expect(cb).toBeUndefined();
    });
  });

  // ─── Priority Ordering ────────────────────────────────────────────────────

  describe('priority ordering', () => {
    it('doubles appears before near-doubles', () => {
      // 1+1 triggers doubles (1===1) and count-on (min<=3)
      // but NOT near-doubles (diff===0, not 1)
      // Use a case where both can appear...
      // Actually doubles and near-doubles are mutually exclusive
      // (doubles: diff===0, near-doubles: diff===1)
      // So we test them separately in overlap cases
      const result = getStrategies(1, 1, '+');
      const ids = result.map(s => s.id);
      expect(ids[0]).toBe(STRATEGY_IDS.DOUBLES);
    });

    it('near-doubles appears before bridging for 6+7', () => {
      const result = getStrategies(6, 7, '+');
      const ids = result.map(s => s.id);
      const ndIdx = ids.indexOf(STRATEGY_IDS.NEAR_DOUBLES);
      const brIdx = ids.indexOf(STRATEGY_IDS.BRIDGING_ADD);
      expect(ndIdx).toBeLessThan(brIdx);
    });

    it('bridging appears before count-on', () => {
      // 8+3: bridging (8%10+3%10=11>10) and count-on (min=3<=3)
      const result = getStrategies(8, 3, '+');
      const ids = result.map(s => s.id);
      const brIdx = ids.indexOf(STRATEGY_IDS.BRIDGING_ADD);
      const coIdx = ids.indexOf(STRATEGY_IDS.COUNT_ON);
      expect(brIdx).toBeLessThan(coIdx);
    });

    it('bridging appears before count-back for subtraction', () => {
      // 12-3: bridging_sub (12%10=2<3) and count-back (3<=3)
      const result = getStrategies(12, 3, '-');
      const ids = result.map(s => s.id);
      const brIdx = ids.indexOf(STRATEGY_IDS.BRIDGING_SUB);
      const cbIdx = ids.indexOf(STRATEGY_IDS.COUNT_BACK);
      expect(brIdx).toBeLessThan(cbIdx);
    });

    it('full priority chain for 6+7: near-doubles > bridging > (no count-on)', () => {
      const result = getStrategies(6, 7, '+');
      const ids = result.map(s => s.id);
      expect(ids).toEqual([
        STRATEGY_IDS.NEAR_DOUBLES,
        STRATEGY_IDS.BRIDGING_ADD,
      ]);
    });
  });

  // ─── Multi-Strategy Overlap ───────────────────────────────────────────────

  describe('multi-strategy overlap', () => {
    it('6+7 triggers near-doubles and bridging (2 strategies)', () => {
      const result = getStrategies(6, 7, '+');
      expect(result).toHaveLength(2);
      expect(result[0].id).toBe(STRATEGY_IDS.NEAR_DOUBLES);
      expect(result[1].id).toBe(STRATEGY_IDS.BRIDGING_ADD);
    });

    it('8+3 triggers bridging and count-on (2 strategies)', () => {
      const result = getStrategies(8, 3, '+');
      expect(result).toHaveLength(2);
      expect(result[0].id).toBe(STRATEGY_IDS.BRIDGING_ADD);
      expect(result[1].id).toBe(STRATEGY_IDS.COUNT_ON);
    });

    it('1+1 triggers doubles and count-on (2 strategies)', () => {
      const result = getStrategies(1, 1, '+');
      expect(result).toHaveLength(2);
      expect(result[0].id).toBe(STRATEGY_IDS.DOUBLES);
      expect(result[1].id).toBe(STRATEGY_IDS.COUNT_ON);
    });

    it('2+3 triggers near-doubles and count-on (2 strategies)', () => {
      // near-doubles: |2-3|=1, count-on: min(2,3)=2<=3
      const result = getStrategies(2, 3, '+');
      expect(result).toHaveLength(2);
      expect(result[0].id).toBe(STRATEGY_IDS.NEAR_DOUBLES);
      expect(result[1].id).toBe(STRATEGY_IDS.COUNT_ON);
    });

    it('12-3 triggers bridging-sub and count-back (2 strategies)', () => {
      const result = getStrategies(12, 3, '-');
      expect(result).toHaveLength(2);
      expect(result[0].id).toBe(STRATEGY_IDS.BRIDGING_SUB);
      expect(result[1].id).toBe(STRATEGY_IDS.COUNT_BACK);
    });
  });

  // ─── Multiplication Strategies ─────────────────────────────────────────────

  describe('repeated_addition', () => {
    it('triggers for 3*4 (min operand 3 <= 5)', () => {
      const result = getStrategies(3, 4, '*');
      const ra = result.find(s => s.id === STRATEGY_IDS.REPEATED_ADDITION);
      expect(ra).toBeDefined();
      expect(ra.name).toBe('Repeated Addition');
    });

    it('produces correct steps for 3*4 (skip counting 3+3+3+3)', () => {
      const result = getStrategies(3, 4, '*');
      const ra = result.find(s => s.id === STRATEGY_IDS.REPEATED_ADDITION);
      expect(ra.steps).toEqual([
        '4 groups of 3',
        '3+3+3+3=?',
      ]);
    });

    it('picks the smaller operand as base for 5*8', () => {
      const result = getStrategies(5, 8, '*');
      const ra = result.find(s => s.id === STRATEGY_IDS.REPEATED_ADDITION);
      expect(ra).toBeDefined();
      expect(ra.steps[0]).toBe('8 groups of 5');
      expect(ra.steps[1]).toBe('5+5+5+5+5+5+5+5=?');
    });

    it('triggers for 1*9 (min operand 1 <= 5)', () => {
      const result = getStrategies(1, 9, '*');
      const ra = result.find(s => s.id === STRATEGY_IDS.REPEATED_ADDITION);
      expect(ra).toBeDefined();
    });

    it('does NOT trigger via detector for 7*8 (min operand 7 > 5), but fires as universal fallback', () => {
      const result = getStrategies(7, 8, '*');
      const ra = result.find(s => s.id === STRATEGY_IDS.REPEATED_ADDITION);
      // The detector does not match (min=7 > 5), but the universal fallback kicks in
      expect(ra).toBeDefined();
      // Should be the only strategy (no times-ten, no doubles-mult, no commutative since 8>7)
      expect(result).toHaveLength(1);
    });
  });

  describe('commutative_mult', () => {
    it('triggers for 7*3 (num2 < num1)', () => {
      const result = getStrategies(7, 3, '*');
      const cm = result.find(s => s.id === STRATEGY_IDS.COMMUTATIVE_MULT);
      expect(cm).toBeDefined();
      expect(cm.name).toBe('Swap the Numbers');
    });

    it('produces correct steps for 7*3', () => {
      const result = getStrategies(7, 3, '*');
      const cm = result.find(s => s.id === STRATEGY_IDS.COMMUTATIVE_MULT);
      expect(cm.steps).toEqual([
        "Don't know 7x3?",
        'Try 3x7=?',
      ]);
    });

    it('does NOT trigger for 3*7 (num2 > num1)', () => {
      const result = getStrategies(3, 7, '*');
      const cm = result.find(s => s.id === STRATEGY_IDS.COMMUTATIVE_MULT);
      expect(cm).toBeUndefined();
    });

    it('does NOT trigger for 4*4 (num2 === num1)', () => {
      const result = getStrategies(4, 4, '*');
      const cm = result.find(s => s.id === STRATEGY_IDS.COMMUTATIVE_MULT);
      expect(cm).toBeUndefined();
    });
  });

  describe('times_ten', () => {
    it('triggers for 6*10', () => {
      const result = getStrategies(6, 10, '*');
      const tt = result.find(s => s.id === STRATEGY_IDS.TIMES_TEN);
      expect(tt).toBeDefined();
      expect(tt.name).toBe('Times Ten');
    });

    it('triggers for 10*4', () => {
      const result = getStrategies(10, 4, '*');
      const tt = result.find(s => s.id === STRATEGY_IDS.TIMES_TEN);
      expect(tt).toBeDefined();
    });

    it('produces correct steps for 6*10', () => {
      const result = getStrategies(6, 10, '*');
      const tt = result.find(s => s.id === STRATEGY_IDS.TIMES_TEN);
      expect(tt.steps).toEqual([
        'Any numberx10: add a zero!',
        '6x10=?',
      ]);
    });

    it('produces correct steps for 10*4', () => {
      const result = getStrategies(10, 4, '*');
      const tt = result.find(s => s.id === STRATEGY_IDS.TIMES_TEN);
      expect(tt.steps).toEqual([
        'Any numberx10: add a zero!',
        '4x10=?',
      ]);
    });

    it('does NOT trigger for 5*4 (no 10)', () => {
      const result = getStrategies(5, 4, '*');
      const tt = result.find(s => s.id === STRATEGY_IDS.TIMES_TEN);
      expect(tt).toBeUndefined();
    });
  });

  describe('doubles_mult', () => {
    it('triggers for 5*2 (one operand is 2)', () => {
      const result = getStrategies(5, 2, '*');
      const dm = result.find(s => s.id === STRATEGY_IDS.DOUBLES_MULT);
      expect(dm).toBeDefined();
      expect(dm.name).toBe('Use Doubles');
    });

    it('triggers for 2*8 (first operand is 2)', () => {
      const result = getStrategies(2, 8, '*');
      const dm = result.find(s => s.id === STRATEGY_IDS.DOUBLES_MULT);
      expect(dm).toBeDefined();
    });

    it('produces correct steps for 5*2', () => {
      const result = getStrategies(5, 2, '*');
      const dm = result.find(s => s.id === STRATEGY_IDS.DOUBLES_MULT);
      expect(dm.steps).toEqual([
        'x2 = double it!',
        'Double 5=?',
      ]);
    });

    it('produces correct steps for 2*8', () => {
      const result = getStrategies(2, 8, '*');
      const dm = result.find(s => s.id === STRATEGY_IDS.DOUBLES_MULT);
      expect(dm.steps).toEqual([
        'x2 = double it!',
        'Double 8=?',
      ]);
    });

    it('does NOT trigger for 3*4 (no 2)', () => {
      const result = getStrategies(3, 4, '*');
      const dm = result.find(s => s.id === STRATEGY_IDS.DOUBLES_MULT);
      expect(dm).toBeUndefined();
    });
  });

  // ─── Division Strategies ──────────────────────────────────────────────────

  describe('inverse_mult', () => {
    it('always triggers for division (universal fallback)', () => {
      const result = getStrategies(12, 3, '/');
      const im = result.find(s => s.id === STRATEGY_IDS.INVERSE_MULT);
      expect(im).toBeDefined();
      expect(im.name).toBe('Think Multiplication');
    });

    it('produces correct steps for 12/3', () => {
      const result = getStrategies(12, 3, '/');
      const im = result.find(s => s.id === STRATEGY_IDS.INVERSE_MULT);
      expect(im.steps).toEqual([
        '12 / 3 = ?',
        'Think: 3 x ? = 12',
      ]);
    });

    it('triggers for 20/5', () => {
      const result = getStrategies(20, 5, '/');
      const im = result.find(s => s.id === STRATEGY_IDS.INVERSE_MULT);
      expect(im).toBeDefined();
    });

    it('triggers alongside halving for 12/2', () => {
      const result = getStrategies(12, 2, '/');
      const im = result.find(s => s.id === STRATEGY_IDS.INVERSE_MULT);
      expect(im).toBeDefined();
      const hv = result.find(s => s.id === STRATEGY_IDS.HALVING);
      expect(hv).toBeDefined();
    });
  });

  describe('halving', () => {
    it('triggers for 12/2 (divisor is 2)', () => {
      const result = getStrategies(12, 2, '/');
      const hv = result.find(s => s.id === STRATEGY_IDS.HALVING);
      expect(hv).toBeDefined();
      expect(hv.name).toBe('Halving');
    });

    it('produces correct steps for 12/2', () => {
      const result = getStrategies(12, 2, '/');
      const hv = result.find(s => s.id === STRATEGY_IDS.HALVING);
      expect(hv.steps).toEqual([
        'Divide by 2 = half!',
        'Half of 12 = ?',
      ]);
    });

    it('does NOT trigger for 12/3 (divisor is not 2)', () => {
      const result = getStrategies(12, 3, '/');
      const hv = result.find(s => s.id === STRATEGY_IDS.HALVING);
      expect(hv).toBeUndefined();
    });

    it('triggers for 8/2', () => {
      const result = getStrategies(8, 2, '/');
      const hv = result.find(s => s.id === STRATEGY_IDS.HALVING);
      expect(hv).toBeDefined();
      expect(hv.steps[1]).toBe('Half of 8 = ?');
    });
  });

  // ─── Multiplication/Division Priority & Overlap ───────────────────────────

  describe('multiplication priority', () => {
    it('times-ten appears first for 10*5', () => {
      const result = getStrategies(10, 5, '*');
      expect(result[0].id).toBe(STRATEGY_IDS.TIMES_TEN);
    });

    it('doubles-mult appears before repeated-addition for 2*4', () => {
      const result = getStrategies(2, 4, '*');
      const ids = result.map(s => s.id);
      const dmIdx = ids.indexOf(STRATEGY_IDS.DOUBLES_MULT);
      const raIdx = ids.indexOf(STRATEGY_IDS.REPEATED_ADDITION);
      expect(dmIdx).toBeLessThan(raIdx);
    });

    it('times-ten + doubles-mult + repeated-addition all trigger for 10*2', () => {
      const result = getStrategies(10, 2, '*');
      const ids = result.map(s => s.id);
      expect(ids).toContain(STRATEGY_IDS.TIMES_TEN);
      expect(ids).toContain(STRATEGY_IDS.DOUBLES_MULT);
      expect(ids).toContain(STRATEGY_IDS.REPEATED_ADDITION);
    });

    it('7*8 gets repeated-addition fallback (both > 5, but fallback kicks in)', () => {
      const result = getStrategies(7, 8, '*');
      // commutative triggers (8 > 7? no, num2=8 > num1=7 so commutative does NOT trigger)
      // But 7 > 8 is false, so commutative does not trigger. Fallback repeated addition.
      expect(result.length).toBeGreaterThanOrEqual(1);
      expect(result.some(s => s.id === STRATEGY_IDS.REPEATED_ADDITION)).toBe(true);
    });

    it('8*7 gets commutative only (no repeated-addition fallback since commutative matched)', () => {
      const result = getStrategies(8, 7, '*');
      const ids = result.map(s => s.id);
      expect(ids).toContain(STRATEGY_IDS.COMMUTATIVE_MULT);
      // repeated-addition does NOT fire as fallback because commutative already matched
      expect(ids).not.toContain(STRATEGY_IDS.REPEATED_ADDITION);
    });
  });

  describe('division priority', () => {
    it('halving appears before inverse-mult for x/2', () => {
      const result = getStrategies(12, 2, '/');
      const ids = result.map(s => s.id);
      const hvIdx = ids.indexOf(STRATEGY_IDS.HALVING);
      const imIdx = ids.indexOf(STRATEGY_IDS.INVERSE_MULT);
      expect(hvIdx).toBeLessThan(imIdx);
    });

    it('12/3 has only inverse-mult (divisor != 2)', () => {
      const result = getStrategies(12, 3, '/');
      expect(result).toHaveLength(1);
      expect(result[0].id).toBe(STRATEGY_IDS.INVERSE_MULT);
    });

    it('12/2 has halving + inverse-mult (2 strategies)', () => {
      const result = getStrategies(12, 2, '/');
      expect(result).toHaveLength(2);
    });
  });

  // ─── Multiplication/Division Guarantees ───────────────────────────────────

  describe('mult/div coverage guarantee', () => {
    it('every multiplication problem gets >= 1 strategy', () => {
      for (let a = 1; a <= 10; a++) {
        for (let b = 1; b <= 10; b++) {
          const result = getStrategies(a, b, '*');
          expect(result.length).toBeGreaterThanOrEqual(1);
        }
      }
    });

    it('every division problem gets >= 1 strategy', () => {
      for (let b = 1; b <= 10; b++) {
        for (let a = b; a <= b * 10; a += b) {
          const result = getStrategies(a, b, '/');
          expect(result.length).toBeGreaterThanOrEqual(1);
        }
      }
    });
  });

  // ─── Multiplication/Division Step Constraints ─────────────────────────────

  describe('mult/div step constraints', () => {
    it('step count never exceeds 3 per multiplication strategy', () => {
      const testCases = [
        [3, 4], [5, 2], [10, 7], [7, 3], [2, 8], [6, 10], [1, 9], [8, 7],
      ];
      for (const [n1, n2] of testCases) {
        const strategies = getStrategies(n1, n2, '*');
        for (const s of strategies) {
          expect(s.steps.length).toBeLessThanOrEqual(3);
        }
      }
    });

    it('step count never exceeds 3 per division strategy', () => {
      const testCases = [
        [12, 3], [20, 5], [8, 2], [10, 2], [15, 3], [18, 6],
      ];
      for (const [n1, n2] of testCases) {
        const strategies = getStrategies(n1, n2, '/');
        for (const s of strategies) {
          expect(s.steps.length).toBeLessThanOrEqual(3);
        }
      }
    });

    it('step text never contains the final answer (multiplication)', () => {
      const testCases = [
        [3, 4], [5, 2], [6, 10], [7, 3], [2, 8],
      ];
      for (const [n1, n2] of testCases) {
        const answer = n1 * n2;
        const strategies = getStrategies(n1, n2, '*');
        for (const s of strategies) {
          for (const step of s.steps) {
            expect(step).not.toMatch(new RegExp(`=${answer}(?:\\s|$|,)`));
            expect(step).not.toMatch(new RegExp(`=${answer}$`));
          }
        }
      }
    });

    it('step text never contains the final answer (division)', () => {
      const testCases = [
        [12, 3], [20, 5], [8, 2], [15, 3],
      ];
      for (const [n1, n2] of testCases) {
        const answer = n1 / n2;
        const strategies = getStrategies(n1, n2, '/');
        for (const s of strategies) {
          for (const step of s.steps) {
            expect(step).not.toMatch(new RegExp(`=${answer}(?:\\s|$|,)`));
            expect(step).not.toMatch(new RegExp(`=${answer}$`));
          }
        }
      }
    });

    it('each mult/div strategy result has id, name, and steps array', () => {
      const testCases = [
        [3, 4, '*'], [12, 3, '/'], [5, 2, '*'], [8, 2, '/'],
      ];
      for (const [n1, n2, op] of testCases) {
        const result = getStrategies(n1, n2, op);
        for (const strategy of result) {
          expect(strategy).toHaveProperty('id');
          expect(strategy).toHaveProperty('name');
          expect(strategy).toHaveProperty('steps');
          expect(Array.isArray(strategy.steps)).toBe(true);
          expect(typeof strategy.id).toBe('string');
          expect(typeof strategy.name).toBe('string');
        }
      }
    });
  });

  // ─── Edge Cases ───────────────────────────────────────────────────────────

  describe('edge cases', () => {
    it('1+1 returns doubles and count-on', () => {
      const result = getStrategies(1, 1, '+');
      const ids = result.map(s => s.id);
      expect(ids).toContain(STRATEGY_IDS.DOUBLES);
      expect(ids).toContain(STRATEGY_IDS.COUNT_ON);
    });

    it('10+10 returns only doubles (no bridging, no count-on)', () => {
      const result = getStrategies(10, 10, '+');
      expect(result).toHaveLength(1);
      expect(result[0].id).toBe(STRATEGY_IDS.DOUBLES);
    });

    it('50+50 returns only doubles', () => {
      const result = getStrategies(50, 50, '+');
      expect(result).toHaveLength(1);
      expect(result[0].id).toBe(STRATEGY_IDS.DOUBLES);
    });

    it('num1 === num2 subtraction returns doubles and count-back when num2<=3', () => {
      const result = getStrategies(3, 3, '-');
      const ids = result.map(s => s.id);
      expect(ids).toContain(STRATEGY_IDS.DOUBLES);
      expect(ids).toContain(STRATEGY_IDS.COUNT_BACK);
    });

    it('5-5 returns only doubles (no bridging, no count-back)', () => {
      const result = getStrategies(5, 5, '-');
      expect(result).toHaveLength(1);
      expect(result[0].id).toBe(STRATEGY_IDS.DOUBLES);
    });

    it('multiples of 10 addition (20+30) gets count-on fallback', () => {
      const result = getStrategies(20, 30, '+');
      // No doubles, near-doubles, or bridging, but count-on fallback kicks in
      expect(result).toHaveLength(1);
      expect(result[0].id).toBe(STRATEGY_IDS.COUNT_ON);
    });

    it('multiples of 10 where min<=3 still get count-on', () => {
      const result = getStrategies(20, 3, '+');
      expect(result.length).toBeGreaterThanOrEqual(1);
      expect(result.some(s => s.id === STRATEGY_IDS.COUNT_ON)).toBe(true);
    });

    it('each strategy result has id, name, and steps array', () => {
      const result = getStrategies(8, 5, '+');
      for (const strategy of result) {
        expect(strategy).toHaveProperty('id');
        expect(strategy).toHaveProperty('name');
        expect(strategy).toHaveProperty('steps');
        expect(Array.isArray(strategy.steps)).toBe(true);
        expect(typeof strategy.id).toBe('string');
        expect(typeof strategy.name).toBe('string');
      }
    });
  });

  // ─── Step Text Constraints ────────────────────────────────────────────────

  describe('step text constraints', () => {
    it('step count never exceeds 3 per strategy', () => {
      const testCases = [
        [8, 5, '+'], [13, 5, '-'], [7, 7, '+'], [6, 7, '+'],
        [9, 2, '+'], [12, 3, '-'], [5, 5, '-'], [15, 8, '-'],
        [1, 1, '+'], [50, 50, '+'], [99, 3, '-'], [97, 3, '+'],
      ];
      for (const [n1, n2, op] of testCases) {
        const strategies = getStrategies(n1, n2, op);
        for (const s of strategies) {
          expect(s.steps.length).toBeLessThanOrEqual(3);
        }
      }
    });

    it('step length never exceeds 30 characters', () => {
      const testCases = [
        [8, 5, '+'], [13, 5, '-'], [7, 7, '+'], [6, 7, '+'],
        [9, 2, '+'], [12, 3, '-'], [99, 3, '+'], [97, 3, '-'],
        [50, 50, '+'], [100, 3, '-'], [98, 5, '+'], [15, 8, '-'],
      ];
      for (const [n1, n2, op] of testCases) {
        const strategies = getStrategies(n1, n2, op);
        for (const s of strategies) {
          for (const step of s.steps) {
            expect(step.length).toBeLessThanOrEqual(30);
          }
        }
      }
    });

    it('step text never contains the final answer (addition)', () => {
      const testCases = [
        [8, 5, '+'], [7, 7, '+'], [6, 7, '+'], [9, 2, '+'],
        [3, 9, '+'], [1, 1, '+'], [17, 5, '+'], [8, 3, '+'],
      ];
      for (const [n1, n2, op] of testCases) {
        const answer = n1 + n2;
        const strategies = getStrategies(n1, n2, op);
        for (const s of strategies) {
          for (const step of s.steps) {
            // The answer string should not appear as a standalone number at the end
            // after an = sign (i.e., "=answer" should not appear, but "=?" is OK)
            expect(step).not.toMatch(new RegExp(`=${answer}(?:\\s|$|,)`));
            expect(step).not.toMatch(new RegExp(`=${answer}$`));
          }
        }
      }
    });

    it('step text never contains the final answer (subtraction)', () => {
      const testCases = [
        [13, 5, '-'], [15, 8, '-'], [5, 5, '-'], [7, 6, '-'],
        [12, 3, '-'], [7, 1, '-'], [20, 3, '-'],
      ];
      for (const [n1, n2, op] of testCases) {
        const answer = n1 - n2;
        const strategies = getStrategies(n1, n2, op);
        for (const s of strategies) {
          for (const step of s.steps) {
            expect(step).not.toMatch(new RegExp(`=${answer}(?:\\s|$|,)`));
            expect(step).not.toMatch(new RegExp(`=${answer}$`));
          }
        }
      }
    });
  });

  // ─── Property-Based: Every + or - has >= 1 Strategy ───────────────────────

  describe('property-based: coverage guarantee', () => {
    it('every addition problem in levels 5-9 has at least 1 strategy (200+ problems)', () => {
      let count = 0;
      for (let level = 5; level <= 9; level++) {
        const config = getLevelConfig(level);
        if (!config.operators.includes('+')) continue;
        for (let i = 0; i < 50; i++) {
          const num1 = config.multiplesOf
            ? Math.ceil(config.minNumber / config.multiplesOf) * config.multiplesOf
              + Math.floor(Math.random() * ((config.maxNumber - config.minNumber) / config.multiplesOf)) * config.multiplesOf
            : getRandomInt(config.minNumber, config.maxNumber);
          const num2 = config.multiplesOf
            ? Math.ceil(config.minNumber / config.multiplesOf) * config.multiplesOf
              + Math.floor(Math.random() * ((config.maxNumber - config.minNumber) / config.multiplesOf)) * config.multiplesOf
            : getRandomInt(config.minNumber, config.maxNumber);
          const result = getStrategies(num1, num2, '+');
          expect(result.length).toBeGreaterThanOrEqual(1);
          count++;
        }
      }
      expect(count).toBeGreaterThanOrEqual(200);
    });

    it('every subtraction problem in levels 5-9 has at least 1 strategy (200+ problems)', () => {
      let count = 0;
      for (let level = 5; level <= 9; level++) {
        const config = getLevelConfig(level);
        if (!config.operators.includes('-')) continue;
        for (let i = 0; i < 50; i++) {
          let num1 = config.multiplesOf
            ? Math.ceil(config.minNumber / config.multiplesOf) * config.multiplesOf
              + Math.floor(Math.random() * ((config.maxNumber - config.minNumber) / config.multiplesOf)) * config.multiplesOf
            : getRandomInt(config.minNumber, config.maxNumber);
          let num2 = config.multiplesOf
            ? Math.ceil(config.minNumber / config.multiplesOf) * config.multiplesOf
              + Math.floor(Math.random() * ((num1 - config.minNumber) / config.multiplesOf)) * config.multiplesOf
            : getRandomInt(config.minNumber, num1);
          // Ensure num1 >= num2
          if (num1 < num2) [num1, num2] = [num2, num1];
          const result = getStrategies(num1, num2, '-');
          expect(result.length).toBeGreaterThanOrEqual(1);
          count++;
        }
      }
      expect(count).toBeGreaterThanOrEqual(200);
    });
  });

  // ─── Property-Based: Arithmetic Correctness ───────────────────────────────

  describe('property-based: arithmetic correctness', () => {
    it('bridging_add intermediate math is correct across 100+ random problems', () => {
      let verified = 0;
      for (let i = 0; i < 200; i++) {
        const num1 = getRandomInt(1, 99);
        const num2 = getRandomInt(1, 99);
        if ((num1 % 10) + (num2 % 10) <= 10) continue;

        const result = getStrategies(num1, num2, '+');
        const bridging = result.find(s => s.id === STRATEGY_IDS.BRIDGING_ADD);
        expect(bridging).toBeDefined();

        // Parse intermediate values from step text
        const step1Match = bridging.steps[0].match(/(\d+)\+(\d+)=(\d+)/);
        expect(step1Match).not.toBeNull();
        const [, base, complement, tens] = step1Match.map(Number);
        expect(base + complement).toBe(tens);

        const step2Match = bridging.steps[1].match(/(\d+)-(\d+)=(\d+)/);
        expect(step2Match).not.toBeNull();
        const [, addend, comp2, remainder] = step2Match.map(Number);
        expect(addend - comp2).toBe(remainder);

        // Verify final equation adds up to the correct answer
        expect(tens + remainder).toBe(num1 + num2);
        verified++;
      }
      expect(verified).toBeGreaterThanOrEqual(50);
    });

    it('bridging_sub intermediate math is correct across 100+ random problems', () => {
      let verified = 0;
      for (let i = 0; i < 200; i++) {
        const num1 = getRandomInt(11, 99);
        const onesDigit = num1 % 10;
        if (onesDigit === 0) continue;
        const num2 = getRandomInt(onesDigit + 1, Math.min(num1, 20));
        if (onesDigit >= num2) continue;

        const result = getStrategies(num1, num2, '-');
        const bridging = result.find(s => s.id === STRATEGY_IDS.BRIDGING_SUB);
        if (!bridging) continue;

        // Parse intermediate values
        const step1Match = bridging.steps[0].match(/(\d+)-(\d+)=(\d+)/);
        expect(step1Match).not.toBeNull();
        const [, minuend, sub, tens] = step1Match.map(Number);
        expect(minuend - sub).toBe(tens);

        const step2Match = bridging.steps[1].match(/(\d+)-(\d+)=(\d+)/);
        expect(step2Match).not.toBeNull();
        const [, subtrahend, ones, remainder] = step2Match.map(Number);
        expect(subtrahend - ones).toBe(remainder);

        // Verify final equation
        expect(tens - remainder).toBe(num1 - num2);
        verified++;
      }
      expect(verified).toBeGreaterThanOrEqual(50);
    });

    it('near_doubles_add intermediate math is correct', () => {
      const cases = [
        [6, 7], [7, 8], [3, 4], [9, 10], [14, 15],
      ];
      for (const [n1, n2] of cases) {
        const result = getStrategies(n1, n2, '+');
        const nd = result.find(s => s.id === STRATEGY_IDS.NEAR_DOUBLES);
        expect(nd).toBeDefined();

        const step1Match = nd.steps[0].match(/(\d+)\+(\d+)=(\d+)/);
        expect(step1Match).not.toBeNull();
        const [, a, b, sum] = step1Match.map(Number);
        expect(a + b).toBe(sum);
        expect(a).toBe(b); // It's a double

        // Verify sum + 1 = actual answer
        expect(sum + 1).toBe(n1 + n2);
      }
    });

    it('zero arithmetic errors across 500+ random addition problems', () => {
      let totalChecks = 0;
      for (let i = 0; i < 500; i++) {
        const num1 = getRandomInt(1, 50);
        const num2 = getRandomInt(1, 50);
        const strategies = getStrategies(num1, num2, '+');
        for (const s of strategies) {
          for (const step of s.steps) {
            // Find all "X+Y=Z" patterns and verify
            const addMatches = [...step.matchAll(/(\d+)\+(\d+)=(\d+)/g)];
            for (const m of addMatches) {
              expect(Number(m[1]) + Number(m[2])).toBe(Number(m[3]));
            }
            // Find all "X-Y=Z" patterns and verify
            const subMatches = [...step.matchAll(/(\d+)-(\d+)=(\d+)/g)];
            for (const m of subMatches) {
              expect(Number(m[1]) - Number(m[2])).toBe(Number(m[3]));
            }
            totalChecks++;
          }
        }
      }
      expect(totalChecks).toBeGreaterThanOrEqual(500);
    });

    it('zero arithmetic errors across 500+ random subtraction problems', () => {
      let totalChecks = 0;
      for (let i = 0; i < 500; i++) {
        let num1 = getRandomInt(1, 50);
        let num2 = getRandomInt(1, 50);
        if (num1 < num2) [num1, num2] = [num2, num1];
        const strategies = getStrategies(num1, num2, '-');
        for (const s of strategies) {
          for (const step of s.steps) {
            const addMatches = [...step.matchAll(/(\d+)\+(\d+)=(\d+)/g)];
            for (const m of addMatches) {
              expect(Number(m[1]) + Number(m[2])).toBe(Number(m[3]));
            }
            const subMatches = [...step.matchAll(/(\d+)-(\d+)=(\d+)/g)];
            for (const m of subMatches) {
              expect(Number(m[1]) - Number(m[2])).toBe(Number(m[3]));
            }
            totalChecks++;
          }
        }
      }
      expect(totalChecks).toBeGreaterThanOrEqual(500);
    });
  });

  // ─── Universal Fallback Guarantee ─────────────────────────────────────────

  describe('universal fallback', () => {
    it('count-on triggers for any addition with operand <= 3', () => {
      for (let small = 1; small <= 3; small++) {
        for (let big = 1; big <= 20; big++) {
          const result = getStrategies(big, small, '+');
          expect(result.some(s => s.id === STRATEGY_IDS.COUNT_ON)).toBe(true);
        }
      }
    });

    it('count-back triggers for any subtraction with subtrahend <= 3', () => {
      for (let sub = 1; sub <= 3; sub++) {
        for (let big = sub; big <= 20; big++) {
          const result = getStrategies(big, sub, '-');
          expect(result.some(s => s.id === STRATEGY_IDS.COUNT_BACK)).toBe(true);
        }
      }
    });
  });
});
