let dataV={"nodes": [
{"name":"Landfill"},
{"name":"LDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Dropoff"},
{"name":"Segregation"},
{"name":"LABS from chemical recycling of PE"},
{"name":"Light Liquid Fuel Pyrolysis"},
{"name": "Losses"}
],
 "links": [
 {"source":"LDPE", "target":"Households", "value":0.7147, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.6257, "optimal":"yes"} , 
{"source":"Households", "target":"Dropoff", "value":0.0042, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.0848, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.5705, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0503, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Segregation", "value":0.0036, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Losses", "value":0.0005, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.1013, "optimal":"yes"} , 
{"source":"Segregation", "target":"LABS from chemical recycling of PE", "value":0.3262, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.1135, "optimal":"yes"} ]}; 
