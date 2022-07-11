let dataV={"nodes": [
{"name":"Landfill"},
{"name":"LDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"LABS from chemical recycling of PE"},
{"name":"Light Liquid Fuel Pyrolysis"},
{"name": "Losses"}
],
 "links": [
 {"source":"LDPE", "target":"Households", "value":0.7147, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.4015, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.3132, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.3661, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0323, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0646, "optimal":"yes"} , 
{"source":"Segregation", "target":"LABS from chemical recycling of PE", "value":0.20800000000000002, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.0723, "optimal":"yes"} ]}; 
