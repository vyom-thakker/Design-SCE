let dataV={"nodes": [
{"name":"Landfill"},
{"name":"HDPE"},
{"name":"LDPE"},
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
 {"source":"HDPE", "target":"Households", "value":0.4907, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.5822, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.0117, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.9558, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.1287, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.8715, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0769, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.1538, "optimal":"yes"} , 
{"source":"Segregation", "target":"LABS from chemical recycling of PE", "value":0.4411, "optimal":"yes"} , 
{"source":"Segregation", "target":"Light Liquid Fuel Pyrolysis", "value":0.1899, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":0.0078, "optimal":"yes"} ]}; 