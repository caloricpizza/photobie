/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEvents = /* GraphQL */ `
  query GetEvents($id: ID!) {
    getEvents(id: $id) {
      id
      title
      secure
      capacity
      token
      location
      description
      type
      user
      status
      image
      final
      upticktoken
      cdate
      duration
      createdAt
      updatedAt
    }
  }
`;
export const listEventss = /* GraphQL */ `
  query ListEventss(
    $filter: ModelEventsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        secure
        capacity
        token
        location
        description
        type
        user
        status
        image
        final
        upticktoken
        cdate
        duration
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUsers = /* GraphQL */ `
  query GetUsers($id: ID!) {
    getUsers(id: $id) {
      id
      email
      type
      name
      city
      zipcode
      country
      age
      photo
      payment
      verified
      favortype
      venues
      createdAt
      updatedAt
    }
  }
`;
export const listUserss = /* GraphQL */ `
  query ListUserss(
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        type
        name
        city
        zipcode
        country
        age
        photo
        payment
        verified
        favortype
        venues
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProviders = /* GraphQL */ `
  query GetProviders($id: ID!) {
    getProviders(id: $id) {
      id
      provider
      eventid
      description
      token
      images
      clients
      capacity
      status
      createdAt
      updatedAt
    }
  }
`;
export const listProviderss = /* GraphQL */ `
  query ListProviderss(
    $filter: ModelProvidersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProviderss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        provider
        eventid
        description
        token
        images
        clients
        capacity
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      channelID
      author
      receiver
      body
      status
      createdAt
      updatedAt
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        channelID
        author
        receiver
        body
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserA = /* GraphQL */ `
  query GetUserA($id: ID!) {
    getUserA(id: $id) {
      id
      token
      having
      email
      eventid
      createdAt
      updatedAt
    }
  }
`;
export const listUserAs = /* GraphQL */ `
  query ListUserAs(
    $filter: ModelUserAFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserAs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        token
        having
        email
        eventid
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserB = /* GraphQL */ `
  query GetUserB($id: ID!) {
    getUserB(id: $id) {
      id
      likes
      token
      email
      createdAt
      updatedAt
    }
  }
`;
export const listUserBs = /* GraphQL */ `
  query ListUserBs(
    $filter: ModelUserBFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserBs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        likes
        token
        email
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserC = /* GraphQL */ `
  query GetUserC($id: ID!) {
    getUserC(id: $id) {
      id
      email
      token
      createdAt
      updatedAt
    }
  }
`;
export const listUserCs = /* GraphQL */ `
  query ListUserCs(
    $filter: ModelUserCFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserCs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        token
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTransaction = /* GraphQL */ `
  query GetTransaction($id: ID!) {
    getTransaction(id: $id) {
      id
      userid
      detail
      eventid
      amount
      date
      status
      createdAt
      updatedAt
    }
  }
`;
export const listTransactions = /* GraphQL */ `
  query ListTransactions(
    $filter: ModelTransactionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTransactions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userid
        detail
        eventid
        amount
        date
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEventType = /* GraphQL */ `
  query GetEventType($id: ID!) {
    getEventType(id: $id) {
      id
      typename
      description
      cover
      createdAt
      updatedAt
    }
  }
`;
export const listEventTypes = /* GraphQL */ `
  query ListEventTypes(
    $filter: ModelEventTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEventTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        typename
        description
        cover
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserD = /* GraphQL */ `
  query GetUserD($id: ID!) {
    getUserD(id: $id) {
      id
      email
      createdAt
      updatedAt
    }
  }
`;
export const listUserDs = /* GraphQL */ `
  query ListUserDs(
    $filter: ModelUserDFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserDs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRequestToAdmin = /* GraphQL */ `
  query GetRequestToAdmin($id: ID!) {
    getRequestToAdmin(id: $id) {
      id
      user
      indexid
      type
      read
      status
      addname
      updatedAt
      reason
      createdAt
    }
  }
`;
export const listRequestToAdmins = /* GraphQL */ `
  query ListRequestToAdmins(
    $filter: ModelRequestToAdminFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRequestToAdmins(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user
        indexid
        type
        read
        status
        addname
        updatedAt
        reason
        createdAt
      }
      nextToken
    }
  }
`;
export const messagesByChannelId = /* GraphQL */ `
  query MessagesByChannelId(
    $channelID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByChannelID(
      channelID: $channelID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        channelID
        author
        receiver
        body
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
