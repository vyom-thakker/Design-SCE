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
{"source":"Households", "target":"Curbside Collection", "value":0.2607, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.4541, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.2377, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.021, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0419, "optimal":"yes"} , 
{"source":"Segregation", "target":"LABS from chemical recycling of PE", "value":0.135, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.047, "optimal":"yes"} ]}; 
