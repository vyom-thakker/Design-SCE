let dataV={"nodes": [
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
 {"source":"LDPE", "target":"Households", "value":0.273, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":2.5677, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":2.5035, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.3372, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":2.2826, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.2014, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.0391, "optimal":"yes"} , 
{"source":"Segregation", "target":"LABS from chemical recycling of PE", "value":0.1244, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.0433, "optimal":"yes"} , 
{"source":"Segregation", "target":"Lactic acid from acid hydrolysis", "value":1.7454, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":0.3178, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.0215, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.0133, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0043, "optimal":"yes"} ]}; 