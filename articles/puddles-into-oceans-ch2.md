---
title: "The Power of a Good Prompt: How 20 Minutes of Planning Saved Hours of Coding"
date: "2025-10-03"
tags: ["artificial intelligence", "claude code", "prompt engineering", "software development", "gemini"]
author: "Farid"
category: "Ideas"
language: "English"
---

*Chapter 2 of the Childhood Saga series*

If there's one lesson I've learned from years of building software, it's this: time spent planning is never wasted. The same principle applies when you're working with AI as your co-pilot.

Most developers I know approach AI coding assistants with a "let's see what happens" mentality. Fire off a quick prompt, get some code, iterate from there. It's fast, it's agile, it's... expensive. Especially when you're worried about burning through token limits and subscription costs.

So I did something different. Before typing a single command into Claude Code, I spent twenty minutes crafting what I call "the founding document" of the project.



## The Anatomy of an Effective Initial Prompt

I opened a new chat with Claude and started a conversation. Not to generate code—at least not yet. To think through the problem together. I explained my vision: an app that transforms daily activities into epic bedtime stories. Claude asked questions, proposed features I hadn't considered, raised security considerations I would have overlooked, helped me think through edge cases.

We iterated back and forth, refining the concept, discussing trade-offs, crystallizing the requirements. Then I asked Claude to synthesize everything into a comprehensive founding document—a detailed prompt with the complete technical specification, boilerplate requirements, architecture decisions, the whole package.

What could have taken hours or even weeks of traditional analysis and documentation was resolved in twenty minutes of focused conversation. By the time I moved to Claude Code, I wasn't figuring out what to build anymore. I knew exactly what I wanted.

The prompt covered:

**The Vision and Purpose:**  
What is Childhood Saga? An app that transforms mundane daily activities into epic bedtime stories. Not just any stories—narratives where the child is always the hero, where brushing teeth becomes a quest to defeat the Sugar Goblins, where going to bed is preparing for adventures in the Dream Realm.

**The Technical Stack:**  
I wanted something modern but proven. React/NextJs for the frontend because I know it well and can debug it quickly. Firebase/Firestore for the backend because I needed something that could scale without me babysitting servers at midnight. Anthropic's Claude API for the story generation because, well, that was the whole point of entering this contest.

**The Core Functionality:**  
Parents input simple activities: "went to the park," "ate vegetables," "took a bath." The app processes these through different epic modes (Adventure, Legend, Mystery, Comedy) and generates age-appropriate stories. Stories get saved to a family library. Bilingual support from day one—Spanish and English—because my son is growing up between cultures.

**The User Experience:**  
Simple, intuitive, mobile-first. Parents are tired at bedtime; they don't want to navigate complex interfaces. Clean input form, one-click story generation, beautiful presentation of the narrative. 

**The Constraints:**  
This needed to be built fast. MVP quality but production-ready. No authentication complexity in v1—focus on the core experience. Mocked data for testing but real database persistence from the start.

I documented the data models, the expected flow, even some edge cases I wanted handled gracefully. What happens if the API fails? What if a parent inputs something inappropriate? How do we maintain the child's name consistently across stories?

Twenty minutes. That's all it took to create a comprehensive blueprint.



## The Moment of Truth: First Contact with Claude Code

With my founding document ready, I fired up Claude Code. Fresh install, clean terminal, that blinking cursor waiting for instructions.

I pasted my entire prompt—all of it—and hit enter.


![Childhood Saga Responsive](/assets/first-prompt.png)

Then I waited.

Claude Code started thinking. Not just generating code, but actually architecting the solution. I watched as it broke down my requirements, proposed a project structure, asked clarifying questions about specific implementation details.

