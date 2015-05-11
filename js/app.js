App = Ember.Application.create({});

var posts = [{
    id: '1',
    title: "Rails is Omakase",
    author: { name: "d2h" },
    date: new Date('12-27-2012'),
    excerpt: "There are lots of à la carte software environments in this world. Places where in order to eat, you must first carefully look over the menu of options to order exactly what you want.",
    body: "I want this for my ORM, I want that for my template language, and let's finish it off with this routing library. Of course, you're going to have to know what you want, and you'll rarely have your horizon expanded if you always order the same thing, but there it is. It's a very popular way of consuming software.\n\nRails is not that. Rails is omakase."
}, {
    id: '2',
    title: "The Parley Letter",
    author: { name: "d2h" },
    date: new Date('12-24-2012'),
    excerpt: "My [appearance on the Ruby Rogues podcast](http://rubyrogues.com/056-rr-david-heinemeier-hansson/) recently came up for discussion again on the private Parley mailing list.",
    body: "A long list of topics were raised and I took a time to ramble at large about all of them at once. Apologies for not taking the time to be more succinct, but at least each topic has a header so you can skip stuff you don't care about.\n\n### Maintainability\n\nIt's simply not true to say that I don't care about maintainability. I still work on the oldest Rails app in the world."
}];

// cost should be a calculated property from the incidents. that is a summation of incident cost. no need to define and track it twice.
var themes = [
  {
      id: '1',
      name: "Deployment",
      cost: "$11,000", //change to computed property from incidents data
  },
  {
      id: '2',
      name: "Design",
      cost: "$12,000",
  },
  {
      id: '3',
      name: "Testing",
      cost: "$6,000",
  },
  {
      id: '4',
      name: "Capacity",
      cost: "$9,500",
  },
  {
      id: '5',
      name: "Monitoring",
      cost: "$1,500",
  },
  {
      id: '6',
      name: "People",
      cost: "$5,000",
  }
];

