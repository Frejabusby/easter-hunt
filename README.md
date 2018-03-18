# :hatching_chick: Team Project: Easter Egg Hunt :hatching_chick:

The final day of this sprint conveniently ends when Easter starts, so it seems fitting for your newly formed team to build an Easter egg hunt!

At the end of the sprint, we'll help you to deploy your sites so you can share the joy with Record Union at the demo, and also with your friends and family! :gift:

## How to complete this project

The idea of this project is to create a page which tries to re-create the fun of a festive Easter egg hunt within a page.

You should aim to build a page which a number of clickable pictures or links. Clicking on one of these should reveal whether there's an egg hidden there, or not. So some of the links should do nothing, while some should lead to presents and goodies!

Since it's impossible to hand out candy through websites (for now. We can only keep hoping for this to change!), we need to find creative ways to give other gifts hidden in eggs. Since we have Record Union helping this spring, they're going to help out by giving you some awesome things to show as gifts. From music and facts about their artists, to pictures of their awesome dog Hefner :dog:

The page should be built something like this:

### The "Easter Egg Hunt" view

:hatching_chick: The hunt view should have at least 20 clickable things on it.<br />
:hatching_chick: When clicking a thing, it should either reveal an egg, or nothing.<br />
:hatching_chick: There should be at least 12 eggs hidden.<br />
:hatching_chick: Once revealed, if the visitor clicked on a egg, it should lead to a gift page with some of the material Record Union has provided.

### Gifts

:gift: A gift view should be about an artist, or the Record Union office dog.<br />
:gift: Try to make the pages stand out from each other a little bit; whether its a different design, or different colors.

## How to approach this as a team

How you approach this is completely up to your team. One suggestion is to split up the gift pages between your team members so that each member can concentrate on building a few pages themselves, and then the entire team works together on the hunt view.

To make it easier to work on a project with this many different designs, it may be a good idea to create one common stylesheet which contains some core CSS which can be shared between pages, but then to use a separate stylesheet for the current gift page the visitor is looking at. This is up to your team to decide during your planning.

**When building pages like this, don't forget to keep an eye on your CSS specificity**. For example, let's say you had a default style for titles on gift pages defined using a selector like `.gift .title { }`, then say you're building a gift page for the artist "Cleo", then you could create a container `div` with classes like `gift cleo`. Then, in your CSS, always prefix your styles with `.cleo`. For example, you could have something like `.gift.cleo .title { background: red; }`, etc..

## Content

You'll find a selection of audio, video, and images from Record Union in the `content` folder of this repository which you can use as the gifts for your Easter egg hunt.

## :boom: Success!

After completing this project, you should feel super ready to have a long weekend and eat some candy, for starters. You should also feel a little more comfortable working as a team, and using GitHub. You should feel comfortable using simple JavaScript to control the DOM - choosing what present to show when. Your knowledge of HTML and CSS should be growing.

## :runner: Stretch Goals

Done with the main task? Try to come up with some fun stretch goals within your company. Here's some ideas:

1. Make some (or all) of the gift pages have some fitting music inside them.
1. Make the dog pages have a dog barking noise inside them.
1. Make it so when a gift page loads, it has a small animation, as if unwrapping the gift in some way. Perhaps you could make it fade in, or fold open, or flip over, or some other creative design!
