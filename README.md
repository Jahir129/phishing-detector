# PhishGuard – Phishing Email Detection Dashboard

PhishGuard is a cybersecurity project that detects potential phishing emails using heuristic analysis.  
The system analyzes email content, suspicious keywords, malicious URLs, and authentication headers to generate a threat score and risk level.

The project also provides a SOC-style dashboard interface to visualize phishing indicators and results.

---

## Features

- Phishing email detection using keyword-based heuristic analysis
- Threat scoring system with LOW, MEDIUM, and HIGH risk classification
- Email header analyzer for detecting authentication failures
- Detection of:
  - Suspicious keywords
  - URL shorteners
  - Phishing indicators
- SOC-style dashboard interface
- Threat meter visualization
- Security awareness interaction (phishing education)

---

## Technologies Used

- HTML
- CSS
- JavaScript
- React (UI components)

---

## Project Structure


phishguard/
│
├── index.html
├── style.css
├── script.js
├── react-ui.js
├── react-login.js
├── assets/
│ └── shield.svg
└── README.md


---

## How It Works

1. The user pastes an email message into the analyzer.
2. The system scans the email for phishing keywords and suspicious links.
3. Each detected indicator increases the threat score.
4. The tool classifies the risk level:
   - LOW
   - MEDIUM
   - HIGH
5. Results are displayed on the dashboard with indicators and threat score.

The header analyzer also checks authentication failures such as:
- SPF failure
- DKIM failure
- DMARC failure

---

## Example Use Case

Security analysts can use this tool to quickly analyze suspicious emails and identify potential phishing attempts.

---

## Limitations

- Uses heuristic detection rather than machine learning
- Limited keyword database
- Does not connect to real threat intelligence feeds

---

## Future Improvements

- Machine learning based phishing detection
- Integration with real threat intelligence feeds
- Automatic URL reputation checks
- Email attachment analysis
- SOC log monitoring integration

---

## Educational Purpose

This project was developed as a cybersecurity learning project to demonstrate phishing detection concepts and SOC dashboard visualization.

---

## Author

Jahir

GitHub: https://github.com/Jahir129
