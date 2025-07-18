# FuzzBrowse: An Advanced Framework for Automated Browser Security Auditing

This repository contains the dissertation project for my BSc (Hons) in Computer Science for CyberSecurity. **FuzzBrowse is not just a script; it is a complete, end-to-end framework for discovering complex security vulnerabilities in modern web browsers.**

The goal was to move beyond basic fuzzing and engineer a sophisticated, feedback-driven system that mimics the rigorous testing processes used by elite security teams. The project culminated in the discovery of a **verifiable memory leak in Google Chrome**.

---

### High-Level Architecture
The system was designed with a modular, pipeline-based architecture to ensure scalability, maintainability, and a clear separation of concerns, reflecting professional software engineering standards.



---

## 🏆 Key Achievements & Impact

This project successfully demonstrates the ability to take a complex security concept from research to a functional, effective prototype.

*   **Discovered a Verifiable Memory Leak in Google Chrome:** Using an ASan-instrumented build, the fuzzer identified a reproducible memory leak (8-byte direct, 344-byte indirect) in Chrome's core content module, proving the framework's effectiveness in finding real-world bugs.

*   **Engineered a Novel Mutation Strategy:** I designed and implemented a "Fractal Crossover" mutation algorithm. This advanced technique intelligently combines complex HTML documents to create unique, high-entropy test cases that are more likely to uncover deep, structural bugs than random fuzzing.

*   **Built a Resilient, End-to-End Automation Framework:** The system automates every step of the process: generating test cases, running them in a headless browser, detecting a wide range of anomalies (not just crashes), and collecting detailed forensic data for analysis. It was designed for stability, running for **144 continuous hours** without failure during the final evaluation.

*   **Quantified a 14.8% Efficiency Gain via Coverage-Guided Fuzzing:** By integrating feedback from the Chrome DevTools Protocol, I proved that the fuzzer could intelligently direct its efforts to under-tested code paths, resulting in a **14.8% higher** weighted JavaScript coverage score and a more efficient bug-hunting process.

---

## 🛠️ Technology & Concepts Showcase

This project demonstrates expertise in a range of technologies and cybersecurity concepts:

| Category                      | Technologies & Concepts                                                                                                         |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| **Core Engineering**          | **Python 3**, **System Architecture Design**, **Object-Oriented Programming (OOP)**, **Modular Framework Development**             |
| **Cybersecurity & Fuzzing**   | **Vulnerability Research**, **Fuzzing**, **Memory Corruption (Use-After-Free, Buffer Overflows)**, **Crash Triage & Analysis**      |
| **Instrumentation & Analysis**| **AddressSanitizer (ASan)**, **Chrome DevTools Protocol (CDP)**, **LLVM Toolchain (llvm-symbolizer)**, **Log Analysis**            |
| **Automation & Testing**      | **Selenium WebDriver**, **Headless Browser Automation**, **Test Execution Pipelines**, **Automated Anomaly Detection**              |
| **Data Processing**           | **BeautifulSoup4** (for HTML DOM manipulation), **ddmin** (for automated test case minimization), **JSON** (for structured reporting) |

---

## 💡 What This Project Demonstrates

*   **Security Vulnerability Research:** Deep understanding of how to find non-trivial bugs in large, complex C++ codebases like a web browser.
*   **Complex System Design:** Ability to design, architect, and build a multi-component system with a closed feedback loop. This goes far beyond simple scripting.
*   **Professional-Grade Development:** The project was managed with a phased, Agile-inspired methodology, including requirements definition, iterative development, and risk mitigation, demonstrating a mature approach to software engineering.
*   **Automation Mindset:** A strong proficiency in automating complex, repetitive tasks to create a powerful and efficient security tool.
*   **Data-Driven Problem Solving:** Used metrics (like code coverage) to make intelligent decisions within the framework and to scientifically prove its effectiveness.

---

## 📧 Contact

**Dhiaeddine Kraini**

*   **GitHub:** [github.com/DhiaeddineKraini](https://github.com/DhiaeddineKraini)
*   **LinkedIn:** [linkedin.com/in/dhiaeddine-kraini](https://www.linkedin.com/in/dhiaeddine-kraini/)
