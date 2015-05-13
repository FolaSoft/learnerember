App = Ember.Application.create({
    LOG_TRANSITIONS: true
});
var azureIncidents = [
  {
      id: '1',
      majorincidenId: "M10002345",
      description: "ECIT MBS Partner Website Critical Period DNS Outage",
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
      themeId: "1",
      application: "Nokia’s Legacy SAP ECC P10 system is still used in factories formerly owned by Nokia: Hanoi, Reynosa and Manaus",
      bussinessImpact: "The system was not accessible to factory operations workers nor in use otherwise, but the details we have on the impact to the business are unclear."
  }
];


var plaftormIncidents = [

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
  }
];

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
      name: "Azure",
      cost: "$11,000", //change to computed property from incidents data
      description: "Revenue & Brand",
      incidents: azureIncidents,
      show: true,
      tagLine: "Incdent(s) in this category has a potential revenue and brand impact. Compared to total major incidents, 57.1% fall all into Azure category.",

  },
  {
      id: '2',
      name: "Platform Specific",
      cost: "$12,000",
      description: "External Customer",
      incidents: plaftormIncidents,
      show: false,
      tagLine: "Incdent(s) in this category affected external customers. Compared to total major incidents, 14.3% fall all into Platform Specific category.",
  },
  {
      id: '3',
      name: "Exchange",
      cost: "$6,000",
      description: "23,000 Internal Users",
      incidents: [],
      tagLine: "Incdent(s) in this category affected 23,000 internal users. Compared to total major incidents, 14.3% fall all into Platform Specific category.",
  },
  {
      id: '4',
      name: "Dynamic CRM Online",
      cost: "$9,500",
      description: "External & Sales Impact",
      incidents: [],
      tagLine: "Incdent(s) in this category affected external cusotmers & sales imapct. Compared to total major incidents, 14.3% fall all into Platform Specific category.",
  },
 
];

var recommendations = [
    {
        id: '1',
        details: "text",
    },
    {
        id: '2',
        details: "text",
        },
        {
        id: '3',
        details: "text",
        },
];


