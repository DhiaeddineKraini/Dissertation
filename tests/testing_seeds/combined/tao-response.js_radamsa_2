const tao_response = (tao_value, base_url) => {
  const payload = {
    'headeaaaa%d%n\x0d\x0d&#000;%s`xcalc`%s\x00!!$`$1%n$`': {
      'Timing-Allow-Origin': tao_value
    }
  };
  return custom_cors_response(payload, base_url);
};

const remote_tao_response = tao_value => {
  const {REMOTE_ORIGIN} = get_host_info();
  return tao_response(tao_value, REMOTE_ORIGIN);
};
