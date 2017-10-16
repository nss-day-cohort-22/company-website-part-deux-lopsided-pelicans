//SERVICE OBJECTS (should we add 'type' with the ultimate, deluxe, basic??)
//ultimate service objects
const witnessEmergency = {
    'name' : 'Witness "Real" Emergency',
    'price' : '$125',
    'description' : 'Our trained professional will stage a ‘Real’ Emergency before your very eyes!'
}

const arrestKidnapping = {
    'name' : '"Real" Arrest or Kidnapping',
    'price' : '$150',
    'description' : 'There’s no way you can make it to your niece’s Bat Mitzvah if you’re in jail or in the back of an unmarked van!'
}

const lastResort = {
    'name' : '"Last Resort" capsule',
    'price' : '$20',
    'description' : 'A fun non-lethal capsule just like the ones used by MI6! Choose from desired effect like hives, diarrhea, vomiting or uncontrollable shouting.'
}

//deluxe service objects

const eyewitness = {
    'name' : 'Approached by Eyewitness',
    'price' : '$50',
    'description' : 'We’ll send our trained professional to deliver the ‘bad’ news to you!' 
}

const callToLocation = {
    'name' : 'Call to Your Location',
    'price' : '$25',
    'description' : 'If your current location still uses a landline (which is highly unlikely), we’ll call it!'
}

const newsStory = {
    'name' : '"Real" News Story',
    'price' : '$50',
    'description' : 'A "real" news story involving your personal tragedy will air for multiple days across all major news outlets!'
}


//basic service objects
const phoneCall = {
    'name' : 'Repeated Phone Calls with Voicemail',
    'price' : '$10',
    'description' : 'After the first text message, we will begin calling your device at 2 minute intervals as well as leaving disturbing voicemail messages!' 
}

const texts = {
    'name' : 'Repeated Text Messages',
    'price' : '$5',
    'description' : 'We will begin texting you at 15 minute intervals from your designated starting time!'
}

const socialMedia = {
    'name' : 'Social Media Mentions',
    'price' : '$15',
    'description' : 'We’ll tag you in multiple social media posts so your friends and family know to keep you their thoughts and prayers!'
}

const missedCall = {
    'name' : 'Missed Call Notification',
    'price' : '$5',
    'description' : 'Our software "expert" said it’s impossible to just send a notification but we’re determined to make it happen for you'
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
    'subcription price' : ultimateSub,
    'services' : ultimateServices
}

const deluxePackage = {
    'name' : 'Deluxe',
    'price' : deluxeSub,
    'services' : deluxeServices
}

const basicPackage = {
    'name' : 'Basic',
    'price' : basicSub,
    'services' : basicServices
}

//PACKAGE ARRAY
const packages = [];

packages.push(ultimatePackage, deluxePackage, basicPackage);

console.log(packages);

//pushing to local storage
const packagesString = JSON.stringify(packages);
localStorage.setItem("packages", packagesString);