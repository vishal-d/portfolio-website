import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
	Blog.config({
  title: "Portfolio Website",

  rss: {
    title: 'My Portfolio Website',
    description: 'This is an example of a portfolio website'
  }
});

  // code to run on server at startup
});
