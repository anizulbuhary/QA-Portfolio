# GitHub Repository Management Guide

This guide explains how to properly organize your QA Portfolio repository and manage the visibility of your projects and certifications.

## 1. Repository Visibility (Public vs. Private)

You can choose to make your entire repository **Public** (visible to everyone) or **Private** (visible only to you and collaborators).

### How to change visibility:
1. Go to your repository on GitHub.
2. Click on the **Settings** tab.
3. Scroll down to the **Danger Zone** section.
4. Click **Change visibility** and follow the prompts.

---

## 2. In-Code Visibility Control (Feature Toggles)

We have implemented an `isVisible` toggle for your projects and certifications. This allows you to "hide" specific items without deleting them from your code.

### How to toggle a Project:
- Open `src/pages/Projects.tsx`.
- Find the project in the `projects` array.
- Set `isVisible: true` to show it, or `isVisible: false` to hide it.
- **Note**: This only hides it from the website UI. The data remains in your source code.

### How to toggle a Certification:
- Open `src/pages/Certifications.tsx`.
- Find the certification in the `certifications` array.
- Set `isVisible: true` to show it, or `isVisible: false` to hide it.

---

## 3. Best Practices for Organization

To keep your repository professional and well-organized, follow these tips:

### Folder Structure
- `src/components`: Reusable UI elements.
- `src/pages`: Main application views (Projects, Certs, etc.).
- `src/assets`: Images, logos, and media files.
- `public/`: Static files that don't change.

### Documentation
- **README.md**: Create a strong README that explains what your portfolio is, the tools you used (Playwright, Selenium, React), and how to run it locally.
- **Commit Messages**: Use clear messages like `feat: add visibility toggle for projects` or `fix: layout issue on mobile`.

### Security Warning
> [!CAUTION]
> If you have sensitive data (like real API keys or private client info), **never** include it in a public repository—even if it's "hidden" in the UI. Use environment variables (`.env` files) and add them to `.gitignore`.
