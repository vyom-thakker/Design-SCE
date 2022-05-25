let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"Landfill"},
{"name":"LDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"LABS from chemical recycling of PE"},
{"name":"C4 Gas Mixture Pyrolysis"},
{"name":"Light Liquid Fuel Pyrolysis"},
{"name": "Losses"}
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.0002, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.7147, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.0742, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.6405, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.0009, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.0666, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.006, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0118, "optimal":"yes"} , 
{"source":"Segregation", "target":"LABS from chemical recycling of PE", "value":0.0285, "optimal":"yes"} , 
{"source":"Segregation", "target":"C4 Gas Mixture Pyrolysis", "value":0.0007, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.0197, "optimal":"yes"} ]}; 
