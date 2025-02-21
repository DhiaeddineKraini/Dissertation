# Browser Fuzzing Detection Report
**Generated**: 2025-02-20 19:51:48
**Chrome Version**: Chromium 135.0.7019.0
## Summary Statistics
- Total Tests: 8
- Crashes Detected: 2
- Timeouts: 0
## Detailed Findings
### mutated_output_001.html
**Status**: FAILED
#### Metrics
- Duration: 301.00s
- Peak Memory: 165.66 MB
- Peak CPU: 7.9%
#### Anomalies Detected
##### Unexpected Error
- **When**: 2025-02-20T19:28:47.870065
- **Details**: HTTPConnectionPool(host='localhost', port=41585): Read timed out. (read timeout=120)
- **System Response**:
  - Terminated browser process
  - Preserved memory dump
  - Captured stack trace
- **Debug Artifacts**:
  - [ASAN Log]()
  - [Crash Report]()
  - [Screenshot]()

### mutated_output_003.html
**Status**: CRASHED
#### Metrics
- Duration: 12.05s
- Peak Memory: 164.06 MB
- Peak CPU: 13.9%
#### Anomalies Detected
##### Renderer Crash
- **When**: 2025-02-20T19:32:10.785682
- **Details**: Message: tab crashed
  (Session info: chrome=135.0.7019.0)
Stacktrace:
#0 0x5e883a5b90b6 <unknown>
#1 0x5e883d841ce8 <unknown>
#2 0x5e883d8067c9 <unknown>
#3 0x5e883a6c5e80 <unknown>
#4 0x5e883a69c99a <unknown>
#5 0x5e883a69b085 <unknown>
#6 0x5e883a6997e0 <unknown>
#7 0x5e883a699522 <unknown>
#8 0x5e883a694181 <unknown>
#9 0x5e883a695077 <unknown>
#10 0x5e883a6b95cc <unknown>
#11 0x5e883a6e224b <unknown>
#12 0x5e883a6ee389 <unknown>
#13 0x5e883a6ee0c7 <unknown>
#14 0x5e883a696d84 <unknown>
#15 0x5e883a6965a0 <unknown>
#16 0x5e883a6e1342 <unknown>
#17 0x5e883a820e64 <unknown>
#18 0x5e883a7cfb62 <unknown>
#19 0x5e883a769fc9 <unknown>
#20 0x5e883a766b21 <unknown>
#21 0x5e883a76966d <unknown>
#22 0x5e883a685d67 <unknown>
#23 0x5e883d63abac <unknown>
#24 0x5e883d6fcdd2 <unknown>
#25 0x5e883d6fb1bc <unknown>
#26 0x5e883d6fe0eb <unknown>
#27 0x5e883d67c459 <unknown>
#28 0x5e883d6ff3f0 <unknown>
#29 0x5e883d5fba31 <unknown>
#30 0x5e883d7ae95c <unknown>
#31 0x5e883d7af1e0 <unknown>
#32 0x5e883d7f4ada <unknown>
#33 0x5e883a60fb87 <unknown>
#34 0x7cf6e0a94ac3 <unknown>
#35 0x7cf6e0b26850 <unknown>

- **System Response**:
  - Terminated browser process
  - Preserved memory dump
  - Captured stack trace
- **Debug Artifacts**:
  - [ASAN Log]()
  - [Crash Report]()
  - [Screenshot]()

### mutated_output_005.html
**Status**: FAILED
#### Metrics
- Duration: 205.25s
- Peak Memory: 163.70 MB
- Peak CPU: 4.0%
#### Anomalies Detected
##### Unexpected Error
- **When**: 2025-02-20T19:34:18.989749
- **Details**: HTTPConnectionPool(host='localhost', port=35345): Read timed out. (read timeout=120)
- **System Response**:
  - Terminated browser process
  - Preserved memory dump
  - Captured stack trace
- **Debug Artifacts**:
  - [ASAN Log]()
  - [Crash Report]()
  - [Screenshot]()

