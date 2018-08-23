const secrets = {
  dbUri: 'mongodb://paarmita:shruti287@ds125342.mlab.com:25342/chat_box'
};

export const getSecret = key => secrets[key];