# 🌱 AllIsWell – NGO Website

AllIsWell is a simple and clean website built for an NGO to present its work, values, and activities in a clear and friendly way. The main goal of this project is to create a strong online presence for the organization using a modern, responsive design that works well on all devices.

This repository contains the full front-end source code for the website along with a small Node.js-based setup for running the project locally. At the moment, the focus is on design, structure, and user experience. A donation/payment system is planned for the future but is **not implemented yet**.

---

## 🧩 About the Project

AllIsWell was created to help an NGO share its story and connect better with people online. The website highlights the organization’s mission, ongoing activities, and impact through a clean layout and easy navigation.

The project is built on top of the **Dewi BootstrapMade template** and customized to match the needs of the NGO, including custom sections, styling, and content structure.

In addition, the project includes a **GPS coordinate finder** placed in the footer of the website. This tool captures the geographic coordinates of the user’s current location. These coordinates are then used during the **certificate generation process** to embed the location details into the certificate.

---

## ✨ What’s Included

* 🏠 **Home Page** – Overview of the NGO and its mission
* 📖 **About Section** – Information about the organization and its goals
* 🖼️ **Gallery / Activities** – Visuals and highlights of the NGO’s work
* 📱 **Responsive Design** – Works well on mobile, tablet, and desktop
* ⚡ **Lightweight and Fast** – Optimized for smooth browsing
* 🎨 **Custom Styling** – Based on the Dewi BootstrapMade theme
* 📍 **GPS Coordinate Finder (Footer)** – Captures the user’s current location coordinates and uses them during certificate generation
* 🔐 **Certificate Login Page** – A secure login page where users enter their assigned credentials to access and download their own certificates

> 💡 **Note:** A donation or payment feature is planned, but this version does **not** include any payment gateway or backend support.

---

## 🛠️ Tech Used

* HTML5
* CSS3
* JavaScript
* Bootstrap (Dewi Template)
* Node.js & npm (for local development)
* Git & GitHub

---

## 📂 Project Structure

```
AllIsWell/
│
├── assets/         # Images, styles, scripts, and vendor files
├── pages/         # About, Gallery, Activities, and other sections
├── index.html    # Main landing page
├── package.json  # Project dependencies and scripts
├── README.md     # Project documentation
└── ...
```

*(This may change as the project grows.)*

---

## ⚙️ How to Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/keshavsoft/TreeTag
```

### 2. Go into the project folder

```bash
cd TreeTag
```

### 3. Install dependencies

Make sure you have **Node.js** and **npm** installed on your system, then run:

```bash
npm install
```

### 4. Start the project

```bash
npm run start
```

This will start a local development server. Open the link shown in the terminal (usually `http://localhost:3000` or similar) in your browser to view the website.

---

## 📍 GPS Coordinate Finder

The footer of the website includes a GPS-based coordinate finder. When a user allows location access, the system fetches the current latitude and longitude of their location. These coordinates are stored and later used while generating certificates, helping link each certificate to the actual place where it was created.

**Current Status:**

* Location access: Implemented on the front end
* Coordinate capture: Enabled
* Certificate integration: Supported in the generation flow

---

## 🔐 Certificate Access & Login

The project includes a dedicated login page for certificate access. Each user is given **specific credentials** by the organization. Using these credentials, the user can log in and view or download **only their own certificate**.

**How it works:**

* The NGO provides a unique username and password to each person
* The user logs in through the certificate access page
* After successful login, the system shows the certificate linked to that user
* The user can view or download their certificate

---

## 🧪 Planned Donation Feature

The website is designed with a future donation feature in mind. The idea is to allow visitors to contribute online using a payment gateway (such as Razorpay or a similar service).

**Current Status:**

* Payment system: Not implemented
* Backend: Not available
* Front-end: Layout and structure ready for future integration

---

## 🎯 Future Improvements

* 💳 Add a secure online donation system
* 📊 Simple admin panel for managing content
* 📧 Email notifications or contact forms
* 📱 Convert to a Progressive Web App (PWA)

---

## 🤝 Contributing

If you’d like to improve this project:

1. Fork the repository
2. Create a new branch

   ```bash
   git checkout -b your-feature-name
   ```
3. Commit your changes

   ```bash
   git commit -m "Add your feature"
   ```
4. Push to your branch

   ```bash
   git push origin your-feature-name
   ```
5. Open a Pull Request

---

## 📜 License

This project is licensed under the **MIT License**. You’re free to use, modify, and share it with proper attribution.

---

## 🌟 Support

If you find this project useful, consider giving it a ⭐ on GitHub. It really helps and motivates further development.

> *“Small efforts, when done with care, can make a big difference.”*


1.1.3

schema jsons added

1.1.4

schema jsons users added

1.1.5

protected ui added

1.1.6

redirect changed for donors
