//1. Use the D3 library to read in samples.json.
// d3.json("static/js/samples.json").then((importedData) => {
//     var data = importedData;
// });


d3.json("static/js/samples.json").then(function(error, data) {
    console.log(data);
  });
  


//2.Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
//*Use `sample_values` as the values for the bar chart.
//* Use `otu_ids` as the labels for the bar chart.
//*Use `otu_labels` as the hovertext for the chart.
