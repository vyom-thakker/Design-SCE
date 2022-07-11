let dataV={"nodes": [
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"LDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"LABS from chemical recycling of PE"},
{"name":"Light Liquid Fuel Pyrolysis"},
{"name": "Losses"}
],
 "links": [
 {"source":"Incineration", "target":"Landfill", "value":0.0001, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.7147, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.0501, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.6647, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Incineration", "value":0.0007, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.045, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.004, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0079, "optimal":"yes"} , 
{"source":"Segregation", "target":"Incineration", "value":0.0007, "optimal":"yes"} , 
{"source":"Segregation", "target":"LABS from chemical recycling of PE", "value":0.0255, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.0089, "optimal":"yes"} ]}; 
