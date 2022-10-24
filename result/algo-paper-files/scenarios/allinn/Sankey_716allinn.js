let dataV={"nodes": [
{"name":"Landfill"},
{"name":"LDPE"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rLDPE"},
{"name":"Lumber"},
{"name":"LABS from chemical recycling of PE"},
{"name":"Light Liquid Fuel Pyrolysis"},
{"name":"Lactic acid from acid hydrolysis"},
{"name":"Me-Lactate from alcoholysis"},
{"name": "Losses"}
],
 "links": [
 {"source":"LDPE", "target":"Households", "value":0.2775, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":2.5416, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":2.4845, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.3347, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":2.2652, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1999, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.3998, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.1536, "optimal":"yes"} , 
{"source":"Segregation", "target":"LABS from chemical recycling of PE", "value":0.0207, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.0072, "optimal":"yes"} , 
{"source":"Segregation", "target":"Lactic acid from acid hydrolysis", "value":1.5835, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":0.0983, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.0845, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.0522, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0169, "optimal":"yes"} ]}; 