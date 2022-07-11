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
 {"source":"Pyrolysis", "target":"Losses", "value":0.0008, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.7147, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.3287, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.386, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.004, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.2949, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0264, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0521, "optimal":"yes"} , 
{"source":"Segregation", "target":"LABS from chemical recycling of PE", "value":0.1263, "optimal":"yes"} , 
{"source":"Segregation", "target":"C4 Gas Mixture Pyrolysis", "value":0.0033, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.0871, "optimal":"yes"} ]}; 
