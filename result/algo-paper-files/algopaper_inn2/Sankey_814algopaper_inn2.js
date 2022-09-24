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
{"source":"Households", "target":"Curbside Collection", "value":0.5423, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.1724, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.4945, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0436, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0873, "optimal":"yes"} , 
{"source":"Segregation", "target":"LABS from chemical recycling of PE", "value":0.281, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.0977, "optimal":"yes"} ]}; 
