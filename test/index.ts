// https://nodejs.dev/en/api/v18/test/

// "type": "module", package.json
import test from 'node:test'
import assert from 'assert/strict'

import { describe, it,  } from 'node:test'

describe('Dummy Tests', () => {
  test('synchronous passing test', (t: unknown) => {
    assert.strictEqual(1, 1)
  })
  test('Fetch asynchronous test', async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
    const json = await response.json()
    assert.equal(json.name, 'Leanne Graham')
  })
})