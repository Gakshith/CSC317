My Propmt: Hey! I’m about to paste some HTML. Could you style it for me?
ChatGpt : Yes, Sure.
My PROMPT: I want a Stylish css, Assthetic look.Please write a single CSS stylesheet and i will provide the html file after these prompt.
Here’s what I need:
Color vibe
•	ASSTHETIC LOOK LIKE APPLE WEBISTE style.
•	Background #0d1117, accent #58a6ff, text #c9d1d9.
•	Keep contrast soft—no harsh blacks/whites.
Type & hierarchy
•	Headings: Poppins, bold (600–700).
•	Body: Roboto, light/regular (400–500).
•	Clean, readable scale.
Page layout
•	Centered content, max width 900px.
•	Sections look like cards: rounded corners, soft shadows, smooth hover.
•	Consistent spacing and rhythm.
Navigation
•	Horizontal, centered nav bar.
•	Links show an underline animation on hover.
•	Use the accent blue for link color.
Projects interaction
•	Project titles expand on hover to reveal details.
•	Animate with slide-down + fade-in.
•	Retract when not hovered.
Profile image
•	Circular photo with thin accent border and a soft shadow.
•	Centered and responsive.
Social icons
•	GitHub & LinkedIn icons glow and slightly scale up on hover (~1.05–1.1).
•	Keep sizes and spacing consistent.
Responsive behavior
•	Works great on small screens.
•	Stack nav links on mobile if needed.
•	Keep cards, text, and images readable.
Deliverables
•	Output only the CSS (no extra prose).
•	Include any @import needed for Google Fonts (Poppins, Roboto).
•	Use classless/element selectors that fit typical semantic HTML.
•	Make no assumptions about JS; use pure CSS for hover/transition effects.
I’ll paste the HTML right after this. Please respond with the CSS only. make these into file ai-4-css-prompt.md and insert these text 
ChatGPT: Please provide the html file.
MyPrompt:<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>nathan muniz </title>

  <link id="css-theme" rel="stylesheet" href="styles/styles.css">
  <script src="scripts/switcher.js" defer></script>
  
</head>
<body>

<header>
<!-- Profile picture -->
<div style="text-align:center; margin:20px 0;">
  <img src="images/photo.jpg" alt="Profile picture"
       style="width:150px; height:150px; object-fit:cover; 
border-radius:50%; border:3px solid white; box-shadow:0 0 10px 
rgba(0,0,0,0.3);">
</div>

  <h1>Nathan Muniz</h1>
  <nav>
    <ul>
      <li><a href="#aboutmebio">About Me</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>

<main>
  <section id="bio">
    <h2>About Me</h2>
    <p>
I'm a third-year transfer student majoring in Computer Science at San 
Francisco State University (SFSU). My passion lies in learning about web 
development and AI development, with a long-term goal of becoming a 
full-stack engineer. I believe that being well-rounded is essential in 
this field, which is why I'm interested in working across the entire 
technology stack. In the future, I aspire to create my own software, apps, 
or add-ons that facilitate everyday tasks for people. Outside of my 
studies, I enjoy playing guitar, hiking, playing soccer, and spending time 
with friends. These interests help me maintain a balanced and creative 
perspective that I bring to my work.</p>
  </section>

  <section id="skills">
    <h2>Skills</h2>
     
      <h3>Programming Languages and Other Styles</h3>
     
      <ul>
        <li>HTML</li>
        <li>Python</li>
        <li>Java</li>
        <li>C++</li>
        <li>CSS (Learning)</li>
      </ul>
     
      <h3>Tools and Technology</h3>
       <ul>
          <li>VSCode</li>
          <li>IntelliJ</li>
          <li>Clion</li>
          <li>Terminal</li>
          <li>XCode</li>
       </ul>
     
   
  </section>

  <section id="projects">
    <h2>Projects</h2>
       <ul>
           <li class="dropdown">
            <h4>Library Manager</h4>
           <ul class="dropdown-content">
              <li>Source code written in C++</li>
              <li>Used CLion</li>
              <li>Great Project and was really fun to code as I took a 
                  great time managing different files and a lot of them 
                  branched from one another.</li>
              <li>Brief Description: Program allowed user to buy, rent, 
                and return books they used. Also allowed user to buy things within the 
                Library such as pencils, laptops, even clothing. Buyer would set there 
                available balance and program would charge the user if they had enough 
                funds available.</li>
           </ul>
           </li>

           <li class="dropdown">
            <h4>Greeting Cards Generator</h4>
           <ul class="dropdown-content">
              <li>Code written in Java</li>
              <li>Used IntelliJ</li>
              <li>Tasked with handling a lot of files in order to make the 
                program run efficiently and developed a better relationship with 
                inheritance and Java functions.</li>
              <li>Brief Description: Program allowed user to input as many 
                recipients as they wanted and chose a message and a character symbol to 
                make the greeting card out of. Based off the San Francisco Giants Baseball 
                tickets.</li>
           </ul>
           </li>
       </ul>
   
  </section>

