let dataV={"nodes": [
{"name":"Pyrolysis"},
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
{"source":"Households", "target":"Curbside Collection", "value":0.1037, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.611, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.001, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.0933, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0083, "optimal":"yes"} , 
{"source":"Segregation", "target":"LABS from chemical recycling of PE", "value":0.0485, "optimal":"yes"} , 
{"source":"Segregation", "target":"C4 Gas Mixture Pyrolysis", "value":0.0013, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.0335, "optimal":"yes"} ]}; 
