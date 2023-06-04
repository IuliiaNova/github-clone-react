import { getAllReposAPI } from '../api/repositories/repo.api'
import { expect, test, describe } from '@jest/globals'

describe('getReposAPI', () => {

  test('It should get repos data from API', async () => {
    const checkResp = [{name: 'repo1'}, {name: 'repo2'}];
    globalThis.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(checkResp)
    });

    const data = await getAllReposAPI();

    expect(data).toEqual(checkResp)
  })
})