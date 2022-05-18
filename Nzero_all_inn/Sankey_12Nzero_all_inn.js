let dataV={"nodes": [
{"name":"Landfill"},
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
 {"source":"LDPE", "target":"Households", "value":0.6922, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.1306, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.7252, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.0977, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.6612, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0583, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.1167, "optimal":"yes"} , 
{"source":"Segregation", "target":"LABS from chemical recycling of PE", "value":0.3161, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.1099, "optimal":"yes"} , 
{"source":"Segregation", "target":"Lactic acid from acid hydrolysis", "value":0.0864, "optimal":"yes"} ]}; 