<!-- Theme Switcher -->
<div class="theme-switcher">
    <h2>Theme Switcher</h2>
    <div class="theme-buttons">
        <button class="theme-button active" data-theme="styles">Hand-Written</button>
        <button class="theme-button" data-theme="min">Minimalist</button>
        <button class="theme-button" data-theme="creative">Creative</button>
        <button class="theme-button" data-theme="pro">Professional</button>
        <button class="theme-button" data-theme="crazy">Crazy</button>
        <button class="theme-button" data-theme="ai-1">AI 1</button>
        <button class="theme-button" data-theme="ai-2">AI 2</button>
        <button class="theme-button" data-theme="ai-3">AI 3</button>
        <button class="theme-button" data-theme="ai-4">AI 4</button>
        <button class="theme-button" data-theme="ai-3">AI Image</button>
        <button class="theme-button" data-theme="hybrid">Hybrid</button>
    </div>
</div>

</main>

<footer id="contact">
<a href="https://github.com/natemuniz/CSC317"><img src="images/githubIMG.jpeg" 
  alt="GitHub logo" width="60" height="60"></a> 

<a href="https://www.linkedin.com/in/nathan-muniz-4b1192386/"><img src="images/LinkedInIMG.jpeg" 
  alt="LinkedIn logo" width="60" height="60"></a>
</footer>



</body>
</html>
ChatGpt:/* ===========================
   Modern Aesthetic Portfolio CSS
   Palette: #0d1117 bg, #6cb4ff accent (soft blue), #c9d1d9 text
   Fonts: Poppins (headings), Roboto (body)
   =========================== */

/* Google Fonts */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&family=Roboto:wght@400;500&display=swap");

/* Theme Tokens */
:root{
  --bg: linear-gradient(180deg, #0d1117 0%, #101720 100%);
  --text: #c9d1d9;
  --muted: #a3b1bf;
  --accent: #6cb4ff; /* aesthetic blue */
  --panel: #10151d;
  --border: #1b222b;
  --radius: 16px;
  --shadow: 0 10px 24px rgba(0,0,0,.35);
  --shadow-soft: 0 6px 18px rgba(0,0,0,.25);
  --space: clamp(12px, 2vw, 24px);
  --maxw: 900px;
}

/* Base */
*{ box-sizing: border-box; }
html, body{
  margin: 0; padding: 0;
  background: var(--bg);
  color: var(--text);
  font-family: "Roboto", system-ui, -apple-system, Segoe UI, Roboto, Arial, "Noto Sans";
  line-height: 1.65;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

h1, h2, h3, h4{
  font-family: "Poppins", "Roboto", sans-serif;
  margin: 0 0 .4em 0;
  letter-spacing: .3px;
}
h1{ font-weight: 700; font-size: clamp(24px, 3.6vw, 34px); }
h2{ font-weight: 700; font-size: clamp(20px, 3vw, 26px); }
h3, h4{ font-weight: 600; }

p{ margin: .5em 0 0 0; color: var(--text); }

/* Links */
a{ color: var(--accent); text-decoration: none; transition: color .2s ease; }
a:hover{ color: #8ec7ff; }

/* Layout Containers */
header .inner,
main,
footer .inner{
  width: min(100%, calc(var(--maxw) + 2*var(--space)));
  margin-inline: auto;
  padding-inline: var(--space);
}

main{ padding: calc(var(--space) * 2) var(--space) var(--space); }

/* Header */
header{
  position: sticky; top: 0; z-index: 10;
  background: rgba(13,17,23,0.9);
  backdrop-filter: blur(10px) saturate(120%);
  border-bottom: 1px solid var(--border);
  box-shadow: 0 4px 10px rgba(0,0,0,.25);
  padding: 10px 0 8px; /* smaller header height */
  text-align: center;
}
header h1{ margin: 6px 0 0; font-weight: 700; }

/* Profile Image */
header img[alt="Profile picture"]{
  width: 120px !important;
  height: 120px !important;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid var(--accent) !important;
  box-shadow: 0 0 0 3px rgba(108,180,255,.15), var(--shadow);
  transition: transform 0.2s ease, box-shadow 0.3s ease;
}
header img[alt="Profile picture"]:hover{
  transform: scale(1.05);
  box-shadow: 0 0 20px rgba(108,180,255,0.3);
}

/* Navigation */
nav ul{
  list-style: none;
  margin: 10px 0 0;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}
nav a{
  position: relative;
  display: inline-block;
  padding: 6px 10px;
  color: var(--text);
  transition: color .25s ease;
}
nav a::after{
  content: "";
  position: absolute;
  left: 10px; right: 10px; bottom: 0;
  height: 2px; background: var(--accent);
  transform: scaleX(0);
  transform-origin: center;
  transition: transform .25s ease;
}
nav a:hover{
  color: var(--accent);
}
nav a:hover::after{ transform: scaleX(1); }

/* Sections as Cards */
section{
  width: min(100%, var(--maxw));
  margin: 0 auto var(--space) auto;
  padding: clamp(16px, 2.4vw, 28px);
  background: rgba(255,255,255,.02);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  box-shadow: var(--shadow-soft);
  transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease;
}
section:hover{
  transform: translateY(-3px);
  box-shadow: var(--shadow);
  border-color: rgba(108,180,255,.25);
}

/* Bio */
#bio p{ max-width: 70ch; color: var(--text); }

/* Skills Lists */
#skills h3{ margin-top: .8em; font-size: 1.05rem; }
#skills ul{
  list-style: none; padding: 0; margin: .4em 0 0;
  display: flex; flex-wrap: wrap; gap: 10px;
}
#skills li{
  padding: 8px 12px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: rgba(255,255,255,.03);
  color: var(--text);
  font-size: .95rem;
  user-select: none;
}

/* Projects (dropdown hover) */
#projects ul{ list-style: none; padding: 0; margin: 0; display: grid; gap: 12px; }
#projects .dropdown{
  border: 1px solid var(--border);
  border-radius: 12px;
  background: rgba(255,255,255,.03);
  overflow: clip;
  transition: border-color .2s ease, background .2s ease;
}
#projects .dropdown > h4{
  margin: 0; padding: 14px 16px;
  display: grid; grid-template-columns: 1fr auto; align-items: center; gap: 8px;
  cursor: pointer;
}
#projects .dropdown > h4::after{
  content: "▾"; opacity: .85; transition: transform .25s ease;
}
#projects .dropdown .dropdown-content{
  margin: 0;
  padding: 0 16px;
  max-height: 0;
  opacity: 0;
  transform: translateY(-6px);
  overflow: hidden;
  transition: max-height .35s ease, opacity .25s ease, transform .25s ease;
  color: var(--muted);
}
#projects .dropdown:hover,
#projects .dropdown:focus-within{
  border-color: rgba(108,180,255,.25);
  background: rgba(255,255,255,.05);
}
#projects .dropdown:hover > h4::after,
#projects .dropdown:focus-within > h4::after{
  transform: rotate(180deg);
}
#projects .dropdown:hover .dropdown-content,
#projects .dropdown:focus-within .dropdown-content{
  max-height: 520px;
  opacity: 1;
  transform: translateY(0);
  padding-bottom: 14px;
}
#projects .dropdown .dropdown-content li{ margin: 8px 0; }

