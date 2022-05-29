let dataV={"nodes": [
{"name":"LDPE"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rLDPE"},
{"name":"Lumber"},
{"name":"LABS from chemical recycling of PE"},
{"name":"C4 Gas Mixture Pyrolysis"},
{"name":"Light Liquid Fuel Pyrolysis"},
{"name":"Lactic acid from acid hydrolysis"},
{"name": "Losses"}
],
 "links": [
 {"source":"LDPE", "target":"Households", "value":0.6906, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.14, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.732, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.0986, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.6674, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0589, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.0507, "optimal":"yes"} , 
{"source":"Segregation", "target":"LABS from chemical recycling of PE", "value":0.2707, "optimal":"yes"} , 
{"source":"Segregation", "target":"C4 Gas Mixture Pyrolysis", "value":0.0062, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.1748, "optimal":"yes"} , 
{"source":"Segregation", "target":"Lactic acid from acid hydrolysis", "value":0.1125, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.0279, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.0172, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0056, "optimal":"yes"} ]}; 