var incidents = [
  {
      id: '1',
      majorincidenId: "M10002345",
      description: "Axe Server Outage on Lorem Ipsum",
      fullDescription: "On March 26th 2015 at 8:00 AM PST, the mailbox used as a queue to auto-generate support tickets began copying email instead of moving it, causing the system to become unresponsive. As part of troubleshooting, the active mailbox was switched to another server, mitigating the issue",
      cost: "$1000",
      iscompliant: 'yes',
      themeId: "1",
      application: "Deliver and Store (D&S) enables global digital distribution of Microsoft software images and updates to end customers through various channels (MSDN, VLSC, Office Portal, etc.)",
      bussinessImpact: "The system was not accessible to factory operations workers nor in use otherwise, but the details we have on the impact to the business are unclear."
  },
  {
      id: '2',
      majorincidentId: "M10003456",
      description: "Box Network intermittent issue Lorem Ipsum",
      fullDescription: "On March 5th, 2015 at 09:00am a free preview download of Office for Mac was released, and the large file size and popularity effectively DDOSed the D&S system",
      cost: "$4000",
      iscompliant: 'yes',
      themeId: "1",
      application: "Nokia’s Legacy SAP ECC P10 system is still used in factories formerly owned by Nokia: Hanoi, Reynosa and Manaus",
      bussinessImpact: "The system was not accessible to factory operations workers nor in use otherwise, but the details we have on the impact to the business are unclear."
  },
  {

      id: '3',
      majorincidentId: "M10003456",
      description: "Box Network intermittent issue Lorem Ipsum",
      fullDescription: "On March 5th, 2015 at 09:00am a free preview download of Office for Mac was released, and the large file size and popularity effectively DDOSed the D&S system",
      cost: "$6000",
      iscompliant: 'yes',
      themeId: "1",
      application: "Nokia’s Legacy SAP ECC P10 system is still used in factories formerly owned by Nokia: Hanoi, Reynosa and Manaus",
      bussinessImpact: "The system was not accessible to factory operations workers nor in use otherwise, but the details we have on the impact to the business are unclear."
  },
  {

      id: '4',
      majorincidentId: "M10003456",
      description: "Box Network intermittent issue Lorem Ipsum",
      fullDescription: "On March 5th, 2015 at 09:00am a free preview download of Office for Mac was released, and the large file size and popularity effectively DDOSed the D&S system",
      cost: "$6000",
      iscompliant: 'yes',
      themeId: "2",
      application: "Nokia’s Legacy SAP ECC P10 system is still used in factories formerly owned by Nokia: Hanoi, Reynosa and Manaus",
      bussinessImpact: "The system was not accessible to factory operations workers nor in use otherwise, but the details we have on the impact to the business are unclear."
  },
  {

      id: '5',
      majorincidentId: "M10003456",
      description: "Box Network intermittent issue Lorem Ipsum",
      fullDescription: "On March 5th, 2015 at 09:00am a free preview download of Office for Mac was released, and the large file size and popularity effectively DDOSed the D&S system",
      cost: "$6000",
      iscompliant: 'yes',
      themeId: "2",
      application: "Nokia’s Legacy SAP ECC P10 system is still used in factories formerly owned by Nokia: Hanoi, Reynosa and Manaus",
      bussinessImpact: "The system was not accessible to factory operations workers nor in use otherwise, but the details we have on the impact to the business are unclear."
  },
  {

      id: '6',
      majorincidentId: "M10003456",
      description: "Box Network intermittent issue Lorem Ipsum",
      fullDescription: "On March 5th, 2015 at 09:00am a free preview download of Office for Mac was released, and the large file size and popularity effectively DDOSed the D&S system",
      cost: "$6000",
      iscompliant: 'yes',
      themeId: "3",
      application: "Nokia’s Legacy SAP ECC P10 system is still used in factories formerly owned by Nokia: Hanoi, Reynosa and Manaus",
      bussinessImpact: "The system was not accessible to factory operations workers nor in use otherwise, but the details we have on the impact to the business are unclear."
  },
  {

      id: '7',
      majorincidentId: "M10003456",
      description: "Box Network intermittent issue Lorem Ipsum",
      fullDescription: "On March 5th, 2015 at 09:00am a free preview download of Office for Mac was released, and the large file size and popularity effectively DDOSed the D&S system",
      cost: "$8000",
      iscompliant: 'yes',
      themeId: "4",
      application: "Nokia’s Legacy SAP ECC P10 system is still used in factories formerly owned by Nokia: Hanoi, Reynosa and Manaus",
      bussinessImpact: "The system was not accessible to factory operations workers nor in use otherwise, but the details we have on the impact to the business are unclear."
  },
  {

      id: '8',
      majorincidentId: "M10003456",
      description: "Box Network intermittent issue Lorem Ipsum",
      fullDescription: "On March 5th, 2015 at 09:00am a free preview download of Office for Mac was released, and the large file size and popularity effectively DDOSed the D&S system",
      cost: "$1500",
      iscompliant: 'yes',
      themeId: "4",
      application: "Nokia’s Legacy SAP ECC P10 system is still used in factories formerly owned by Nokia: Hanoi, Reynosa and Manaus",
      bussinessImpact: "The system was not accessible to factory operations workers nor in use otherwise, but the details we have on the impact to the business are unclear."
  },
  {

      id: '9',
      majorincidentId: "M10003456",
      description: "Box Network intermittent issue Lorem Ipsum",
      fullDescription: "On March 5th, 2015 at 09:00am a free preview download of Office for Mac was released, and the large file size and popularity effectively DDOSed the D&S system",
      cost: "$5000",
      iscompliant: 'yes',
      themeId: "5",
      application: "Nokia’s Legacy SAP ECC P10 system is still used in factories formerly owned by Nokia: Hanoi, Reynosa and Manaus",
      bussinessImpact: "The system was not accessible to factory operations workers nor in use otherwise, but the details we have on the impact to the business are unclear."
  },
  {

      id: '10',
      majorincidentId: "M10003456",
      description: "Box Network intermittent issue Lorem Ipsum",
      fullDescription: "On March 5th, 2015 at 09:00am a free preview download of Office for Mac was released, and the large file size and popularity effectively DDOSed the D&S system",
      cost: "$1500",
      iscompliant: 'yes',
      themeId: "5",
      application: "Nokia’s Legacy SAP ECC P10 system is still used in factories formerly owned by Nokia: Hanoi, Reynosa and Manaus",
      bussinessImpact: "The system was not accessible to factory operations workers nor in use otherwise, but the details we have on the impact to the business are unclear."
  },
  {

      id: '11',
      majorincidentId: "M10003456",
      description: "Box Network intermittent issue Lorem Ipsum",
      fullDescription: "On March 5th, 2015 at 09:00am a free preview download of Office for Mac was released, and the large file size and popularity effectively DDOSed the D&S system",
      cost: "$5000",
      iscompliant: 'yes',
      themeId: "6",
      application: "Nokia’s Legacy SAP ECC P10 system is still used in factories formerly owned by Nokia: Hanoi, Reynosa and Manaus",
      bussinessImpact: "The system was not accessible to factory operations workers nor in use otherwise, but the details we have on the impact to the business are unclear."
  }
];

App.Router.map(function () {
    this.resource('themes', function () {
        this.resource('theme', { path: ':theme_id' });


    });
    this.resource('about');
    this.resource('posts', function () {
        this.resource('post', { path: ':post_id' });

    });

});





App.PostsRoute = Ember.Route.extend({
    model: function () {
        return posts;
    }
});

App.PostRoute = Ember.Route.extend({
    model: function (params) {
        return posts.findBy('id', params.post_id);
    }
});

App.ThemesRoute = Ember.Route.extend({
    model: function () {
        return themes;
    }
});

App.ThemeRoute = Ember.Route.extend({
    model: function (params) {
        var data = {
            theme: themes.findBy('id', params.theme_id),
            incidents: incidents.filterBy('themeId', params.theme_id)
        }
        return data;
    }
});

App.ThemeView = Ember.View.extend({
    didInsertElement: function () {
        $.AdminLTE.boxWidget.activate();
        //$('#')
    }
});

App.PostController = Ember.ObjectController.extend({
    isEditing: false,

    actions: {
        edit: function () {
            this.set('isEditing', true);
        },

        doneEditing: function () {
            this.set('isEditing', false);
        }
    }
});

var showdown = new Showdown.converter();

Ember.Handlebars.helper('format-markdown', function (input) {
    return new Handlebars.SafeString(showdown.makeHtml(input));
});

Ember.Handlebars.helper('format-date', function (date) {
    return moment(date).fromNow();
});
