let dataV={"nodes": [
{"name":"HDPE"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"LABS from chemical recycling of PE"},
{"name":"Light Liquid Fuel Pyrolysis"},
{"name":"Me-Lactate from alcoholysis"},
{"name": "Losses"}
],
 "links": [
 {"source":"HDPE", "target":"Households", "value":0.0582, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":4.0649, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":2.1827, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":1.9405, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":1.99, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1756, "optimal":"yes"} , 
{"source":"Segregation", "target":"LABS from chemical recycling of PE", "value":0.0152, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.0084, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":1.9619, "optimal":"yes"} ]}; 