var incidents = [
  {
      id: '1',
      majorincidentId: "MI 2167",
      description: "ECIT MBS Partner Website Critical Period DNS Outage",
      fullDescription: "An Azure DNS issue caused important reporting webpages to become inaccessible for 2h 40min at a critical time of month.",
      cost: "",
      iscompliant: 'yes',
      themeId: "1",
      application: "Deliver and Store (D&S) enables global digital distribution of Microsoft software images and updates to end customers through various channels (MSDN, VLSC, Office Portal, etc.)",
      bussinessImpact: "Impacted month end revenue processing for MSIT Corp users and external partners and agents.",
      rootCauseCategory: "Single Point of Failure",
      rootCause: "MSIT has a dependency upon Azure DNS worldwide",
      howDidWeKnow: "Feature Team"
  },
  {
      id: '2',
      majorincidentId: "MI 2162",
      description: "Azure ExpressRoute Gateway failure impacting MSIT users",
      fullDescription: "25 MSIT VMs suddenly disappeared when the Azure ExpressRoute Gateway went into a dead state",
      cost: "$4000",
      iscompliant: 'yes',
      themeId: "1",
      application: "TBD",
      bussinessImpact: "TBD",
      rootCauseCategory: "Insufficient Auto-Mitigation",
      rootCause: "Azure failed to automatically recover their failing Express Route Gateway when it went into a failed state",
      howDidWeKnow: "Feature Team"
  },
  {

      id: '3',
      majorincidentId: "MI 2149",
      description: "20k users unable to access Sales CRM Online for 5h",
      fullDescription: "In anticipation of planned router maintenance in Quincy, BGP traffic was failed over to the secondary BGP path, but the MS Edge Enterprise team wasn't able to receive it.",
      cost: "$6000",
      iscompliant: 'yes',
      themeId: "1",
      application: "TBD",
      bussinessImpact: "20K+ CRM Online (MSX) users were not able to access CRM for 5 hours, resulting in disruptions to the sales process.The sales team was unable to perform their operations and ensure CRM data is up to date.",
      rootCauseCategory: "Insufficient Monitoring",
      rootCause: "The service(s) syncing permissions failed to draw attention to the problem in a meaningful way, allowing the incident to occur and preventing quick identification of the cause.",
      howDidWeKnow: "TBD"
  },
  {

      id: '4',
      majorincidentId: "MI 2166",
      description: "SESIT BI MSVoice application impacted for 16h",
      fullDescription: "MS Voice users were intermittently unable to access the candidate generated files on the Direct Share",
      cost: "$6000",
      iscompliant: 'yes',
      themeId: "2",
      application: "TBD",
      bussinessImpact: "The system was not accessible to factory operations workers nor in use otherwise, but the details we have on the impact to the business are unclear.",
      rootCauseCategory: "Insufficient Configuration Validation",
      rootCause: "The MSVoice Application team changed their security group to a distribution group, breaking access in Active Directory.",
      howDidWeKnow: "TBD"
  },
  {

      id: '5',
      majorincidentId: "MI 2156",
      description: "10h Microsoft Exchange Outage",
      fullDescription: "A firewall failed, blocking email traffic to and from corporate email accounts",
      cost: "$6000",
      iscompliant: 'yes',
      themeId: "3",
      application: "Exchange sends and receives email within the company and to/from external email accounts.",
      bussinessImpact: " (1) 23K MS internal email accounts were unable to send or receive email for 10 hours (users from non-064D, i.e. Exchange & CORP forest). ",
      rootCauseCategory: "Insufficient Configuration Validation",
      rootCause: "An incorrectly configured secondary firewall meant it wasn't available for failover when needed.",
      howDidWeKnow: "TBD"
  },
  {

      id: '6',
      majorincidentId: "MI 2149",
      description: "20k users unable to access Sales CRM Online for 5h",
      fullDescription: "Permissions stopped syncing between the IDWEB Security Group and Azure's Active Directory.",
      cost: "$5000",
      iscompliant: 'yes',
      themeId: "4",
      application: "TBD",
      bussinessImpact: "20K+ CRM Online (MSX) users were not able to access CRM for 5 hours, resulting in disruptions to the sales process.The sales team was unable to perform their operations and ensure CRM data is up to date..",
      rootCauseCategory: "Insufficient Monitoring",
      rootCause: "The service(s) syncing permissions failed to draw attention to the problem in a meaningful way, allowing the incident to occur and preventing quick identification of the cause",
      howDidWeKnow: "TBD"
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
    model: function (params) {
        var data = {
            themes  : themes,
            incidents: incidents.filterBy('themeId', params.theme_id)
    }
    
      //return data;
       return themes;
    }
});

//App.FrequencyRoute = Ember.Route.extend({
//    model: function () {
//        return themes;
//    }
//});

//App.ThemeShowRoute = Ember.Route.extend({
//    renderTemplate: function () {
//        this.render('theme.show');
//    }
//});


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

//Ember.View.reopen({
//    didInsertElement: function () {
//        $.AdminLTE.boxWidget.activate();
//        google.load("visualization", "1", { packages: ["corechart"] });
//        google.setOnLoadCallback(drawChart);
//        drawChart();
//    },
//    afterRenderEvent: function () {
//        //google.load("visualization", "1", { packages: ["corechart"] });
//        //google.setOnLoadCallback(drawChart);
//        //drawChart();
//    }
//});
App.ThemesView = Ember.View.reopen({
    
        didInsertElement: function () {
            $.AdminLTE.boxWidget.activate();
            google.load("visualization", "1", { packages: ["corechart"] });
            google.setOnLoadCallback(drawChart);
            drawChart();
            console.log("I am in settimeout outside ");
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
