let dataV={"nodes": [
{"name":"LDPE"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"LABS from chemical recycling of PE"},
{"name":"Light Liquid Fuel Pyrolysis"},
{"name":"Lactic acid from acid hydrolysis"},
{"name": "Losses"}
],
 "links": [
 {"source":"LDPE", "target":"Households", "value":0.5105, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":1.1871, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":1.4961, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.2015, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":1.364, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.1204, "optimal":"yes"} , 
{"source":"Segregation", "target":"LABS from chemical recycling of PE", "value":0.28300000000000003, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.0985, "optimal":"yes"} , 
{"source":"Segregation", "target":"Lactic acid from acid hydrolysis", "value":0.9538, "optimal":"yes"} ]}; 
