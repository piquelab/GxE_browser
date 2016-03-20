
// Set up a session variable & store an integer
// Used to order the tracks displayed on the browser
Session = { TrackCounter: 0 }

// Declare variables for the templates
var select_template, tabs_template;

// Helper function to instantiate a template
// @which_id: ID to insert HTML, e.g., #content
function showTemplate(template, data, which_id){
	var html    = template(data);
	$(which_id).html(html);
}

$('document').ready(function() {

	// Compile the templates
	var source = $("#select-template").html();
	select_template = Handlebars.compile(source);

	var source = $("#tabs-template").html();
	tabs_template = Handlebars.compile(source);

	// Push the templates to the page
	showTemplate(tabs_template, track_data, "#select-nav")
	showTemplate(select_template, track_data, "#content")

	// Simulate a click on the first tab, otherwise
	// Upon loading it won't show any tab
	// $('#select-nav > li:first-child > a').click()
	// EDIT: no longer necessary, using template '@first'

	// Add the browser to the page
    var div = $("#igvDiv")[0],
            options = {
                showNavigation: true,
                genome: "hg19",
                locus: "chr1:155,160,475-155,184,282",
                tracks: [
                    {
                        name: "Genes (Gencode v18)",
                        url: "http://igv.broadinstitute.org/annotations/hg19/genes/gencode.v18.collapsed.bed",
                        order: -1,
                        displayMode: "EXPANDED"
                    }
                ]
            };
    igv.createBrowser(div, options);

    
    //////////////////////
    // Helper Functions //
    //////////////////////

	// Function to add tracks on "submit" button
	$("#js-add-tracks").click(function(){
		console.log("Adding tracks!");

		// Iterate through the track data & add all files related
		// to cell type / treatment combinations that are selected
		$(":selected").each(function(){ 
			var ctIdx = $(this).data("ct");
			var txIdx = $(this).data("tx");

			// Add the corresponding tracks to the browser
			var tracks = track_data["celltypes"][ctIdx]["treatments"][txIdx]["tracks"]
			tracks.forEach(function(track){
				console.log("Adding track " + track.url);
				track.order = Session.TrackCounter; // Add tracks in order
				igv.browser.loadTrack(track);
				Session.TrackCounter += 1 // Increment the counter
			})
			// for( var i = 0; i < tracks.length; i++ ) {
			// 	console.log("Adding track " + tracks[i]["url"]);
			// 	// Add track using the IGV API
			// 	igv.browser.loadTrack( tracks[i] )
			// }
		})

		// Finally, clear the selections and close the modal
		$(".track-select").children().removeAttr("selected");
		$('#trackModal').modal('hide');
	}) // end js-add-tracks onclick

	// Clear all tracks from the browser
	$("#js-rm-tracks").click(function(){
		console.log("Removing all tracks");
		// For some reason the removeAllTracks function
		// does not work well
		// igv.browser.removeAllTracks();

		// Start at 3 to keep broser navigation and gene tracks
		while( igv.browser.trackViews.length > 3 ) {
			igv.browser.removeTrack( igv.browser.trackViews[3].track)
		}
		Session.TrackCounter = 0;
	}) // end js-rm-tracks
})
