import { getUserAPI } from '../api/user/user.api';
import { expect, test, describe } from '@jest/globals'

describe('getUserAPI', () => {

  test('It should get user data from API', async () => {
    const checkUser= [{name: 'repo1'}];
    globalThis.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(checkUser)
    });

    const data = await getUserAPI();

    expect(data).toEqual(checkUser)
  })
})