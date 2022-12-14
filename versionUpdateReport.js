versionDetails = {
    releases: [
        {
            name: "V1",
            releaseDate: "25.08.2021",
            bugID: ["#123", "#736"],
            features: ["voiceCall", "gaming"],
            authors: ["naveen", "manimaran"],
            type: "major"
        },
        {
            name: "V2",
            releaseDate: "25.09.2021",
            bugID: ["#1M3", "#1S6"],
            features: ["security", "videoQuality"],
            authors: ["kamal", "manimaran"],
            type: "patch"
        },
        {
            name: "V3",
            releaseDate: "31.03.2022",
            bugID: ["#RT3", "#73"],
            features: ["removingBug", "calender"],
            authors: ["nandhakumar", "ram"],
            type: "enhancement"
        },
        {
            name: "V4",
            releaseDate: "01.04.2022",
            bugID: ["#1JI", "#787H"],
            features: ["videoQuality", "soundEffects"],
            authors: ["naveen", "manimaran"],
            type: "major"
        },
        {
            name: "V5",
            releaseDate: "12.05.2022",
            bugID: ["#6DHJ7", "#DHU8"],
            features: ["videoCall", "calender"],
            authors: ["kamal", "ram"],
            type: "patch"
        }],
    bugDetails: [
        { bugsID: "#123", Description: "Possibility of tapping/clicking buttons repeatedly" },
        { bugsID: "#736", Description: "Progress indicator" },
        { bugsID: "#6DHJ7", Description: "Repeated results on the list" },
        { bugsID: "#DHU8", Description: "Skipping selector on buttons" },
        { bugsID: "#1M3", Description: "Portrait/landscape orientation of the app" },
        { bugsID: "#1S6", Description: "Crash after tapping on button" },
        { bugsID: "#1JI", Description: "No error handling" },
        { bugsID: "#787H", Description: "Page layout at different screen resolutions/densities" },
        { bugsID: "#RT3", Description: "Specify the input type" },
        { bugsID: "#73", Description: "Push notifications" },
    ]
}

// Enter the details here ...

// Question : 1 , How many releases were made in "_____" ?

var year = "2022"                                                               // Enter the year as a string 

// Question : 2 , In which release did we have the bug "_____" ?

var yourBugID = "#RT3"                                                         // Enter the bugg ID here as a string

// Question : 3 , Who is the contributor who has worked on most of the releases?

    // The name of the contributor who has worked on many no of releases will be displayed

// Question : 4 , How many releases on perticular type ? Ex : major,patch,enhancement

var type = "major"                                                              // Enter the type

// Question : 5 , How many times the perticular feature updates ?

var feature = "removingBug"                                                     // Enter the feature.

// *****************************************************************************************************************

// Filtering functions

var updates = versionDetails.releases
var bugs = versionDetails.bugDetails

// Function 1 : Find no of updates in a year.

function findUpdatesInYear(year) {
    final = updates.filter(element => element.releaseDate.includes(year))
    console.log(`No of releases in the year ${year} is :`, final.length);
}

// Function 2 : Finding the release name in which the perticular bug is arises.

function findNameOfReleaseOfABug(bugID) {
    updates.forEach(element => {
        if (element.bugID.includes(bugID)) {
            console.log(`\nThe name of the release which has the bug '${bugID}' is :`, element.name)
            bugs.filter(function (element) {
                if (element.bugsID == bugID) {
                    console.log(`" Bug ID : ${element.bugsID}`)
                    console.log(` Description : ${element.Description} "`)
                }
            })
        }
    })
}

// Function 3 : Finding the contributor name who worked more no of project than the others.

function findTheContributor() {
    authorNames = []
    list = updates.map(element => element.authors).forEach(element => element.forEach(element => authorNames.push(element)))
    mostFrequent = 1;
    m = 0;
    for (i = 0; i < authorNames.length; i++) {
        for (j = i; j < authorNames.length; j++) {
            if (authorNames[i] == authorNames[j])
                m++;
            if (mostFrequent < m) {
                mostFrequent = m;
                authorName = authorNames[i];
            }
        }
        m = 0;
    }
    console.log(`\nThe author '${authorName}' has worked on more no of releases, The count is "${mostFrequent}"`);
}

// Function 4 : No of releases on perticular type. Ex : major , patch ,enhancement 

function getNoOfReleasesOfType(typeOfRelease) {
    final = updates.filter(element => element.type.includes(typeOfRelease))
    console.log(`\nNo of releases of the type ${typeOfRelease} is :`, final.length);
}

// Function 5 : Finding how many times the perticular feature updated.

function getNoOfTimesFeatureUpdate(typeOfFeature) {
    final = updates.filter(element => element.features.includes(typeOfFeature))
    console.log(`\nNo of times the '${typeOfFeature}' feature updated is :`, final.length);
}

findUpdatesInYear(year)
console.log("_____________________________________________________________________________________")
findNameOfReleaseOfABug(yourBugID)
console.log("_____________________________________________________________________________________")
findTheContributor()
console.log("_____________________________________________________________________________________")
getNoOfReleasesOfType(type)
console.log("_____________________________________________________________________________________")
getNoOfTimesFeatureUpdate(feature)
