# belly-button-challenge



In this assignment, you will build an interactive dashboard to explore the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

Instructions
Complete the following steps:

1. Use the D3 library to read in samples.json from the URL https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.

2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
. Use sample_values as the values for the bar chart.
. Use otu_ids as the labels for the bar chart.
. Use otu_labels as the hovertext for the chart.

![image](https://github.com/AbisolaOlakanmi/belly-button-challenge/assets/123206066/2b969b26-9939-43b4-b66e-217bda61fdd6)


3. Create a bubble chart that displays each sample.

. Use otu_ids for the x values.
. Use sample_values for the y values.
. Use sample_values for the marker size.
. Use otu_ids for the marker colors.
. Use otu_labels for the text values.
<img width="689" alt="image" src="https://github.com/AbisolaOlakanmi/belly-button-challenge/assets/123206066/be1489fa-0ae8-4454-a13e-fd8b6a4b6c39">


4. Display the sample metadata, i.e., an individual's demographic information.

5. Display each key-value pair from the metadata JSON object somewhere on the page.
6. <img width="294" alt="image" src="https://github.com/AbisolaOlakanmi/belly-button-challenge/assets/123206066/96fedb58-a943-4203-9799-381c3c84e7de">