### mutated_output_002.html
**Status**: FAILED
#### Metrics
- Duration: 300.61s
- Peak Memory: 164.17 MB
- Peak CPU: 5.9%
#### Anomalies Detected
##### Unexpected Error
- **When**: 2025-02-20T19:37:50.775761
- **Details**: HTTPConnectionPool(host='localhost', port=59311): Read timed out. (read timeout=120)
- **System Response**:
  - Terminated browser process
  - Preserved memory dump
  - Captured stack trace
- **Debug Artifacts**:
  - [ASAN Log]()
  - [Crash Report]()
  - [Screenshot]()

### mutated_output_004.html
**Status**: CRASHED
#### Metrics
- Duration: 29.10s
- Peak Memory: 163.92 MB
- Peak CPU: 16.0%
#### Anomalies Detected
##### Renderer Crash
- **When**: 2025-02-20T19:41:29.809245
- **Details**: Message: tab crashed
  (Session info: chrome=135.0.7019.0)
Stacktrace:
#0 0x58a7065ba0b6 <unknown>
#1 0x58a709842ce8 <unknown>
#2 0x58a7098077c9 <unknown>
#3 0x58a7066c6e80 <unknown>
#4 0x58a70669d99a <unknown>
#5 0x58a70669c085 <unknown>
#6 0x58a70669a7e0 <unknown>
#7 0x58a70669a522 <unknown>
#8 0x58a706695181 <unknown>
#9 0x58a706696077 <unknown>
#10 0x58a7066ba5cc <unknown>
#11 0x58a7066e324b <unknown>
#12 0x58a7066ef389 <unknown>
#13 0x58a7066ef0c7 <unknown>
#14 0x58a706697d84 <unknown>
#15 0x58a7066975a0 <unknown>
#16 0x58a7066e2342 <unknown>
#17 0x58a706821e64 <unknown>
#18 0x58a7067d0b62 <unknown>
#19 0x58a70676afc9 <unknown>
#20 0x58a706767b21 <unknown>
#21 0x58a70676a66d <unknown>
#22 0x58a706686d67 <unknown>
#23 0x58a70963bbac <unknown>
#24 0x58a7096fddd2 <unknown>
#25 0x58a7096fc1bc <unknown>
#26 0x58a7096ff0eb <unknown>
#27 0x58a70967d459 <unknown>
#28 0x58a7097003f0 <unknown>
#29 0x58a7095fca31 <unknown>
#30 0x58a7097af95c <unknown>
#31 0x58a7097b01e0 <unknown>
#32 0x58a7097f5ada <unknown>
#33 0x58a706610b87 <unknown>
#34 0x73f1dfe94ac3 <unknown>
#35 0x73f1dff26850 <unknown>

- **System Response**:
  - Terminated browser process
  - Preserved memory dump
  - Captured stack trace
- **Debug Artifacts**:
  - [ASAN Log]()
  - [Crash Report]()
  - [Screenshot]()

### mutated_output_007.html
**Status**: FAILED
#### Metrics
- Duration: 300.54s
- Peak Memory: 164.38 MB
- Peak CPU: 2.0%
#### Anomalies Detected
##### Unexpected Error
- **When**: 2025-02-20T19:43:37.842736
- **Details**: HTTPConnectionPool(host='localhost', port=33559): Read timed out. (read timeout=120)
- **System Response**:
  - Terminated browser process
  - Preserved memory dump
  - Captured stack trace
- **Debug Artifacts**:
  - [ASAN Log]()
  - [Crash Report]()
  - [Screenshot]()

### mutated_output_006.html
**Status**: FAILED
#### Metrics
- Duration: 0.00s
- Peak Memory: 0.00 MB
- Peak CPU: 0.0%
#### Anomalies Detected
##### Unexpected Error
- **When**: 2025-02-20T19:48:47.901371
- **Details**: HTTPConnectionPool(host='localhost', port=48953): Read timed out. (read timeout=120)
- **System Response**:
  - Terminated browser process
  - Preserved memory dump
  - Captured stack trace
- **Debug Artifacts**:
  - [ASAN Log]()
  - [Crash Report]()
  - [Screenshot]()