We had a brief back-and-forth about file organization and component hierarchy. I made a few decisions about naming conventions and confirmed I wanted to use Firebase v9 modular syntax (because I'd rather not deal with compatibility issues later).

And then Claude Code went to work.



## When It Actually Works on the First Try

I'm not exaggerating when I say this: the MVP worked on the first compilation.

Not "worked with some bugs." Not "mostly worked except for this one thing." It *worked*.

![Childhood Saga Responsive](/assets/first-version.png)

The interface loaded cleanly. The form accepted input. The mocked data flowed through the system perfectly—Claude Code had intelligently created a fallback system to test the UI without hammering any APIs during initial development. But when I checked Firestore, there it was: properly structured, correctly formatted, ready for production.

Database persistence. Working integration structure. Responsive UI. Error handling. Loading states.

All from one well-crafted initial prompt.

## From Mock to Magic: Connecting the Real APIs

With the skeleton working, it was time to bring it to life. First stop: connecting Claude's API for actual story generation.

This is where I expected friction. API keys, configuration, error handling for rate limits, dealing with streaming responses. But Claude Code had already scaffolded everything I needed. I simply added my API credentials, and it worked. First try.

The real test came with personalization. I wanted each story to use my son's actual name—not "the brave hero" or "a young adventurer," but *his* name. I updated the prompt template to include the child's name as a parameter.

One prompt. No iteration needed. Claude maintained perfect consistency throughout entire stories, naturally weaving the name into the narrative without it feeling forced or repetitive.



## The Gemini Experiment: Why I Chose Google's Newest Model for images

Here's where things got interesting. I needed images. Lots of them.

Background images for each story theme (adventure, mystery, space, dinosaurs, underwater quests). A warm, inviting logo of a parent reading to their child. And most ambitiously: unique illustrations for each generated story.

I could have gone with DALL-E or Midjourney. Both are proven, both produce beautiful results. But then I saw the announcement: Google had just released Gemini 2.5 Flash for images (affectionately nicknamed "nano banana"), and I'm a sucker for trying new tools.

The timing was perfect. If I was going to build something experimental for a contest, why not experiment all the way down?



## Generating Worlds: The Background Collection

I started with themed backgrounds. Each story mode needed its own visual identity:
- Adventure: lush forests and mountain paths
- Mystery: moonlit castles and foggy landscapes  
- Space: cosmic nebulas and distant planets
- Dinosaurs: prehistoric jungles
- Underwater: coral reefs and ocean depths
- Pirates: stormy seas and treasure islands
- Dragons: medieval kingdoms
- Robots: futuristic cities
- Magic: enchanted forests
- Superheroes: dynamic cityscapes
- Animals: safari landscapes
- Sports: athletic fields and stadiums
- Plus one default background for the rest of the app

Thirteen backgrounds total. I expected to spend hours iterating on prompts, adjusting styles, ensuring visual coherence.

Instead? Almost every image came out right on the first generation. Gemini's understanding of visual style and thematic consistency was impressive. The images had a cohesive aesthetic without being identical—exactly what I needed.

The logo was the same story. I asked for "a warm illustration of a parent reading a bedtime story to their child, cozy and inviting." First generation. Perfect. Done.

## The Technical Challenge: Dynamic Illustrations

Static backgrounds were one thing. Dynamic, story-specific illustrations were another beast entirely.

The flow I wanted was: parent inputs activity → Claude generates epic story → Gemini creates a custom illustration matching that specific narrative → everything gets saved together in Firestore.

This required coordination between two different AI services, proper error handling, and a way to generate prompts for Gemini based on Claude's story output.

I explained this to Claude Code. It thought for a moment, then scaffolded the entire integration. API connection, prompt engineering for the image generation (extracting key visual elements from the story), error handling, loading states, the works.

First try. It worked.

I tested it with a simple input: "jumped in puddles." Claude generated an epic tale of aquatic combat. Gemini created an illustration of a small hero wielding an umbrella like a sword, facing down stylized water creatures in a rain-soaked battleground.

Perfect.



## The Mobile Pivot: One Prompt Away

With all the pieces working, I tested on my phone.It... mostly worked. The layout was responsive, but the header wasn't—it broke awkwardly on smaller screens and clearly needed a hamburger menu. Some touch targets were too small,the text felt cramped, and the story reading experience wasn't quite right.

I went back to Claude Code: "now make all the pages responsive. Specially we have to adapt the header (maybe add an hamburguer menu) and in the /dashboard in mobile version don't show all the filters, just add an filter icon and if the user click it just then show the filters. In the forge new chapter always (also in desktop) show first the describe the moment field and after the choose your theme chips.."

![Childhood Saga Responsive](/assets/childhood-saga-responsive.png)


It refactored the CSS, adjusted component layouts, implemented better spacing. A few minor tweaks after that (slightly larger fonts, better contrast on the buttons), and we had a genuinely pleasant mobile experience.

No wrestling with media queries. No debugging viewport issues. Just clear instructions and solid execution.

## The Unglamorous Truth: Where the Time Actually Went

Here's the part that doesn't make for sexy blog content but matters if you're actually building things: the coding was maybe 10% of the work.

I spent four days on this project, roughly an hour each day. That's four hours total. Maybe 20-30 minutes of that was actual interaction with Claude Code.

The rest? Infrastructure. Deployment configuration. Security rules for Firebase. Environment variables. Making sure API keys weren't exposed. Testing the build process. And the most time-consuming part: generating all those background images one by one and waiting for them to process and upload.

This is important. Infrastructure is still infrastructure. DevOps is still DevOps. You still need to understand how to deploy a Nextjs app, how to configure Firebase hosting, how to set up proper environment management.

I've experimented with some MCP (Model Context Protocol) tools to automate these tedious parts, but so far, I haven't had great results. Maybe it's the tools, maybe it's my setup, or maybe we're just not quite there yet with fully automated infrastructure management.

What Claude Code did was eliminate the "staring at a blank file wondering how to structure this component" part. The "debugging why this API call isn't working" part. The "refactoring this for the third time because I didn't think through the data flow" part.

It was also an excellent partner for fixing Firebase rules and deployment issues through conversation—providing CLI commands for granting permissions to service accounts and handling all those finicky configuration details. But I'm aware that if I didn't know what to ask for, or where to look for vulnerabilities and how to troubleshoot them, it probably would have been a headache. The tool amplifies expertise; it doesn't replace it (yet).

It gave me back time to focus on the parts that actually required human judgment: Does this visual style work? Is this user flow intuitive? Are these security rules too permissive?



## The Token Economics: Debunking the Doomers

Remember those dire warnings about burning through usage limits? Time for the reveal.

After four days of development—building the entire app, multiple iterations, testing, all while also using Claude for other work throughout the week—I'd consumed 30% of my weekly Sonnet 4.5 allocation.

![Childhood Saga Responsive](/assets/usage.png)

Thirty percent.

Not because I was being stingy with requests. Not because I was rationing my usage. But because well-structured prompts and clear requirements mean you don't waste tokens on confusion and back-and-forth.

The doomers weren't lying exactly—they were just approaching it wrong. If you treat AI coding assistants like a magic eight ball, asking vague questions and hoping for miracles, yes, you'll burn through tokens. But if you approach it like you would a senior developer—with clear requirements, specific requests, and thoughtful architecture—the economics work.



## What We Built in Four Hours

By the time I submitted the contest entry, I had:

- A fully functional web application with production-ready code
- Real-time database integration with proper data persistence  
- Claude API integration for dynamic story generation
- Gemini API integration for custom illustrations
- Thirteen themed backgrounds and a custom logo
- Mobile-optimized responsive design
- Error handling and loading states throughout
- A family library feature to save and revisit stories
- Proper security configurations and environment management

Was it perfect? No. Every app has rough edges. But was it genuinely useful? Absolutely. Did it accomplish what I set out to build? Completely.

And I still had time to prepare my healthcare interoperability presentation.



## The Real Lesson: Clarity Compounds

Here's what this experience taught me: in the age of AI-assisted development, the bottleneck isn't coding speed—it's conceptual clarity.

The twenty minutes I spent crafting that initial prompt saved me hours, maybe days, of iterative debugging and refactoring. The clear mental model I had of the app's architecture meant Claude Code could execute efficiently rather than guessing at my intentions.

This isn't about AI replacing developers. It's about AI amplifying human intentionality. The clearer you are about what you want to build and why, the more powerful these tools become.

And that's a skill worth cultivating, regardless of what tools you're using.

---

*Next up: Chapter 3 - Polishing the Gem: Performance, Security, and the Art of Iteration. Where we talk about production readiness, the surprising challenges that remained, and what it takes to go from "works on my machine" to "ready for real users."*

---


**Next in this series:**
- [Chapter 1: Turning Puddles into Oceans: Building an AI That Transforms the Mundane into Epic Tales](https://www.farid.codes/articles/turning-puddles-ino-oceans)
- [Chapter 2: The Development Sprint](https://www.farid.codes/articles/puddles-into-oceans-ch2)

---

*Built from Buenos Aires with mate, intentionality, and the belief that good planning beats brute force every time.*