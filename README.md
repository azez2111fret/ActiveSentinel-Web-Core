# Adversarial Web Shield v2.0 

![Security](https://img.shields.io/badge/Security-Adversarial-red) ![License](https://img.shields.io/badge/License-Experimental-orange)

An advanced, client-side defensive framework designed to mitigate automated scraping and OCR data extraction through dynamic visual noise and behavioral traps.

## 🛠 Core Features

* **Dynamic Canvas Obfuscation**: 
    * Generates real-time "Visual Entropy" using randomized SQL injection strings and junk characters.
    * Employs `rgba` ghosting effects to disrupt the edge-detection algorithms used by modern OCR engines.
* **Heuristic Bot Detection**: 
    * Monitors `navigator.webdriver` and browser environment flags to identify headless browsers or automation tools like Selenium.
* **Proactive Decoy Deployment**: 
    * Triggers an automated "Patch Download" (`Essential_Database_Fix.bat`) when suspicious activity is detected.
    * The decoy payload is designed to perform recursive I/O operations, serving as a stress test for the scraper's local storage.
* **Input Interaction Protection**: 
    * Detects unauthorized right-click or Ctrl-click events on visual elements, interpreting them as manual extraction attempts.

## 🚀 Implementation

1.  **Initialize Canvas**: Ensure a high-priority canvas element is present in your DOM.
    ```html
    <canvas id="evil-background"></canvas>
    ```
2.  **Deploy Script**: Integrate the `ActiveSentinel Web Core v2.js` into your build pipeline.
3.  **Hardware Optimization**: Optimized for low-spec hardware (e.g., devices with limited SoC performance) to maintain a consistent defense loop.

## ⚠️ Disclaimer

This project is for **Adversarial Research** and **Hardware Stress Testing** purposes only. Deployment in production environments should be handled with care to avoid interfering with legitimate user experiences.
