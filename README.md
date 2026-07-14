# 🧮 BMI Calculator

A clean, modern, and highly responsive Body Mass Index (BMI) Calculator web application. This project is built using pure HTML, CSS, and vanilla JavaScript, featuring a sleek user interface, smooth entry animations, and dynamic state styling.

---

## Live Demo and Screenshot

![Screenshot](./media/Screenshot.png)

[Live Demo]()

## ✨ Features

- **Sleek & Modern UI:** Designed with soft gradients, clean input cards, and professional typography.
- **Smooth Animations:** Dynamic result container reveal using a custom `@keyframes fadeInUp` transition when the calculation is triggered.
- **Instant Calculation:** Real-time BMI processing using a simple, standard calculation formula.
- **Dynamic Status Indicators:** Automatically classifies BMI categories into four distinct, color-coded visual states:
  - 🔵 **Underweight** (Blue)
  - 🟢 **Normal Weight** (Green)
  - 🟠 **Overweight** (Orange)
  - 🔴 **Obese** (Red)
- **Mobile-Friendly / Responsive:** Adapts seamlessly across all desktop, tablet, and mobile devices.

---

## 📂 Project Structure

```bash
├── index.html       # The skeletal layout of the calculator
├── style.css        # Layout, styling, transitions, and keyframe animations
└── script.js       # Event handling, calculation logic, and dynamic DOM styling
```

## 🛠️ Built With

- HTML5: Semantic markup structure.

- CSS3: Custom layouts, transitions, gradients, and entry animations.

- JavaScript (ES6): State management, DOM manipulation, and dynamic class assignment.

## 🚀 How to Run the Project

Since this is a client-side static web page, no complex setups, servers, or compilers are required:

1. Download or Clone the repository to your local machine:

```bash
git clone [https://github.com/nurscodee/bmi-calculator.git](https://github.com/nurscodee/bmi-calculator.git)
```

2. Navigate to the project folder.

3. Open index.html directly in any web browser (Chrome, Firefox, Safari, Edge, etc.) to start using the application.

## 📝 Calculation Formula

The application uses the standard metric system formula to compute

BMI:$$\text{BMI} = \frac{\text{Weight (kg)}}{\left(\frac{\text{Height (cm)}}{100}\right)^2}$$

The result is formatted to two decimal places for precision.

## 🤝 Contribution

Contributions, issues, and feature requests are welcome! Feel free to check out the issues page or submit a pull request if you want to add new features (e.g., calculation history, imperial units support, etc.).
