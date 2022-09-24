let dataV={"nodes": [
{"name":"Pyrolysis"},
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
{"name": "Losses"}
],
 "links": [
 {"source":"LDPE", "target":"Households", "value":0.406, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":1.7945, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":1.9393, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.2612, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.0001, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":1.7681, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.156, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.3201, "optimal":"yes"} , 
{"source":"Segregation", "target":"LABS from chemical recycling of PE", "value":0.0042, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.0015, "optimal":"yes"} , 
{"source":"Segregation", "target":"Lactic acid from acid hydrolysis", "value":1.4418, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.1761, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.1088, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0352, "optimal":"yes"} ]}; 
