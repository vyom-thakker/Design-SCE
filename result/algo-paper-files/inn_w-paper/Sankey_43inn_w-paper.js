let dataV={"nodes": [
{"name":"Landfill"},
{"name":"HDPE"},
{"name":"LDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"LABS from chemical recycling of PE"},
{"name":"Light Liquid Fuel Pyrolysis"},
{"name": "Losses"}
],
 "links": [
 {"source":"HDPE", "target":"Households", "value":0.0236, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.7084, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.6452, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.0869, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.5882, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0519, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.1038, "optimal":"yes"} , 
{"source":"Segregation", "target":"LABS from chemical recycling of PE", "value":0.3319, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.1172, "optimal":"yes"} ]}; 
