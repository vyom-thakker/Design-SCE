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
 {"source":"LDPE", "target":"Households", "value":0.6432, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.4157, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.9332, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.1257, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.8508, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0751, "optimal":"yes"} , 
{"source":"Segregation", "target":"LABS from chemical recycling of PE", "value":0.2939, "optimal":"yes"} , 
{"source":"Segregation", "target":"C4 Gas Mixture Pyrolysis", "value":0.005, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.1677, "optimal":"yes"} , 
{"source":"Segregation", "target":"Lactic acid from acid hydrolysis", "value":0.33399999999999996, "optimal":"yes"} ]}; 
