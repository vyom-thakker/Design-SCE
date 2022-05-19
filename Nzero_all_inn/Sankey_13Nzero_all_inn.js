let dataV={"nodes": [
{"name":"Landfill"},
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
 {"source":"LDPE", "target":"Households", "value":0.5771, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.8002, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":1.2137, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.1635, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":1.1066, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0977, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.1953, "optimal":"yes"} , 
{"source":"Segregation", "target":"LABS from chemical recycling of PE", "value":0.25, "optimal":"yes"} , 
{"source":"Segregation", "target":"C4 Gas Mixture Pyrolysis", "value":0.0011, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.101, "optimal":"yes"} , 
{"source":"Segregation", "target":"Lactic acid from acid hydrolysis", "value":0.5295, "optimal":"yes"} ]}; 