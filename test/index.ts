// https://nodejs.dev/en/api/v18/test/

// "type": "module", package.json
import test from 'node:test'
import assert from 'assert/strict'
import { describe, it } from 'node:test'

describe('A thing', () => {
  test('synchronous passing test', (t: unknown) => {
    assert.strictEqual(1, 1);
  })
})