/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEvents = /* GraphQL */ `
  mutation CreateEvents(
    $input: CreateEventsInput!
    $condition: ModelEventsConditionInput
  ) {
    createEvents(input: $input, condition: $condition) {
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
export const updateEvents = /* GraphQL */ `
  mutation UpdateEvents(
    $input: UpdateEventsInput!
    $condition: ModelEventsConditionInput
  ) {
    updateEvents(input: $input, condition: $condition) {
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
export const deleteEvents = /* GraphQL */ `
  mutation DeleteEvents(
    $input: DeleteEventsInput!
    $condition: ModelEventsConditionInput
  ) {
    deleteEvents(input: $input, condition: $condition) {
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
export const createUsers = /* GraphQL */ `
  mutation CreateUsers(
    $input: CreateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    createUsers(input: $input, condition: $condition) {
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
export const updateUsers = /* GraphQL */ `
  mutation UpdateUsers(
    $input: UpdateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    updateUsers(input: $input, condition: $condition) {
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
export const deleteUsers = /* GraphQL */ `
  mutation DeleteUsers(
    $input: DeleteUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    deleteUsers(input: $input, condition: $condition) {
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
export const createProviders = /* GraphQL */ `
  mutation CreateProviders(
    $input: CreateProvidersInput!
    $condition: ModelProvidersConditionInput
  ) {
    createProviders(input: $input, condition: $condition) {
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
export const updateProviders = /* GraphQL */ `
  mutation UpdateProviders(
    $input: UpdateProvidersInput!
    $condition: ModelProvidersConditionInput
  ) {
    updateProviders(input: $input, condition: $condition) {
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
export const deleteProviders = /* GraphQL */ `
  mutation DeleteProviders(
    $input: DeleteProvidersInput!
    $condition: ModelProvidersConditionInput
  ) {
    deleteProviders(input: $input, condition: $condition) {
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
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
export const createUserA = /* GraphQL */ `
  mutation CreateUserA(
    $input: CreateUserAInput!
    $condition: ModelUserAConditionInput
  ) {
    createUserA(input: $input, condition: $condition) {
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
export const updateUserA = /* GraphQL */ `
  mutation UpdateUserA(
    $input: UpdateUserAInput!
    $condition: ModelUserAConditionInput
  ) {
    updateUserA(input: $input, condition: $condition) {
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
export const deleteUserA = /* GraphQL */ `
  mutation DeleteUserA(
    $input: DeleteUserAInput!
    $condition: ModelUserAConditionInput
  ) {
    deleteUserA(input: $input, condition: $condition) {
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
export const createUserB = /* GraphQL */ `
  mutation CreateUserB(
    $input: CreateUserBInput!
    $condition: ModelUserBConditionInput
  ) {
    createUserB(input: $input, condition: $condition) {
      id
      likes
      token
      email
      createdAt
      updatedAt
    }
  }
`;
export const updateUserB = /* GraphQL */ `
  mutation UpdateUserB(
    $input: UpdateUserBInput!
    $condition: ModelUserBConditionInput
  ) {
    updateUserB(input: $input, condition: $condition) {
      id
      likes
      token
      email
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserB = /* GraphQL */ `
  mutation DeleteUserB(
    $input: DeleteUserBInput!
    $condition: ModelUserBConditionInput
  ) {
    deleteUserB(input: $input, condition: $condition) {
      id
      likes
      token
      email
      createdAt
      updatedAt
    }
  }
`;
export const createUserC = /* GraphQL */ `
  mutation CreateUserC(
    $input: CreateUserCInput!
    $condition: ModelUserCConditionInput
  ) {
    createUserC(input: $input, condition: $condition) {
      id
      email
      token
      createdAt
      updatedAt
    }
  }
`;
export const updateUserC = /* GraphQL */ `
  mutation UpdateUserC(
    $input: UpdateUserCInput!
    $condition: ModelUserCConditionInput
  ) {
    updateUserC(input: $input, condition: $condition) {
      id
      email
      token
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserC = /* GraphQL */ `
  mutation DeleteUserC(
    $input: DeleteUserCInput!
    $condition: ModelUserCConditionInput
  ) {
    deleteUserC(input: $input, condition: $condition) {
      id
      email
      token
      createdAt
      updatedAt
    }
  }
`;
export const createTransaction = /* GraphQL */ `
  mutation CreateTransaction(
    $input: CreateTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    createTransaction(input: $input, condition: $condition) {
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
export const updateTransaction = /* GraphQL */ `
  mutation UpdateTransaction(
    $input: UpdateTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    updateTransaction(input: $input, condition: $condition) {
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
export const deleteTransaction = /* GraphQL */ `
  mutation DeleteTransaction(
    $input: DeleteTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    deleteTransaction(input: $input, condition: $condition) {
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
export const createEventType = /* GraphQL */ `
  mutation CreateEventType(
    $input: CreateEventTypeInput!
    $condition: ModelEventTypeConditionInput
  ) {
    createEventType(input: $input, condition: $condition) {
      id
      typename
      description
      cover
      createdAt
      updatedAt
    }
  }
`;
export const updateEventType = /* GraphQL */ `
  mutation UpdateEventType(
    $input: UpdateEventTypeInput!
    $condition: ModelEventTypeConditionInput
  ) {
    updateEventType(input: $input, condition: $condition) {
      id
      typename
      description
      cover
      createdAt
      updatedAt
    }
  }
`;
export const deleteEventType = /* GraphQL */ `
  mutation DeleteEventType(
    $input: DeleteEventTypeInput!
    $condition: ModelEventTypeConditionInput
  ) {
    deleteEventType(input: $input, condition: $condition) {
      id
      typename
      description
      cover
      createdAt
      updatedAt
    }
  }
`;
export const createUserD = /* GraphQL */ `
  mutation CreateUserD(
    $input: CreateUserDInput!
    $condition: ModelUserDConditionInput
  ) {
    createUserD(input: $input, condition: $condition) {
      id
      email
      createdAt
      updatedAt
    }
  }
`;
export const updateUserD = /* GraphQL */ `
  mutation UpdateUserD(
    $input: UpdateUserDInput!
    $condition: ModelUserDConditionInput
  ) {
    updateUserD(input: $input, condition: $condition) {
      id
      email
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserD = /* GraphQL */ `
  mutation DeleteUserD(
    $input: DeleteUserDInput!
    $condition: ModelUserDConditionInput
  ) {
    deleteUserD(input: $input, condition: $condition) {
      id
      email
      createdAt
      updatedAt
    }
  }
`;
export const createRequestToAdmin = /* GraphQL */ `
  mutation CreateRequestToAdmin(
    $input: CreateRequestToAdminInput!
    $condition: ModelRequestToAdminConditionInput
  ) {
    createRequestToAdmin(input: $input, condition: $condition) {
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
export const updateRequestToAdmin = /* GraphQL */ `
  mutation UpdateRequestToAdmin(
    $input: UpdateRequestToAdminInput!
    $condition: ModelRequestToAdminConditionInput
  ) {
    updateRequestToAdmin(input: $input, condition: $condition) {
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
export const deleteRequestToAdmin = /* GraphQL */ `
  mutation DeleteRequestToAdmin(
    $input: DeleteRequestToAdminInput!
    $condition: ModelRequestToAdminConditionInput
  ) {
    deleteRequestToAdmin(input: $input, condition: $condition) {
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
