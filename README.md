## Preview

![Alt text](preview.jpg?raw=true "Title")

## Limitations
- This project uses pnpm. You need to have it set up already.

- If you don't know how to properly edit a JSON file or run the project, this project unfortunately isn't for you.

- I unfortunately don't have time to support this project for other users, because it's really just meant for me, but it still might be useful for others, therefore I have it public, aside form portfolio purposes.

- This is only a single page CV for now, some time in the future, it'll be compatible with multiple pages, but probably only containing additional experiences.

- Content is fixed to 833 px * 1178 px, so it's a bit too large for 1080p screens, therefore you'll have to scroll a little bit. I used this specific size, because it's a pretty good preview for what the page looks like as a PDF.

- 1 link for social (f. e. LinkedIn), 1 link for a repo. If you want to use more, you can either fork and / or edit the project to add more, or use something like linktree for your social link, which will then lead to all your socials in one place.

- 2 experience and 2 education entries. It can theoretically fit 3 small experience entries, but I have limited it to 2, because they'll usually be larger. If you still want to try to fit 3, change the line "const experienceLimit ..." near the top in /cv/src/app/components/experience.tsx accordingly. You can put more experience and education entries into data.json, but only the 2 most recent ones will be used (not by order in data.json, but sorted by the end year in the code).

- I don't know how many languages fit, but probably at least 6, should be more than enough.

- Skills are limited to 10, you can add more in data.json, but they'll be sorted alphabetically and by value, so in the end, only the 10 best skills are used.

- If like 3 entries in the contact section overflow, the text might clip into the education section, so try using shorthands / abbreviations in the street address (for city, state, street, etc.) and also try to keep the other entries as short as possible. A regular github link to a profile should fit (if your user name isn't excessive), but a long social link probably won't. For both I use a redirect from a very short domain I have. It's kinda like "abc.def/gh" for github and "abc.def/in" for LinkedIn. If you don't have / want a domain, you could use a well-known URL shortener.

- This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Google Fonts.

## Getting Started
1. Put an image of yourself as "portrait.jpg", with a 1:1 aspect ratio, I used 1600 px * 1600 px, into /cv/public/.
2. Still in /cv/public/, copy "placeholder_data.json" and rename it to "data.json".
3. Fill out data.json with your values. You can add / remove array elements from education, languages, skills, experiences, or activities (contained in an experience entry). There are hard limits for education (2), skills (10), and experiences (2), that are enforced in the code, but not for languages or activities. If something overflows after filling out data.json, try shortening some entries or remove some less important information.
4. Install dependencies with "pnpm install".
5. Run the development server with "pnpm dev".
6. Open [http://localhost:3000](http://localhost:3000) with your browser.
7. Save page as PDF or use "Print", then select the entry "save as PDF". If you don't know how to do that with your browser, check the web for instructions.
8. Hopefully everything will have come out as I intended, it does for me at least. If it doesn't, but you are experienced enough, try modifying the project. I unfortunately don't have time to support this project for other users, because it's really just meant for me, but it still might be useful for others, therefore I have it public, aside form portfolio purposes.

## To-do

- Add tests to check for possible unintended behaviour such as overflows
- Hard limit acivities to 8 or so

## Credits

### Icons
- License: CC Attribution License (https://www.svgrepo.com/page/licensing/#CC%20Attribution)
- Author: Dazzle UI (https://www.svgrepo.com/author/Dazzle%20UI/)
- Note: No changes to the original files were made, though I did create 3 more icons based on an icon (circle), also, in the project, I inverted the colors in some places to improve visibility. See /public/icons/CREDITS for more information.
