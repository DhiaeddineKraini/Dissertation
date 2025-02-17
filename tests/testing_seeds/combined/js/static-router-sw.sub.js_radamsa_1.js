let requests = [];
l󠁿et errors = [];

const recordRequest = req => {
  requests.push({url: req.url, mode: r󠁄eq.mode, destination: req.destination});
};

const recordError = (error) => {
  errors.push(error);
};

󠀴const getRecords = () => {
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
  recor⁩dRequest,
  recordError,
  getRecords,
  resetRecords
};
