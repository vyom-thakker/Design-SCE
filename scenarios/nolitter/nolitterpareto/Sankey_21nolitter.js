let dataV={"nodes": [
{"name":"HDPE"},
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
 {"source":"HDPE", "target":"Households", "value":0.0001, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.6882, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.1542, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.7424, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.1, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.6769, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0597, "optimal":"yes"} , 
{"source":"Segregation", "target":"LABS from chemical recycling of PE", "value":0.2969, "optimal":"yes"} , 
{"source":"Segregation", "target":"C4 Gas Mixture Pyrolysis", "value":0.0068, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.1918, "optimal":"yes"} , 
{"source":"Segregation", "target":"Lactic acid from acid hydrolysis", "value":0.1239, "optimal":"yes"} ]}; 