/* Theme Switcher */
.theme-switcher{
  width: min(100%, var(--maxw));
  margin: 0 auto var(--space);
  padding: 16px;
  background: rgba(255,255,255,.02);
  border: 1px solid var(--border);
  border-radius: 12px;
}
.theme-buttons{ display: flex; flex-wrap: wrap; gap: 8px; }
.theme-button{
  padding: 8px 10px;
  background: rgba(255,255,255,.03);
  color: var(--text);
  border: 1px solid var(--border);
  border-radius: 999px;
  cursor: pointer;
  transition: transform .15s ease, box-shadow .2s ease, border-color .2s ease, background .2s ease;
}
.theme-button:hover{
  transform: translateY(-1px);
  border-color: rgba(108,180,255,.35);
  box-shadow: 0 0 0 3px rgba(108,180,255,.15);
}
.theme-button.active{
  background: rgba(108,180,255,.15);
  border-color: rgba(108,180,255,.6);
}

/* Footer + Social Icons */
footer{
  padding: calc(var(--space) * 2) 0;
  border-top: 1px solid var(--border);
  background: linear-gradient(0deg, rgba(255,255,255,.02), transparent);
}
footer{
  display: flex; justify-content: center; align-items: center; gap: 18px;
}
footer a{
  display: inline-flex; align-items: center; justify-content: center;
  width: 60px; height: 60px;
  border-radius: 14px;
  border: 1px solid var(--border);
  background: rgba(255,255,255,.03);
  transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease, filter .18s ease;
}
footer a:hover{
  transform: translateY(-2px) scale(1.08);
  border-color: rgba(108,180,255,.45);
  box-shadow: 0 0 0 6px rgba(108,180,255,.12), var(--shadow);
  filter: drop-shadow(0 0 12px rgba(108,180,255,.35));
}
footer img{
  width: 60px; height: 60px; object-fit: cover; border-radius: 10px;
}

/* Utilities */
:focus-visible{
  outline: 2px solid var(--accent);
  outline-offset: 3px;
  border-radius: 8px;
}

/* Responsive */
@media (max-width: 720px){
  nav ul{ gap: 12px; }
  nav a{ padding: 6px 6px; }
  section{ padding: 18px; }
  #skills ul{ gap: 8px; }
  footer a{ width: 52px; height: 52px; }
  footer img{ width: 52px; height: 52px; }

  @media (max-width: 520px){
    nav ul{ flex-direction: column; align-items: center; }
  }
}

/* Smooth Entry Animation */
@keyframes floatIn{
  from{ opacity:0; transform: translateY(8px);}
  to{ opacity:1; transform: translateY(0);}
}
section, .dropdown{ animation: floatIn .4s ease both; }
