const { serverUrl } = require('../package.json');

const makeUrl = (endPoint: string) => {
  return `${serverUrl}/api/v1/${endPoint}`;
};

export const API_URLS = {
  BASE: serverUrl,
  LOGIN: serverUrl + '/oauth/token',
  PROFILE: serverUrl + makeUrl('profile'),
  CLIENT: serverUrl + '/api/clients',
  REGISTER: serverUrl + '/api/register',
  FORM: makeUrl('leadform'),
  FORM_ITEM: makeUrl('formitem'),
  FORM_ITEM_TYPES: makeUrl('formitemtypes'),
  SUBSCRIPTION: makeUrl('subscription')
};