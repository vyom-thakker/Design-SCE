let dataV={"nodes": [
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
 {"source":"LDPE", "target":"Households", "value":0.7147, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.2198, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.495, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.2004, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0177, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0354, "optimal":"yes"} , 
{"source":"Segregation", "target":"LABS from chemical recycling of PE", "value":0.0858, "optimal":"yes"} , 
{"source":"Segregation", "target":"C4 Gas Mixture Pyrolysis", "value":0.0022, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.0592, "optimal":"yes"} ]}; 
