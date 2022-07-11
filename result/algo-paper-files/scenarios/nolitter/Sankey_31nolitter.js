let dataV={"nodes": [
{"name":"LDPE"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"LABS from chemical recycling of PE"},
{"name":"C4 Gas Mixture Pyrolysis"},
{"name":"Light Liquid Fuel Pyrolysis"},
{"name":"Lactic acid from acid hydrolysis"},
{"name": "Losses"}
],
 "links": [
 {"source":"LDPE", "target":"Households", "value":0.7081, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.0385, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.6539, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.0927, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.5962, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0526, "optimal":"yes"} , 
{"source":"Segregation", "target":"LABS from chemical recycling of PE", "value":0.3003, "optimal":"yes"} , 
{"source":"Segregation", "target":"C4 Gas Mixture Pyrolysis", "value":0.0072, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.1983, "optimal":"yes"} , 
{"source":"Segregation", "target":"Lactic acid from acid hydrolysis", "value":0.0308, "optimal":"yes"} ]}; 
