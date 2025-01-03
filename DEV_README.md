# Built in vite

Install node & npm 
Run in your terminal:
**npm run dev** to see your application on your local host

## For adding new images to an old campaign
**Let's take an example, you want to add images to paulSmith folder**
- First get the poster and turn into a webp image (go onto google and look for webp translation, all very accessible)
- Add the poster to the paulSmith folder and call it 'poster4.webp' for example
- Now visit the data.json file
- Under 'id: 6' ('title: Paul Smith') you shall see this:  ' "posters": ["/media/paulSmith/poster1.webp", "/media/paulSmith/poster2.webp", "/media/paulSmith/poster3.webp"]. ' Simply add /media/paulSmith/poster4.webp" into tis list and it should appear.
- Happy coding!