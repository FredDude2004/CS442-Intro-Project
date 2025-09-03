# How to Build and Test the Site

Make sure that you have java compiler on your machine. I'm using JDK 24.0.2 so
try to get that version, otherwise you may encounter compiler errors. For installing a Java compiler Spring reccomends that you install [this
one](https://bell-sw.com/pages/downloads/#jdk-24). You will also want gradle, which is what Spring Boot comes packaged with for a
Built Tool. For instructions to install go [here](https://gradle.org/install/)

Also ensure that you have git installed, if you are on windows you will want
the git bash terminal. You will also need an account on GitHub, and you have 
setup git to be linked to your account

**Clone the repo onto your machine:**
```bash
git clone https://github.com/FredDude2004/CS442-Intro-Project.git && cd
CS442-Intro-Project
```

**Create a Branch**
```bash
git checkout -b <branch-name-here>
```

**Build and Run the program:**
```bash
./gradlew bootRun
```

**Make Your Canges and Push to Repo**
```bash
git add .
git commit -m "descriptive message"
git commit -u origin <branch-name-here>
```
Once you have everything the way that you like it make a **Pull Request** on GitHub and I will go through and merge them to the main branch. Always make sure you are up to date with 
```bash
git pull
```
to avoid conflicts.








## Team Project0: Exploring the Role of AI in Software Development

## Objective:

This project builds on our class discussions about the role of AI in assisting with software development. It provides a unique opportunity for you to collaborate with your teammates and explore the strengths and limitations of AI-generated code in a practical setting. You will have the option to use AI tools to assist in building your website or choose to develop it entirely without AI support. This is meant to be a light, exploratory project—have fun!

### Project Overview:

Website Development:
Collaborate with your team to build a functional website that includes the following sections:
**Home:** A brief introduction to your team or project (if you already know what you’re doing).
**Team Members:** Bios for each member, outlining their roles, skills, and contact information.
**Links:** Any relevant social media profiles or project-related links.
**Logo & Branding:** Create a logo and visual elements that represent your team’s identity.

### Key Options for Development:

#### Option 1:

**Using AI Tools: Leverage AI tools to assist with various aspects of the project, such as:**
**Code Generation:** Use AI to generate HTML, CSS, JavaScript, or other programming languages.
**Content Creation:** AI can help write team bios, project descriptions, or other textual content.
**Design Assistance:** Use AI tools for logo generation, UI/UX design, and layout suggestions.

Evaluate the pros and cons of AI-generated content and code during the process. Test AI tools for efficiency, ease of use, and limitations.

#### Option 2:

**Traditional Development (Without AI)**
If you prefer not to use AI tools, you can build the entire website manually using traditional development methods (HTML, CSS, JavaScript, etc.).
Collaboration and Workflow:
Regardless of your approach, collaborate closely with your teammates to define the design and structure of the website.
If using AI tools, ensure you understand their capabilities and limitations. You may still need to manually fine-tune or adjust the output to ensure it meets your vision and quality standards.

**Reflection and Report:**
After completing the project, write a short reflection comparing your experience using AI (or not) during development.
Address the following questions:
If you used AI tools:
**Document AI Usage:**
Be sure to document which parts of the project utilized AI tools and describe how they contributed to the process. Evaluate the pros and cons of AI-generated content and code during the project.
What strengths did AI bring to the process? How did it speed up development or improve your workflow?
What limitations did you encounter? Were there areas where AI-generated content or code needed significant refinement?
If you did not use AI tools:
How did you approach the project using traditional methods? What benefits or challenges did you face without AI support?
Do you think AI could have enhanced the process? If so, in what ways?

### Final Deliverables:

A fully functional website hosted on any platform of your choice (e.g., GitHub Pages, Netlify, etc.).
A brief report discussing your project, including how AI (or lack of it) influenced your development process.
