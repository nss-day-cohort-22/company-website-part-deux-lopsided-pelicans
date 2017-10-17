//SERVICE OBJECTS (should we add 'type' with the ultimate, deluxe, basic??)
//ultimate service objects
const witnessEmergency = {
    'name' : 'Witness "Real" Emergency',
    'price' : '$125',
    'description' : 'Our trained professional will stage a ‘Real’ Emergency before your very eyes!',
    'packageTier' : 'Ultimate',
}

const arrest = {
    'name' : '"Real" Arrest',
    'price' : '$150',
    'description' : 'There’s no way you can make it to your niece’s Bat Mitzvah if you’re in jail!',
    'packageTier' : 'Ultimate',
}

const lastResort = {
    'name' : '"Last Resort" capsule',
    'price' : '$20',
    'description' : 'A fun non-lethal capsule just like the ones used by MI6! Choose from desired effect like hives, diarrhea, vomiting or uncontrollable shouting.',
    'packageTier' : 'Ultimate',
}

const kidnapping = {
    'name' : '"Real" Kidnapping',
    'price' : '$150',
    'description' : 'There’s no way you can make it to dinner with the in-laws if you’re in the back of an unmarked van!',
    'packageTier' : 'Ultimate',
}

const tranq = {
    'name' : 'Tranquilizer Dart',
    'price' : '$100',
    'description' : 'One of our trained professionals will pop out of nowhere and shoot a tranq dart right in your neck!',
    'packageTier' : 'Ultimate'
}

const death = {
    'name' : '"Real" Death',
    'price' : '$300',
    'description' : 'Now is your chance to fake your own death! We will even set you up with a whole new life! (One-time purchase only)',
    'packageTier' : 'Ultimate',
}


//deluxe service objects

const eyewitness = {
    'name' : 'Approached by Eyewitness',
    'price' : '$50',
    'description' : 'We’ll send our trained professional to deliver the ‘bad’ news to you!', 
    'packageTier' : 'Deluxe',
}

const callToLocation = {
    'name' : 'Call to Your Location',
    'price' : '$25',
    'description' : 'If your current location still uses a landline (which is highly unlikely), we’ll call it!',
    'packageTier' : 'Deluxe',
}

const newsStory = {
    'name' : '"Real" News Story',
    'price' : '$50',
    'description' : 'A "real" news story involving your personal tragedy will air for multiple days across all major news outlets!','packageTier' : 'Deluxe',
}

const doctor  = {
    'name' : '"Real" Doctor',
    'price' : '$75',
    'description' : '"Real" Doctor will approach you in public to inform you of a terrible personal tragedy!',
    'packageTier' : 'Deluxe',
}

const mom  = {
    'name' : '"Real" Mom',
    'price' : '$75',
    'description' : '"Real" Mom will approach you in public to inform you of a terrible personal tragedy!',
    'packageTier' : 'Deluxe',
}

const mistress  = {
    'name' : '"Real" Mistress',
    'price' : '$75',
    'description' : '"Real" Mistress will approach you in public to inform you of a terrible personal tragedy!',
    'packageTier' : 'Deluxe',
}

const fired  = {
    'name' : 'Get Fired',
    'price' : '$50',
    'description' : '"Real" Boss will fire you in a very public and embarrassing way!',
    'packageTier' : 'Deluxe',
}


//basic service objects
const phoneCall = {
    'name' : 'Repeated Phone Calls with Voicemail',
    'price' : '$10',
    'description' : 'After the first text message, we will begin calling your device at 2 minute intervals as well as leaving disturbing voicemail messages!',
    'packageTier' : 'Basic', 
}

const texts = {
    'name' : 'Repeated Text Messages',
    'price' : '$5',
    'description' : 'We will begin texting you at 15 minute intervals from your designated starting time!',
    'packageTier' : 'Basic',
}

const socialMedia = {
    'name' : 'Social Media Mentions',
    'price' : '$15',
    'description' : 'We’ll tag you in multiple social media posts so your friends and family know to keep you their thoughts and prayers!',
    'packageTier' : 'Basic',
}

const missedCall = {
    'name' : 'Missed Call Notification',
    'price' : '$5',
    'description' : 'Our software "expert" said it’s impossible to just send a notification but we’re determined to make it happen for you',
    'packageTier' : 'Basic',
}

const doctorNote  = {
    'name' : 'Doctor Note',
    'price' : '$10',
    'description' : 'No one questions why you were absent if you have a note from a "Real" Doctor!',
    'packageTier' : 'Basic',
}
const policeReport  = {
    'name' : 'Police Report',
    'price' : '$10',
    'description' : 'If anyone wonders the validity of your excuse, just show them the "Real" Police Report that proves your car was stolen!',
    'packageTier' : 'Basic',
}

