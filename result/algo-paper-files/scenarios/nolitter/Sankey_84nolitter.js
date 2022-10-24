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
 {"source":"LDPE", "target":"Households", "value":0.152, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":3.2716, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.7378, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":2.6858, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.6727, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0594, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.0295, "optimal":"yes"} , 
{"source":"Segregation", "target":"LABS from chemical recycling of PE", "value":0.0003, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.0001, "optimal":"yes"} , 
{"source":"Segregation", "target":"Lactic acid from acid hydrolysis", "value":0.4869, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":0.1559, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.0162, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.01, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0032, "optimal":"yes"} ]}; 