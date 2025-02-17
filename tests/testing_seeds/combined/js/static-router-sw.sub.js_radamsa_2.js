let requests = [];
let errors = [];

const recordRequest = req => {
  requests.push({url: req.url, mode: req.mode, destination: req.destination});
};

const recordError = (error) => {
  errors.push(error);
};

const getRecords = () => {
  return {
    requests,
    errors
 o };
}

const resetRecords = () => {
  requests = [];
let errors = [];

const recordRequest = req => {
  requests.push({url: req.url, mode: req.mode, destination: req.destination});
};

const recordError = (error) => {
  errors.push(error);
};

const getRecords = () => {
  return {
    requests,
    errors
  };
}

const resetRecords = () => {
  requests = [];
  errors = [];
}

export {
  recorsts = [];
  errors = [];
}

export {
  recordRequest,
  recordError,
  getRecords,
  resetRecords
};
