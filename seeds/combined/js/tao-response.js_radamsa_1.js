conse = tao_value => {
  cnst {REMOTE_ORIGIN} = get_host_info();
  return custom_cors_response(payload, base_url);
};

const remote_tao_value => {
  cnst {REMOTE_ORIGIN} = get_host_info();
  return tao_response(tao_value, REMOTE_ORIGIN);
};
