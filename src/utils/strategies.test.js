import { describe, it, expect } from 'vitest';
import { getStrategies, STRATEGY_IDS } from './strategies';
import { getLevelConfig } from '../config/levels';
import { getRandomInt } from './mathProblems';

describe('strategies', () => {
  // ─── STRATEGY_IDS export ──────────────────────────────────────────────────

  describe('STRATEGY_IDS', () => {
    it('exports all 6 strategy identifiers', () => {
      expect(STRATEGY_IDS).toEqual({
        BRIDGING_ADD: 'bridging_add',
        BRIDGING_SUB: 'bridging_sub',
        DOUBLES: 'doubles',
        NEAR_DOUBLES: 'near_doubles',
        COUNT_ON: 'count_on',
        COUNT_BACK: 'count_back',
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
      expect(bridging.nameKey).toBe('strategy.names.bridging_add');
    });

    it('produces correct step keys and params for 8+5', () => {
      const result = getStrategies(8, 5, '+');
      const bridging = result.find(s => s.id === STRATEGY_IDS.BRIDGING_ADD);
      expect(bridging.steps).toEqual([
        { key: 'strategy.bridgingAdd.step1', params: { tens: 10, base: 8, complement: 2 } },
        { key: 'strategy.bridgingAdd.step2', params: { addend: 5, complement: 2, remainder: 3 } },
        { key: 'strategy.bridgingAdd.step3', params: { tens: 10, remainder: 3 } },
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
      expect(bridging.steps[0]).toEqual({
        key: 'strategy.bridgingAdd.step1',
        params: { tens: 20, base: 17, complement: 3 },
      });
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
      expect(bridging.steps[0].params.base).toBe(8);
      expect(bridging.steps[0].params.complement).toBe(2);
      expect(bridging.steps[0].params.tens).toBe(10);
    });
  });

  // ─── Bridging Subtraction ─────────────────────────────────────────────────

  describe('bridging_sub', () => {
    it('triggers for 13-5 (ones digit 3 < subtrahend 5)', () => {
      const result = getStrategies(13, 5, '-');
      const bridging = result.find(s => s.id === STRATEGY_IDS.BRIDGING_SUB);
      expect(bridging).toBeDefined();
      expect(bridging.nameKey).toBe('strategy.names.bridging_sub');
    });

    it('produces correct step keys and params for 13-5', () => {
      const result = getStrategies(13, 5, '-');
      const bridging = result.find(s => s.id === STRATEGY_IDS.BRIDGING_SUB);
      expect(bridging.steps).toEqual([
        { key: 'strategy.bridgingSub.step1', params: { tens: 10, num1: 13, onesOfNum1: 3 } },
        { key: 'strategy.bridgingSub.step2', params: { num2: 5, onesOfNum1: 3, remainder: 2 } },
        { key: 'strategy.bridgingSub.step3', params: { tens: 10, remainder: 2 } },
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
      expect(doubles.nameKey).toBe('strategy.names.doubles');
    });

    it('produces correct step keys and params for 7+7 addition', () => {
      const result = getStrategies(7, 7, '+');
      const doubles = result.find(s => s.id === STRATEGY_IDS.DOUBLES);
      expect(doubles.steps).toEqual([
        { key: 'strategy.doublesAdd.step1', params: {} },
        { key: 'strategy.doublesAdd.step2', params: { num1: 7 } },
      ]);
    });

    it('triggers for 5-5 (subtraction)', () => {
      const result = getStrategies(5, 5, '-');
      const doubles = result.find(s => s.id === STRATEGY_IDS.DOUBLES);
      expect(doubles).toBeDefined();
    });

    it('produces correct step keys and params for 5-5 subtraction', () => {
      const result = getStrategies(5, 5, '-');
      const doubles = result.find(s => s.id === STRATEGY_IDS.DOUBLES);
      expect(doubles.steps).toEqual([
        { key: 'strategy.doublesSub.step1', params: { num1: 5 } },
        { key: 'strategy.doublesSub.step2', params: { num1: 5 } },
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
      expect(nd.nameKey).toBe('strategy.names.near_doubles');
    });

    it('produces correct step keys and params for 6+7 addition', () => {
      const result = getStrategies(6, 7, '+');
      const nd = result.find(s => s.id === STRATEGY_IDS.NEAR_DOUBLES);
      expect(nd.steps).toEqual([
        { key: 'strategy.nearDoublesAdd.step1', params: { smaller: 6, doubleVal: 12 } },
        { key: 'strategy.nearDoublesAdd.step2', params: { doubleVal: 12 } },
      ]);
    });

    it('triggers for 7-6 (subtraction, differ by 1)', () => {
      const result = getStrategies(7, 6, '-');
      const nd = result.find(s => s.id === STRATEGY_IDS.NEAR_DOUBLES);
      expect(nd).toBeDefined();
    });

    it('produces correct step keys and params for 7-6 subtraction', () => {
      const result = getStrategies(7, 6, '-');
      const nd = result.find(s => s.id === STRATEGY_IDS.NEAR_DOUBLES);
      expect(nd.steps).toEqual([
        { key: 'strategy.nearDoublesSub.step1', params: { num1: 7, approx: '~', half: 3 } },
        { key: 'strategy.nearDoublesSub.step2', params: { num1: 7, num2: 6 } },
      ]);
    });

    it('uses exact half (no tilde) for even num1 in subtraction', () => {
      const result = getStrategies(6, 5, '-');
      const nd = result.find(s => s.id === STRATEGY_IDS.NEAR_DOUBLES);
      expect(nd.steps[0].params.approx).toBe('');
      expect(nd.steps[0].params.half).toBe(3);
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
      expect(co.nameKey).toBe('strategy.names.count_on');
    });

    it('produces correct step keys and params for 9+2', () => {
      const result = getStrategies(9, 2, '+');
      const co = result.find(s => s.id === STRATEGY_IDS.COUNT_ON);
      expect(co.steps).toEqual([
        { key: 'strategy.countOn.step1', params: { larger: 9 } },
        { key: 'strategy.countOn.step2enum', params: { smaller: 2, seqParts: '10,?' } },
        { key: 'strategy.countOn.step3', params: {} },
      ]);
    });

    it('triggers for 3+9 (min operand is first, 3 <= 3)', () => {
      const result = getStrategies(3, 9, '+');
      const co = result.find(s => s.id === STRATEGY_IDS.COUNT_ON);
      expect(co).toBeDefined();
      // Should count from 9 (larger)
      expect(co.steps[0].params.larger).toBe(9);
    });

    it('triggers for 1+1 (min operand 1 <= 3)', () => {
      const result = getStrategies(1, 1, '+');
      const co = result.find(s => s.id === STRATEGY_IDS.COUNT_ON);
      expect(co).toBeDefined();
    });

    it('produces correct step keys for count of 1', () => {
      const result = getStrategies(8, 1, '+');
      const co = result.find(s => s.id === STRATEGY_IDS.COUNT_ON);
      expect(co.steps[1].key).toBe('strategy.countOn.step2enum');
      expect(co.steps[1].params.seqParts).toBe('?');
      expect(co.steps[1].params.smaller).toBe(1);
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
      expect(cb.nameKey).toBe('strategy.names.count_back');
    });

    it('produces correct step keys and params for 12-3', () => {
      const result = getStrategies(12, 3, '-');
      const cb = result.find(s => s.id === STRATEGY_IDS.COUNT_BACK);
      expect(cb.steps).toEqual([
        { key: 'strategy.countBack.step1', params: { num1: 12 } },
        { key: 'strategy.countBack.step2enum', params: { num2: 3, seqParts: '11,10,?' } },
        { key: 'strategy.countBack.step3', params: {} },
      ]);
    });

    it('triggers for 7-1 (subtrahend 1 <= 3)', () => {
      const result = getStrategies(7, 1, '-');
      const cb = result.find(s => s.id === STRATEGY_IDS.COUNT_BACK);
      expect(cb).toBeDefined();
    });

    it('produces correct step keys for count back of 1', () => {
      const result = getStrategies(7, 1, '-');
      const cb = result.find(s => s.id === STRATEGY_IDS.COUNT_BACK);
      expect(cb.steps[1].key).toBe('strategy.countBack.step2enum');
      expect(cb.steps[1].params.seqParts).toBe('?');
      expect(cb.steps[1].params.num2).toBe(1);
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

  // ─── Multiplication and Division ──────────────────────────────────────────

  describe('unsupported operators', () => {
    it('returns empty array for multiplication', () => {
      expect(getStrategies(6, 3, '*')).toEqual([]);
    });

    it('returns empty array for division', () => {
      expect(getStrategies(12, 4, '/')).toEqual([]);
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

    it('each strategy result has id, nameKey, and steps array of {key, params} objects', () => {
      const result = getStrategies(8, 5, '+');
      for (const strategy of result) {
        expect(strategy).toHaveProperty('id');
        expect(strategy).toHaveProperty('nameKey');
        expect(strategy).toHaveProperty('steps');
        expect(Array.isArray(strategy.steps)).toBe(true);
        expect(typeof strategy.id).toBe('string');
        expect(typeof strategy.nameKey).toBe('string');
        for (const step of strategy.steps) {
          expect(step).toHaveProperty('key');
          expect(step).toHaveProperty('params');
          expect(typeof step.key).toBe('string');
          expect(typeof step.params).toBe('object');
        }
      }
    });
  });

  // ─── Step Constraints ────────────────────────────────────────────────────

  describe('step constraints', () => {
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

    it('all step keys are non-empty strings', () => {
      const testCases = [
        [8, 5, '+'], [13, 5, '-'], [7, 7, '+'], [6, 7, '+'],
        [9, 2, '+'], [12, 3, '-'], [99, 3, '+'], [97, 3, '-'],
        [50, 50, '+'], [100, 3, '-'], [98, 5, '+'], [15, 8, '-'],
      ];
      for (const [n1, n2, op] of testCases) {
        const strategies = getStrategies(n1, n2, op);
        for (const s of strategies) {
          for (const step of s.steps) {
            expect(typeof step.key).toBe('string');
            expect(step.key.length).toBeGreaterThan(0);
            expect(step.key).toMatch(/^strategy\./);
          }
        }
      }
    });

    it('step params contain correct arithmetic for bridging_add', () => {
      const result = getStrategies(8, 5, '+');
      const bridging = result.find(s => s.id === STRATEGY_IDS.BRIDGING_ADD);
      const { base, complement, tens } = bridging.steps[0].params;
      expect(base + complement).toBe(tens);
      const { addend, remainder } = bridging.steps[1].params;
      expect(addend - bridging.steps[1].params.complement).toBe(remainder);
      expect(tens + remainder).toBe(8 + 5);
    });

    it('step params contain correct arithmetic for bridging_sub', () => {
      const result = getStrategies(13, 5, '-');
      const bridging = result.find(s => s.id === STRATEGY_IDS.BRIDGING_SUB);
      const { num1, onesOfNum1, tens } = bridging.steps[0].params;
      expect(num1 - onesOfNum1).toBe(tens);
      const { num2, remainder } = bridging.steps[1].params;
      expect(num2 - bridging.steps[1].params.onesOfNum1).toBe(remainder);
      expect(tens - remainder).toBe(13 - 5);
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

        // Verify intermediate values from params
        const { base, complement, tens } = bridging.steps[0].params;
        expect(base + complement).toBe(tens);

        const { addend, remainder } = bridging.steps[1].params;
        expect(addend - bridging.steps[1].params.complement).toBe(remainder);

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

        // Verify intermediate values from params
        const step1 = bridging.steps[0].params;
        expect(step1.num1 - step1.onesOfNum1).toBe(step1.tens);

        const step2 = bridging.steps[1].params;
        expect(step2.num2 - step2.onesOfNum1).toBe(step2.remainder);

        // Verify final equation
        expect(step1.tens - step2.remainder).toBe(num1 - num2);
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

        const { smaller, doubleVal } = nd.steps[0].params;
        expect(smaller + smaller).toBe(doubleVal);
        expect(smaller).toBe(Math.min(n1, n2));

        // Verify sum + 1 = actual answer
        expect(doubleVal + 1).toBe(n1 + n2);
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
            // Verify params arithmetic for bridging steps
            if (step.key.includes('bridgingAdd.step1')) {
              const { base, complement, tens } = step.params;
              expect(base + complement).toBe(tens);
            }
            if (step.key.includes('bridgingAdd.step2')) {
              const { addend, complement, remainder } = step.params;
              expect(addend - complement).toBe(remainder);
            }
            if (step.key.includes('nearDoublesAdd.step1')) {
              const { smaller, doubleVal } = step.params;
              expect(smaller + smaller).toBe(doubleVal);
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
            // Verify params arithmetic for bridging steps
            if (step.key.includes('bridgingSub.step1')) {
              const { num1: n1, onesOfNum1, tens } = step.params;
              expect(n1 - onesOfNum1).toBe(tens);
            }
            if (step.key.includes('bridgingSub.step2')) {
              const { num2: n2, onesOfNum1, remainder } = step.params;
              expect(n2 - onesOfNum1).toBe(remainder);
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