const juryDuty = {
    'name' : 'Jury Duty',
    'price' : '$10',
    'description' : 'Jury Duty is honestly the worst thing that could happen to anyone. Your friends and family will pity you.',
    'packageTier' : 'Basic',
}


//ARRAYS OF SERVICES
//ultimate services array
const ultimateServices = [];

ultimateServices.push(witnessEmergency, arrestKidnapping, lastResort);

//deluxe services array
const deluxeServices = [];

deluxeServices.push(eyewitness, callToLocation, newsStory);

//basic services array
const basicServices = [];

basicServices.push(phoneCall, texts, socialMedia, missedCall);

//PACKAGE SUBSCRIPTION OBJECTS
//Ultimate subscription
const ultimateSub = {
    'One-time' : '$200',
    'Weekly' : '$400',
    'Monthly' : '$800',
    'Yearly' : '$4000',
    'Lifetime' : '$8000'
}

const deluxeSub = {
    'One-time' : '$75',
    'Weekly' : '$150',
    'Monthly' : '$400',
    'Yearly' : '$1000',
    'Lifetime' : '$2000'
}

const basicSub = {
    'One-time' : '$25',
    'Weekly' : '$50',
    'Monthly' : '$150',
    'Yearly' : '$500',
    'Lifetime' : '$1000'
}

//PACKAGE OBJECTS
const ultimatePackage = {
    'name' : 'Ultimate',
    'price' : ultimateSub,
    'services' : ultimateServices,
    'img': './images/frown-arrest.jpg',
    'vroom': './images/TransparentAmbulanceLogo.png'
}

const deluxePackage = {
    'name' : 'Deluxe',
    'price' : deluxeSub,
    'services' : deluxeServices,
    'img' : './images/fake-news.png',
    'vroom': './images/TransparentAmbulanceLogo.png'
}

const basicPackage = {
    'name' : 'Basic',
    'price' : basicSub,
    'services' : basicServices,
    'img': './images/missed-call.png',
    'vroom': './images/TransparentAmbulanceLogo.png'
}

//PACKAGE ARRAY
const packages = [];

packages.push(ultimatePackage, deluxePackage, basicPackage);

console.log(packages);

//pushing to local storage
let packagesString = JSON.stringify(packages);
localStorage.setItem("packages", packagesString);



// 
// original database, merged info with Custom to pull same properties to both pages


// let services = [
//     {
//         "tier": "Basic",
//         "texts": "Text Message",
//         "missedCall": "Missed Call notification",
//         "phoneCall": "Phone Calls with voice mail",
//         "socialMedia": "Social Media Mention",
//         "oneTimeSub": "One-time - $5",
//         "weekSub": "One week - $25",
//         "monthSub": "One month - $75",
//         "yearSub": "One year - $150",
//         "lifeSub": "Lifetime - $300",
//         "img":"./images/missed-call.png",
//     }
//     ,
//     {
//         "tier": "Deluxe",
//         // "feature1": "+ Basic Features",
//         "eyeWitness": "Eyewitness/Messenger",
//         "callToLocation": "Call to location",
//         "newsStory": "'Real' News Story",
//         "oneTimeSub": "One-time - $10",
//         "weekSub": "One week - $50",
//         "monthSub": "One month - $150",
//         "yearSub": "One year - $300",
//         "lifeSub": "Lifetime - $600",
//         "img": "./images/fake-news.png",
//     }
//     ,
//     {
//         "tier": "Ultimate",
//         // "feature1": "+ Basic Features and Deluxe Features",
//         "witnessEmergency": "Witness a 'Real' Emergency before your eyes!",
//         "arrestKidnapping": "'Real' Arrest or Kidnapping!",
//         "lastResort": "Last Resort Capsule!",
//         "oneTimeSub": "One-time - $20",
//         "weekSub": "One week - $100",
//         "monthSub": "One month - $300",
//         "yearSub": "One year - $600",
//         "lifeSub": "Lifetime - $1200",
//         "img":"./images/fake-arrest.jpg",
//     }
// ]

                        

//  One-time - $10, One week - $50, One month - $150, One year - $300, Lifetime - $600
/* <select name='Subscription' class= 'dropdown'>
<option value='One-time'>One-time - $10</option>
<option value='One week'>One week - $50</option>
<option value='One month'>One month - $150</option>
<option value='One year'>One year - $300</option>
<option value='Lifetime'>Lifetime - $600</option>
</select>*/