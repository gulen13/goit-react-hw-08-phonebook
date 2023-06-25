export const selectPhones = state => state.phones.items;

export const selectFilter = state => state.filter.value;

export const getIsLoading = state => state.phones.isLoading;

export const getError = state => state.phones.error;