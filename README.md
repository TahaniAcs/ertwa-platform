# Ertwa Digital Platform 

A specialized technical platform operating under the umbrella of **Taqat Certified Training Institute**. Ertwaa aims to empower individuals and organizations by delivering advanced technical content and fostering a vibrant digital community that quenches the passion for knowledge and technology.

## 🔗 Live Demo
You can explore the live, fully interactive platform via the following link:
[Visit Ertwaa Platform] ([https://tahaniacs.github.io/ertwa-platform/]) 

---

## ✨ Features

The platform is designed with a strong focus on delivering a seamless User Experience (UX) that precisely matches modern Figma design specifications. It includes the following interactive capabilities:

* **Landing Page:** An engaging interface featuring a dynamic typing animation effect, combined with visually structured Mission and Vision cards.
* **Specialized Departments (6 Committees):** A dedicated interface showcasing the six core committees (Technology, Design, Events, Quality & Follow-up, Media, and Content). It utilizes **smart URL hash-based dynamic filtering** to display the specific description and required operational tasks for each department individually upon clicking "Learn More".
* **Live Infinite Counter Animation:** An advanced JavaScript mechanism powered by the `IntersectionObserver` API. It triggers a count-up animation from zero the moment the stats section scrolls into view, followed by a continuous, background live data simulation that subtly updates metrics every few seconds to represent a live, active ecosystem.
* **Organizational Structure Page:** A clean, dedicated page mapping out the official management hierarchy of the platform—from institute management down to committee leaders and their deputies—presented in an elegant visual tree layout.
* **User Dashboard:** An interactive, simulated post-login portal dedicated to members, displaying real-time membership status metrics and verified volunteering/contribution hour milestones.
* **Digital Services Request Portal:** A smart, structured client intake form designed to receive requests for digital products (e.g., Web Development, Game Development, and Branding) equipped with smooth front-end success state animations upon form submission.
* **Comprehensive Events Archive:** A clean, grid-based layout built to archive upcoming workshops, bootcamps, and past community meetups.

---

## 🛠️ Technologies Used

Built entirely using native front-end core technologies without any heavy external frameworks to ensure maximum performance, speed, and cross-browser lightweight optimization:

* **HTML5:** For crafting semantic, accessible, and structured page elements across the entire platform.
* **CSS3:** For modern responsive grid/flexbox layouts, hover transitions, custom animation state definitions, and strict adherence to the brand identity palette (Jungle Green & Dark BG).
* **JavaScript (Vanilla JS):** For handling the core operational logic, including the `IntersectionObserver` counter, dynamic hash route filtering, form state updates, and text typing animations.
* **Font Awesome Icons:** For rendering clean, sharp vector iconography across cards and dashboard widgets.
* **Google Fonts (Cairo):** For integrating a clean, high-legibility geometric contemporary Arabic typeface.

---

## 📂 Project Structure

```text
├── index.html          # Main landing page of the platform
├── login.html          # Portal user login interface
├── register.html       # Member onboarding wizard & dynamic department quiz
├── dashboard.html      # Post-login user profile and contribution tracker
├── structure.html      # Organizational hierarchy page with leadership names
├── departments.html    # Detailed department view mapping specific operational tasks
├── events.html         # Extended upcoming and archived events directory
├── order.html          # Client request portal for purchasing digital services
├── style.css           # Global core layout, utility system, and style specifications
├── register.css        # Modular layout stylesheet for forms, cards, and step indicators
├── script.js           # Core interactive logic, animations, and front-end simulations
└── images/             # Local asset directory housing branding icons and images
💻 Local Setup & Installation

To run this project locally on your machine:

    Clone this repository using Git:
    Bash

    git clone [https://github.com/tahaniacs/ertwa-platform.git] (https://github.com/tahaniacs/ertwa-platform.git)

    Navigate into the project directory:
    Bash

    cd ertiwa-platform

    Open index.html directly in any web browser of your choice, or run it via an extension like Live Server in your preferred code editor to enjoy live reloading.

👥 Engineering & Technical Credits

Designed, architected, and coded with passion by the Technical Development Department at Ertwaa Platform 2026 ©.
