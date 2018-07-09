# Fair Teams

A simple and colourful team-making app which generates balanced teams based on the players' ratings.

---

### Developer notes

#### Table of contents

- Brief
- Design Decisions
- Technologies Used
- Personal Thoughts
- Further Improvements

---

### Brief

Create an app which:
- Randomly makes teams from 10 (or _n_) players
- Implement balancing depending on player level

---

### Design Decisions

The app should meet an **MVP** (minimum viable product), therefore creating a list of players, then generating two teams (and meeting the brief requirements) should be a given. These should take center-stage and be visually clear as to the intent of the app.

Added extras can be editing a player, and the skill-based system.

---

### Technologies Used

* React

I decided upon using React for this project as it helps promote a structured, modular approach with use of componentised app structure, individual or shared state between various parts,  and also being a popular, well-backed platform with a plethora of useful packages available. Any questions about React have probably already been answered too should any questions arise.
I started with `create-react-app` and restructured to my fitting.

* Sass

Sass provides a helpful toolkit when working with CSS, including readable variable syntax, functions and code-nesting. 
In this instance I've used the simple `sass watch` command to output my `scss` to `css` which for my purposes worked fine. If I thought that others would be working on this too then a more robust, recreatable task runner such as **gulp** would of worked, which I have used in the past.

* Bootstrap

Bootstrap makes it faster to get off the ground and take the early headaches away when it comes to styling and pretty much just not having a hideous app then doesn't encourage you to keep on working on it. 
Although the html code won't look as pure, if probably a little cluttered, and sometimes the styles can trick you into not putting your own design stamp on elements, I personally don't find this a problem and appreciate these frameworks.

---

### Personal Thoughts

I believe the _exclusion of Redux_ simplified the making-of this project simply because the size, and simplicity of the state changes and sharing was minimal, and not using Redux gives you once less thing to worry about. That said, should this concept be expanded, and states be want to be persisted, or actions become more complex etc, Redux would be handy. 

Gulp could have very well been used, if not for Sass but for the ocean of other useful options, such as minification, or uglifying.

Given the time constraints I found it particularly challenging to decide what features to prioritize, and if to push for better styling over even more extras. Given the same task again I would plan on laying out a clear feature-goals list in order, therefore spending less planning/thinking time overall.

---

### Further Improvements

* Redux Persisted State
* Routes
* Further breaking down of components
* Strict user input validation
* Responsive Testing
* Minification
* Footer with link to repo
* 404 Page
* Favicon / Branding Guidelines


