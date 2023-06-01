const url ="https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// using d3
d3.json(url).then(function(data){
    console.log(data);
})

let dropdown;
let optSample;

//var OTUdata = d3.json(url).then((data) => console.log(data.samples[0]));
d3.json(url).then((sample) => {
    //dropdown list values
    dropdown = sample.names;
    //display test subject id dropdown
    displayOptions(dropdown);
    
    //display default  demographic and charts (using first sample, index 0)
    displayData(sample, 0, -1);

    optSample = sample;
    // On change to the DOM, call optionChanged()
    d3.select("#selDataset").on("change", optionChanged(this.value));

});