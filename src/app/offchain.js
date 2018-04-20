// @flow

import { createApolloFetch } from 'apollo-fetch'

export const fetchAPI = createApolloFetch({
  uri: 'https://polymath-offchain.herokuapp.com/graphql',
})

export const getAccountData = () => {
  const accountDataString = localStorage.getItem('account')

  if (accountDataString == null) {
    throw new Error('Cannot make request to API before signing up.')
  }

  const accountData = JSON.parse(accountDataString)

  return {
    accountJSON: accountData.accountJSON,
    signature: accountData.signature,
  }
}
