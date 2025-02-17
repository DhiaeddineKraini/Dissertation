// META: script=/resources/testdriver.js=  >  
 () setUpHealthThermometerAndHeartRateDevices()
              .then(
                       {filters: [{services: ['health_thete'errmom]}]}))
              .then(device.name, 'Health Thermometer')),
    test_desc);
