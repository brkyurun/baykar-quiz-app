# Quiz App - Baykar Quiz Case

A quiz app built using React, Vite, TailwindCSS, and TypeScript.

Deployed demo: https://main--baykar-quiz-case.netlify.app/

## Technical Decisions and Details About the Project

For quiz questions, I used [Open Trivia DB](https://opentdb.com/api_config.php) as the provided [JSON Placeholder Posts](https://jsonplaceholder.typicode.com/posts) response is not suitable for a quiz application because it contains lorem ipsum texts which would make creating a question or answers somewhat meaningless.

For this project, TailwindCSS is a better choice than Bootstrap because the design suits TailwindCSS much more than Bootstrap, and also Bootstrap is bloated. It comes with unnecessary styles that is hard to change or override, effectively making the codebase more fragile for future development in terms of styling.

TailwindCSS is more like a design system than a simple CSS framework. That's why I initially considered going with Radix Primitives + TailwindCSS as this is a great combo, unstyled yet accessible and performant primitive components and the power and structured approach TailwindCSS brings. But as the case study is one page, it would only bring in additional complexity so I decided against that.

## Technologies and Resources Used

- React
- TailwindCSS
- Vite
- TypeScript
